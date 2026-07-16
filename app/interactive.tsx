"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";
import Link from "./site-link";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const mainLinks = [
  { href: "/knee-pain", label: "Knee Pain" },
  { href: "/back-neck-pain", label: "Back & Neck Pain" },
  { href: "/sports-injury", label: "Sports Injury" },
  { href: "/about", label: "About" },
  { href: "/reviews", label: "Reviews" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <div className="header-inner">
        <Link className="brand" href="/" aria-label="Cellaxys home">
          <img
            className="brand-logo"
            src={`${basePath}/cellaxys-logo.webp`}
            alt=""
            width="270"
            height="51"
          />
        </Link>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {mainLinks.map((item) => (
            <Link href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="header-actions">
          <a className="phone-link" href="tel:+17025292855">
            (702) 529-2855
          </a>
          <Link className="button button-small" href="/book">
            Book a Consultation <span aria-hidden="true">↗</span>
          </Link>
          <button
            className="menu-toggle"
            type="button"
            aria-label={open ? "Close navigation" : "Open navigation"}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            <span />
            <span />
          </button>
        </div>
      </div>

      <nav className={`mobile-nav ${open ? "is-open" : ""}`} aria-label="Mobile navigation">
        {mainLinks.map((item) => (
          <Link href={item.href} key={item.href} onClick={() => setOpen(false)}>
            {item.label}
            <span aria-hidden="true">↗</span>
          </Link>
        ))}
        <Link href="/how-it-works" onClick={() => setOpen(false)}>
          How It Works <span aria-hidden="true">↗</span>
        </Link>
        <Link href="/faq" onClick={() => setOpen(false)}>
          FAQ <span aria-hidden="true">↗</span>
        </Link>
        <Link className="button" href="/book" onClick={() => setOpen(false)}>
          Book a Consultation
        </Link>
      </nav>
    </header>
  );
}

type PainArea = "" | "knee" | "hip" | "spine" | "sports" | "other";

const branchQuestions: Record<Exclude<PainArea, "">, { label: string; options: string[] }> = {
  knee: {
    label: "Has a doctor recommended surgery or mentioned bone-on-bone arthritis?",
    options: ["Yes", "No", "Not sure"],
  },
  hip: {
    label: "Has a doctor recommended surgery or reviewed recent imaging?",
    options: ["Yes", "No", "Not sure"],
  },
  spine: {
    label: "Have you already tried physical therapy or chiropractic care?",
    options: ["Yes, without lasting relief", "Yes, currently", "Not yet"],
  },
  sports: {
    label: "Which best describes your situation?",
    options: ["Currently sidelined", "Playing through it", "Nagging issue", "General soreness"],
  },
  other: {
    label: "Have you already had imaging or a physician evaluation?",
    options: ["Yes", "No", "Not sure"],
  },
};

export function ConsultationForm({ compact = false }: { compact?: boolean }) {
  const [painArea, setPainArea] = useState<PainArea>("");
  const [submitting, setSubmitting] = useState(false);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitting(true);
    window.setTimeout(
      () => window.location.assign(`${basePath}/thank-you${basePath ? "/" : ""}`),
      450,
    );
  }

  const branch = painArea ? branchQuestions[painArea] : null;

  return (
    <form className={`consultation-form ${compact ? "is-compact" : ""}`} onSubmit={submit}>
      <div className="form-progress" aria-label="Consultation form progress">
        <span className="is-active" />
        <span className={painArea ? "is-active" : ""} />
        <span />
      </div>

      <fieldset>
        <legend>Where does it hurt?</legend>
        <div className="choice-grid">
          {[
            ["knee", "Knee"],
            ["hip", "Hip"],
            ["spine", "Back / Neck"],
            ["sports", "Shoulder / Elbow / Ankle"],
            ["other", "Other"],
          ].map(([value, label]) => (
            <label className={`choice-card ${painArea === value ? "is-selected" : ""}`} key={value}>
              <input
                type="radio"
                name="pain-area"
                value={value}
                checked={painArea === value}
                onChange={() => setPainArea(value as PainArea)}
                required
              />
              <span>{label}</span>
            </label>
          ))}
        </div>
      </fieldset>

      {branch ? (
        <fieldset className="form-branch">
          <legend>{branch.label}</legend>
          <div className="select-wrap">
            <select name="prior-care" defaultValue="" required>
              <option value="" disabled>
                Select an answer
              </option>
              {branch.options.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
          </div>
        </fieldset>
      ) : null}

      <div className="field-grid">
        <label>
          <span>First name</span>
          <input name="first-name" autoComplete="given-name" required />
        </label>
        <label>
          <span>Last name</span>
          <input name="last-name" autoComplete="family-name" required />
        </label>
        <label>
          <span>Phone number</span>
          <input name="phone" type="tel" autoComplete="tel" required />
        </label>
        <label>
          <span>Email address</span>
          <input name="email" type="email" autoComplete="email" required />
        </label>
        <label>
          <span>Preferred callback</span>
          <select name="callback" defaultValue="Morning">
            <option>Morning</option>
            <option>Afternoon</option>
            <option>Evening</option>
          </select>
        </label>
        <label>
          <span>How long has this been going on?</span>
          <select name="duration" defaultValue="">
            <option value="" disabled>
              Select a timeframe
            </option>
            <option>Less than 3 months</option>
            <option>3-12 months</option>
            <option>1+ years</option>
          </select>
        </label>
      </div>

      <fieldset className="investment-field">
        <legend>Stem Cell Therapy is a self-pay investment. Which best fits you?</legend>
        <div className="radio-row">
          <label><input type="radio" name="investment" required /> Ready to invest if I qualify</label>
          <label><input type="radio" name="investment" /> I&apos;d need financing</label>
          <label><input type="radio" name="investment" /> Just researching</label>
        </div>
      </fieldset>

      <label className="consent-row">
        <input type="checkbox" required />
        <span>I agree to be contacted about my consultation request. This form does not confirm candidacy.</span>
      </label>

      <button className="button form-submit" type="submit" disabled={submitting}>
        {submitting ? "Sending..." : "Request My Consultation"} <span aria-hidden="true">→</span>
      </button>
      <p className="form-note">Takes about 2 minutes. A real person calls back during business hours.</p>
    </form>
  );
}

export type ReviewItem = {
  name: string;
  category: "Knee" | "Back & Neck" | "Sports Injury";
  quote: string;
  result: string;
};

export function ReviewExplorer({ items }: { items: ReviewItem[] }) {
  const [filter, setFilter] = useState("All");
  const filtered = useMemo(
    () => (filter === "All" ? items : items.filter((item) => item.category === filter)),
    [filter, items],
  );

  return (
    <div>
      <div className="filter-tabs" role="group" aria-label="Filter patient stories">
        {["All", "Knee", "Back & Neck", "Sports Injury"].map((item) => (
          <button
            className={filter === item ? "is-active" : ""}
            type="button"
            onClick={() => setFilter(item)}
            aria-pressed={filter === item}
            key={item}
          >
            {item}
          </button>
        ))}
      </div>

      <div className="review-grid">
        {filtered.map((item) => (
          <article className="review-card" key={`${item.name}-${item.category}`}>
            <div className="review-card-top">
              <span className="pill">{item.category}</span>
              <span className="stars" aria-label="Patient story">★★★★★</span>
            </div>
            <blockquote>“{item.quote}”</blockquote>
            <div className="review-result">{item.result}</div>
            <p>{item.name}</p>
          </article>
        ))}
      </div>
    </div>
  );
}

const quizSteps = [
  {
    question: "What are you trying to get back to?",
    answers: ["Work without pain", "Travel and family", "Sport or training", "Everyday movement"],
  },
  {
    question: "What have you already tried?",
    answers: ["Physical therapy", "Chiropractic care", "Injections", "Nothing yet"],
  },
  {
    question: "How ready are you for a second opinion?",
    answers: ["Ready now", "Within 30 days", "Still researching"],
  },
];

export function SymptomQuiz() {
  const [step, setStep] = useState(0);
  const [finished, setFinished] = useState(false);

  if (finished) {
    return (
      <div className="quiz-complete">
        <span className="complete-mark" aria-hidden="true">✓</span>
        <h2>Your next step is an imaging-led conversation.</h2>
        <p>Your answers suggest that a consultation is the clearest way to learn whether Stem Cell Therapy may fit your goals.</p>
        <Link className="button" href="/book">Book Your Consultation →</Link>
      </div>
    );
  }

  const current = quizSteps[step];

  return (
    <div className="quiz-card">
      <div className="quiz-meta">
        <span>Question {step + 1} of {quizSteps.length}</span>
        <div className="quiz-progress"><span style={{ width: `${((step + 1) / quizSteps.length) * 100}%` }} /></div>
      </div>
      <h2>{current.question}</h2>
      <div className="quiz-options">
        {current.answers.map((answer) => (
          <button
            type="button"
            key={answer}
            onClick={() => {
              if (step === quizSteps.length - 1) setFinished(true);
              else setStep((value) => value + 1);
            }}
          >
            {answer}<span aria-hidden="true">→</span>
          </button>
        ))}
      </div>
    </div>
  );
}

export function ScrollOffer({ type }: { type: "knee" | "spine" | "sports" }) {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      if (total > 0 && window.scrollY / total > 0.32) setVisible(true);
    };
    const onLeave = (event: MouseEvent) => {
      if (event.clientY <= 0) setVisible(true);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    document.addEventListener("mouseleave", onLeave);
    return () => {
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  if (!visible || dismissed) return null;

  const copy = {
    knee: ["Before you schedule surgery", "Get the 5 questions to ask before knee replacement."],
    spine: ["Still comparing options?", "Take the 60-second spine pain assessment."],
    sports: ["Plan your comeback", "See non-surgical recovery timelines for common sports injuries."],
  }[type];

  return (
    <aside className="scroll-offer" aria-label="Free guide offer">
      <button className="offer-close" type="button" onClick={() => setDismissed(true)} aria-label="Close offer">×</button>
      <span className="eyebrow">FREE RESOURCE</span>
      <h3>{copy[0]}</h3>
      <p>{copy[1]}</p>
      <Link className="text-link" href="/guide">Get the guide <span aria-hidden="true">→</span></Link>
    </aside>
  );
}
