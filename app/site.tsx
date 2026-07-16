import type { ReactNode } from "react";
import Link from "./site-link";
import {
  ConsultationForm,
  Header,
  ReviewExplorer,
  ScrollOffer,
  SymptomQuiz,
  type ReviewItem,
} from "./interactive";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const pageSlugs = [
  "knee-pain",
  "back-neck-pain",
  "sports-injury",
  "about",
  "how-it-works",
  "reviews",
  "book",
  "faq",
  "financing",
  "guide",
  "thank-you",
  "library",
] as const;

export type PageSlug = (typeof pageSlugs)[number];

export const pageMetadata: Record<PageSlug, { title: string; description: string }> = {
  "knee-pain": {
    title: "Knee Pain | A Second Look Before Surgery | Cellaxys",
    description: "Explore an imaging-led, non-surgical Stem Cell option for knee pain with Cellaxys in Las Vegas.",
  },
  "back-neck-pain": {
    title: "Back & Neck Pain | Cellaxys",
    description: "Learn about physician-led Stem Cell Therapy for chronic back and neck pain after PT or chiropractic care.",
  },
  "sports-injury": {
    title: "Sports Injury Recovery | Cellaxys",
    description: "Explore a physician-led, non-surgical path back to activity for adult sports injuries.",
  },
  about: {
    title: "Meet the Cellaxys Physicians",
    description: "Meet the physician-led team guiding Cellaxys patients through imaging review, candidacy, and care.",
  },
  "how-it-works": {
    title: "How Stem Cell Therapy Works | Cellaxys",
    description: "See the Cellaxys three-step plan, from imaging review to procedure and tracked recovery.",
  },
  reviews: {
    title: "Patient Stories & Results | Cellaxys",
    description: "Explore Cellaxys patient stories by knee, back and neck, and sports injury goals.",
  },
  book: {
    title: "Book a Consultation | Cellaxys",
    description: "Request a Cellaxys consultation and imaging review. The form takes about two minutes.",
  },
  faq: {
    title: "Stem Cell Therapy FAQ | Cellaxys",
    description: "Clear answers about Stem Cell Therapy, candidacy, recovery, investment, and financing.",
  },
  financing: {
    title: "Financing & Investment | Cellaxys",
    description: "Learn about self-pay Stem Cell Therapy, CareCredit, and payment-plan options.",
  },
  guide: {
    title: "Free Guides & 60-Second Assessment | Cellaxys",
    description: "Use the Cellaxys symptom assessment or explore a free guide before booking a consultation.",
  },
  "thank-you": {
    title: "Consultation Request Received | Cellaxys",
    description: "Your Cellaxys consultation request has been received.",
  },
  library: {
    title: "Condition & Treatment Library | Cellaxys",
    description: "Explore educational resources for spine, joint, sports injury, and regenerative medicine topics.",
  },
};

const doctorMohajer = "https://cellaxys.atata.dev/wp-content/uploads/2026/07/Dr-Pouya-Mohajer-1.jpg";
const doctorBady = "https://cellaxys.atata.dev/wp-content/uploads/2026/07/Dr-Pejman-Bady-1.jpg";

const clinicalStaff = [
  {
    name: "Nancy Vargas",
    role: "Fractional Supervisor",
    image: "https://cellaxys.atata.dev/wp-content/uploads/2026/07/Nancy-Vargas.jpg",
  },
  {
    name: "Tiffany Watson",
    role: "Procedure Lead MA",
    image: "https://cellaxys.atata.dev/wp-content/uploads/2026/07/Tiffany-Watson.jpg",
  },
  {
    name: "Eden Arthur",
    role: "Medical Office Specialist",
    image: "https://cellaxys.atata.dev/wp-content/uploads/2026/07/Eden-Arthur.jpg",
  },
  {
    name: "Ashley Barrales",
    role: "Medical Office Specialist",
    image: "https://cellaxys.atata.dev/wp-content/uploads/2026/07/Ashley-Barrales.jpg",
  },
  {
    name: "Edel Maureen Ngo",
    role: "Medical Researcher",
    image: "https://cellaxys.atata.dev/wp-content/uploads/2026/07/Edel-Maureen-Ngo.jpg",
  },
  {
    name: "Carlos Ayala",
    role: "Phone Sales Lead",
    image: "https://cellaxys.atata.dev/wp-content/uploads/2026/07/Carlos-Ayala.jpg",
  },
  {
    name: "Alejandra Bernal",
    role: "Phone Operator & Scheduler",
    image: "https://cellaxys.atata.dev/wp-content/uploads/2026/07/Alejandra-Bernal.jpg",
  },
] as const;

const reviews: ReviewItem[] = [
  {
    name: "Julie Ingleston",
    category: "Back & Neck",
    quote: "I could resume activities I had not been able to do for a while.",
    result: "Lower back, hip, and knee story",
  },
  {
    name: "Keith Bettinger",
    category: "Knee",
    quote: "I can move up and down stairs and walk some distance again.",
    result: "Knee mobility story",
  },
  {
    name: "Brian Plaster",
    category: "Sports Injury",
    quote: "Running 40 miles on my 40th birthday was a huge blessing.",
    result: "Return-to-running story",
  },
  {
    name: "Rose Varney",
    category: "Knee",
    quote: "My knee is in better shape than it has been for a long time.",
    result: "Knee replacement alternative story",
  },
  {
    name: "Paula Townsend",
    category: "Back & Neck",
    quote: "It has been a world of difference for me.",
    result: "Multi-area chronic pain story",
  },
  {
    name: "Evan Dunham",
    category: "Sports Injury",
    quote: "The treatment extended my professional career.",
    result: "Former professional athlete story",
  },
];

type LandingKey = "knee" | "spine" | "sports";

type LandingData = {
  key: LandingKey;
  kicker: string;
  title: string;
  subhead: string;
  problemTitle: string;
  problem: ReactNode;
  empathy: string;
  authority: string;
  stepOne: string;
  stepTwo: string;
  stepThree: string;
  future: ReactNode;
  failure: string;
  guide: string;
  faq: { question: string; answer: string }[];
};

const landingPages: Record<LandingKey, LandingData> = {
  knee: {
    key: "knee",
    kicker: "KNEE PAIN / SURGERY SECOND OPINION",
    title: "Told you're bone on bone and need a knee replacement?",
    subhead: "Find out if that's really true - and if it isn't, explore a path back to golf, travel, and your grandkids with 3-4 days of downtime, not 3-6 months.",
    problemTitle: "“Just get the replacement” isn't the only answer.",
    problem: <><p>You've already seen a surgeon. Maybe more than one. You were told you're bone on bone and that a knee replacement is your only option - full stop.</p><p>What's eating at you isn't only the pain. It's watching your calendar revolve around a joint instead of your life: skipping golf, dreading stairs, and wondering whether this is simply what getting older looks like now.</p></>,
    empathy: "We understand how frustrating it is to be handed one path forward when you're still active and not ready to slow down.",
    authority: "Your physician reviews your imaging directly, explains what it shows in plain language, and tells you honestly whether a non-surgical option may fit.",
    stepOne: "Book a consultation and imaging review to find out what's really going on in the knee.",
    stepTwo: "Your physician confirms candidacy and builds a personalized treatment plan.",
    stepThree: "Complete the in-house procedure and follow a structured recovery plan.",
    future: <>It's Saturday morning and you're walking the back nine without stopping at the cart. It's your granddaughter's wedding and you're moving with confidence. It's the trip you almost canceled - and the view you nearly missed.</>,
    failure: "Another golf season, another trip, or another summer with the grandkids can pass while you wait for a clearer answer.",
    guide: "5 Questions to Ask Before Knee Replacement Surgery",
    faq: [
      { question: "I was told I'm bone on bone. Isn't surgery my only option?", answer: "Not necessarily. A consultation and fresh imaging review - not a prior verbal diagnosis - determines candidacy. Cellaxys does not confirm or rule out candidacy on this page." },
      { question: "Is Stem Cell Therapy legitimate?", answer: "Cellaxys care is physician-led and imaging-based. Your consultation covers what the procedure can and cannot realistically do for your specific knee." },
      { question: "Why consider self-pay care?", answer: "The decision is personal. Many patients compare the investment with time away from work, rehabilitation, and the disruption associated with a surgical path. Financing options are available." },
    ],
  },
  spine: {
    key: "spine",
    kicker: "BACK & NECK PAIN / FULL-SPINE CARE",
    title: "Tried PT and chiropractic care - still in pain?",
    subhead: "Cellaxys treats the full spine - back and neck - with physician-led Stem Cell Therapy designed to target the source, with just 3-4 days of downtime.",
    problemTitle: "You did everything right. It still hasn't worked.",
    problem: <><p>You've tried physical therapy. Maybe chiropractic care too. You did what you were told - and you're still not sleeping through the night or making it through a full workday without pain.</p><p>This isn't just physical anymore. It's the frustration of paying for relief that didn't last, the quiet worry about work, and the fear of sliding toward opioids or a surgery you hoped to avoid.</p></>,
    empathy: "We know how discouraging it is to follow every instruction and still live around your back or neck pain. That doesn't mean you're out of options.",
    authority: "Cellaxys physicians review the cervical, thoracic, and lumbar spine, identify the likely pain source, and build a plan around your imaging and history.",
    stepOne: "Book a consultation and imaging review for your back, your neck, or both.",
    stepTwo: "Your physician identifies the likely source and confirms whether you qualify.",
    stepThree: "Complete the in-house procedure and follow the Patient Pledge recovery plan.",
    future: <>It's 4:45 p.m. and you're still focused at your desk, not counting down until you can lie down. It's a full night of sleep. It's turning your head to check a blind spot without bracing for the catch.</>,
    failure: "Another year of missed workdays, disrupted sleep, and treatments that only manage symptoms can quietly become your new normal.",
    guide: "60-Second Spine Pain Assessment",
    faq: [
      { question: "I've tried everything. How is this different?", answer: "The consultation begins with imaging and a physician assessment of the disc, joint, or structure that may be driving symptoms. It is a different question than symptom management alone." },
      { question: "Is this only for low-back pain?", answer: "No. Cellaxys evaluates the full spine: cervical (neck), thoracic (mid-back), and lumbar (low-back)." },
      { question: "Is my case severe enough - or too severe?", answer: "Imaging and your medical history clarify candidacy. A consultation is an evaluation, not a commitment to treatment." },
    ],
  },
  sports: {
    key: "sports",
    kicker: "ADULT SPORTS INJURY / ACTIVE RECOVERY",
    title: "Sidelined by an injury - or sitting on one you know will get worse?",
    subhead: "Get back in the game, or get ahead of a nagging issue, with physician-led Stem Cell Therapy and just 3-4 days of downtime - not months.",
    problemTitle: "A lost season isn't the only option.",
    problem: <><p>Whether you're sidelined by a meniscus issue, rotator cuff strain, tennis elbow, or ankle injury - or you're still active but know something is getting worse - the choice can feel binary: a long surgical timeline or simply living with it.</p><p>Being active isn't just something you do. It's part of who you are. An injury threatens that identity, not only your schedule.</p></>,
    empathy: "We understand what it feels like to have a season taken away - and why you don't want to wait for a nagging issue to become a bigger one.",
    authority: "Your physician uses your imaging, activity goals, and injury history to build a return-to-activity or preventive plan grounded in your actual condition.",
    stepOne: "Book an imaging review, whether you're sidelined now or checking a nagging issue.",
    stepTwo: "Your physician confirms candidacy and builds a return-to-activity plan.",
    stepThree: "Complete the in-house procedure and follow a structured progression back to activity.",
    future: <>It's Sunday morning and you're back on the court for the rec league final. It's a 6 a.m. trail run that no longer ends with a familiar ache. It's running drills with your kid instead of coaching from a chair.</>,
    failure: "A manageable issue can quietly progress until it becomes the injury that finally sidelines you for months.",
    guide: "Non-Surgical Recovery Timelines for Common Sports Injuries",
    faq: [
      { question: "Will this get me back faster than surgery?", answer: "Many patients are back on their feet in about 3-4 days, but return-to-sport timing depends on your injury. Your physician will set realistic expectations at consultation." },
      { question: "Is this only for older arthritis patients?", answer: "No. Cellaxys also evaluates active adults recovering from or trying to get ahead of sports injuries." },
      { question: "Can you treat my child?", answer: "This site and online form are designed for adult patients. Please call the clinic directly to discuss options for a minor." },
    ],
  },
};

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
      <div className="mobile-cta-bar">
        <div><strong>Book your consultation</strong><span>Back on your feet in 3-4 days</span></div>
        <a href="tel:+17025292855" aria-label="Call Cellaxys">Call</a>
        <Link href="/book">Book</Link>
      </div>
    </>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-brand">
          <Link className="brand brand-light" href="/" aria-label="Cellaxys home"><img className="brand-logo" src={`${basePath}/cellaxys-logo.webp`} alt="" width="270" height="51" /></Link>
          <p>Physician-led, imaging-based regenerative care in Las Vegas.</p>
          <div className="pledge-mini"><span aria-hidden="true">✓</span><div><strong>Patient Pledge</strong><small>Tracked recovery at weeks 1, 12, 24 & 52</small></div></div>
        </div>
        <div>
          <h3>Start here</h3>
          <Link href="/knee-pain">Knee Pain</Link>
          <Link href="/back-neck-pain">Back & Neck Pain</Link>
          <Link href="/sports-injury">Sports Injury</Link>
          <Link href="/book">Book a Consultation</Link>
        </div>
        <div>
          <h3>Learn</h3>
          <Link href="/how-it-works">How It Works</Link>
          <Link href="/about">Meet the Physicians</Link>
          <Link href="/reviews">Reviews & Results</Link>
          <Link href="/faq">FAQ</Link>
          <Link href="/library">Condition Library</Link>
        </div>
        <div className="footer-contact">
          <h3>Las Vegas clinic</h3>
          <a href="https://maps.google.com/?q=5741+S+Fort+Apache+Rd+Las+Vegas+NV+89148" target="_blank" rel="noreferrer">5741 S Fort Apache Rd #100<br />Las Vegas, NV 89148</a>
          <a href="tel:+17025292855">(702) 529-2855</a>
          <p>Financing options available.</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2026 Cellaxys. Results vary. Consultation and imaging determine candidacy.</p>
        <div><a href="https://cellaxys.com/privacy-policy/" target="_blank" rel="noreferrer">Privacy</a><Link href="/faq">Medical disclaimer</Link></div>
      </div>
    </footer>
  );
}

function SectionHeading({ eyebrow, title, intro, centered = false }: { eyebrow?: string; title: string; intro?: string; centered?: boolean }) {
  return (
    <div className={`section-heading ${centered ? "is-centered" : ""}`}>
      {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
      <h2>{title}</h2>
      {intro ? <p>{intro}</p> : null}
    </div>
  );
}

function CtaPair({ secondary = "Take the 60-sec quiz" }: { secondary?: string }) {
  return (
    <div className="cta-pair">
      <Link className="button" href="/book">Book Your Consultation <span aria-hidden="true">→</span></Link>
      <Link className="button button-outline" href="/guide">{secondary}</Link>
    </div>
  );
}

function AuthorityStrip() {
  return (
    <div className="authority-strip">
      {[
        ["01", "Physician-led"],
        ["02", "Imaging-based review"],
        ["03", "Patient Pledge"],
        ["04", "In-house Las Vegas care"],
      ].map(([number, label]) => <div key={number}><span>{number}</span><strong>{label}</strong></div>)}
    </div>
  );
}

function StemCellBasics({ compact = false }: { compact?: boolean }) {
  return (
    <section className={`basics-section ${compact ? "is-compact" : "section"}`} id="stem-cell-basics">
      <div className="container">
        {!compact ? <SectionHeading eyebrow="THE SHORT VERSION" title="What is Stem Cell Therapy, in plain terms?" intro="A physician-performed, minimally invasive outpatient procedure designed to work with your body's natural healing response and target the source - not simply mask the symptom." /> : null}
        <div className="icon-grid four-up">
          {[
            ["MD", "Physician performed", "Your care is planned and delivered by a medical specialist."],
            ["01", "Minimally invasive", "No large incision, general anesthesia, or hospital stay."],
            ["↻", "Natural healing response", "Designed around your own biology and recovery process."],
            ["4D", "Outpatient procedure", "Most patients are back on their feet in about 3-4 days."],
          ].map(([icon, title, text]) => <article className="icon-card" key={title}><span className="icon-token">{icon}</span><h3>{title}</h3>{!compact ? <p>{text}</p> : null}</article>)}
        </div>
      </div>
    </section>
  );
}

function Plan({ steps, compact = false }: { steps?: [string, string, string]; compact?: boolean }) {
  const copy = steps ?? [
    "Book a consultation and imaging review.",
    "Your physician confirms candidacy and builds your plan.",
    "Complete the in-house procedure and tracked recovery.",
  ];
  return (
    <section className={`plan-section ${compact ? "" : "section"}`}>
      <div className="container">
        {!compact ? <SectionHeading eyebrow="THE PLAN" title="A simple, 3-step path - no guesswork." centered /> : null}
        <div className="steps-grid">
          {copy.map((step, index) => <article className="step-card" key={step}><div className="step-number">0{index + 1}</div><h3>{["Consultation & imaging", "Candidacy & custom plan", "Procedure & recovery"][index]}</h3><p>{step}</p></article>)}
        </div>
        {!compact ? <div className="centered-cta"><Link className="button" href="/book">Book Your Consultation →</Link></div> : null}
      </div>
    </section>
  );
}

function DoctorVisual() {
  return (
    <div className="doctor-visual" aria-label="Cellaxys physicians">
      <div className="photo-frame main-photo"><img src={doctorMohajer} alt="Dr. Pouya Mohajer" /></div>
      <div className="physician-chip"><img src={doctorBady} alt="Dr. Pejman Bady" /><div><strong>Physician-led care</strong><span>Imaging first. Honest answers.</span></div></div>
      <div className="downtime-card"><strong>3-4</strong><span>days of typical downtime</span><small>vs. 3-6 months for surgery</small></div>
      <span className="visual-orbit orbit-one" /><span className="visual-orbit orbit-two" />
    </div>
  );
}

function ProofCards({ limit = 3 }: { limit?: number }) {
  return (
    <div className="proof-grid">
      {reviews.slice(0, limit).map((review, index) => (
        <a className={`proof-card proof-${index + 1}`} href="https://cellaxys.com/category/patient-stories/" target="_blank" rel="noreferrer" key={review.name}>
          <div className="proof-visual"><span className="play-button" aria-hidden="true">▶</span><span className="proof-tag">{review.category}</span></div>
          <div className="proof-copy"><span className="eyebrow">PATIENT STORY</span><h3>{review.result}</h3><p>“{review.quote}”</p><span className="text-link">Watch the story →</span></div>
        </a>
      ))}
    </div>
  );
}

export function HomePage() {
  return (
    <SiteShell>
      <section className="hero home-hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">LAS VEGAS / PHYSICIAN-LED REGENERATIVE CARE</span>
            <h1>Told surgery is your only option?</h1>
            <p className="hero-subhead">Cellaxys physicians offer a non-surgical Stem Cell alternative - with patients typically back on their feet in 3-4 days, instead of the 3-6 months surgery can require.</p>
            <div className="pain-router">
              <span>Where does it hurt?</span>
              <div><Link href="/knee-pain">Knee <b>→</b></Link><Link href="/back-neck-pain">Back / Neck <b>→</b></Link><Link href="/sports-injury">Sports Injury <b>→</b></Link></div>
            </div>
            <CtaPair />
            <p className="hero-footnote"><span aria-hidden="true">✓</span> Imaging review before any treatment recommendation.</p>
          </div>
          <DoctorVisual />
        </div>
      </section>

      <AuthorityStrip />

      <section className="section problem-section">
        <div className="container split-layout">
          <SectionHeading eyebrow="YOU'VE ALREADY BEEN TOLD..." title="“Surgery is your only option.” “Just live with it.” “It will only get worse.”" />
          <div className="rich-copy"><p>You didn't hear that diagnosis and simply accept it - you started researching. Maybe a surgeon told you your knee is bone on bone. Maybe you've done months of PT for your back or neck. Maybe an old injury is quietly getting worse.</p><p>Whatever brought you here, you're not looking for sympathy. You're looking for a real option nobody has shown you yet.</p><div className="mini-router"><Link href="/knee-pain">Knee pain</Link><Link href="/back-neck-pain">Back & neck</Link><Link href="/sports-injury">Sports injury</Link></div></div>
        </div>
      </section>

      <section className="section guide-section">
        <div className="container guide-grid">
          <div className="guide-photo"><img src={doctorMohajer} alt="Dr. Pouya Mohajer of Cellaxys" /><div className="photo-caption"><strong>Dr. Pouya Mohajer</strong><span>Interventional Pain Medicine</span></div></div>
          <div><SectionHeading eyebrow="A GUIDE WITH A PLAN" title="You're not wrong to want a second opinion." /><div className="rich-copy"><p>We understand how frustrating it is to be told there's only one path forward - especially when that path costs months of your life.</p><p>Our physicians review your imaging directly, explain what's actually going on, and tell you honestly whether a non-surgical option is right for you.</p></div><Link className="text-link" href="/about">Meet your physicians <span>→</span></Link></div>
        </div>
      </section>

      <StemCellBasics />
      <Plan />

      <section className="section value-section">
        <div className="container">
          <SectionHeading eyebrow="WHY CELLAXYS" title="Why patients take a second look before surgery." centered />
          <div className="value-grid">
            {[
              ["3-4 days", "Typical downtime", "A fraction of the disruption associated with a surgical recovery."],
              ["Imaging first", "Candidacy with context", "Your physician sees the picture before recommending the path."],
              ["Patient Pledge", "Tracked recovery", "Check-ins at weeks 1, 12, 24, and 52 keep progress visible."],
              ["One clinic", "In-house in Las Vegas", "Consultation, procedure, and follow-up under one roof."],
            ].map(([stat, title, text]) => <article key={title}><strong>{stat}</strong><h3>{title}</h3><p>{text}</p></article>)}
          </div>
        </div>
      </section>

      <section className="section proof-section">
        <div className="container"><SectionHeading eyebrow="REAL PATIENTS, REAL TIMELINES" title="See the life on the other side of pain." intro="Functional recovery stories lead the way - walking stairs, moving freely, and returning to the activities patients value." /><ProofCards /><div className="centered-cta"><Link className="button button-outline" href="/reviews">View all patient stories</Link></div></div>
      </section>

      <section className="section final-cta-section">
        <div className="container final-cta-grid"><div><span className="eyebrow">THE COST OF WAITING</span><h2>The version of this year where you waited.</h2><p>Another season sidelined. Another surgery date on the calendar you hoped to avoid. Another year of “I'll deal with it later.” Find out whether there's a faster way back before you commit to the slow one.</p></div><CtaPair /></div>
      </section>
    </SiteShell>
  );
}

function LandingPage({ data }: { data: LandingData }) {
  return (
    <SiteShell>
      <section className={`hero landing-hero landing-${data.key}`}>
        <div className="container hero-grid">
          <div className="hero-copy"><span className="eyebrow">{data.kicker}</span><h1>{data.title}</h1><p className="hero-subhead">{data.subhead}</p><CtaPair secondary={`Get the free ${data.guide}`} /><p className="hero-footnote"><span aria-hidden="true">✓</span> Consultation and imaging determine candidacy.</p></div>
          <div className="condition-visual" aria-hidden="true"><div className="condition-ring ring-outer" /><div className="condition-ring ring-inner" /><div className="condition-core"><span>{data.key === "knee" ? "KNEE" : data.key === "spine" ? "SPINE" : "MOVE"}</span></div><div className="visual-note note-one">Physician reviewed</div><div className="visual-note note-two">3-4 day downtime</div></div>
        </div>
      </section>
      <AuthorityStrip />

      <section className="section"><div className="container split-layout"><SectionHeading eyebrow="THE PROBLEM" title={data.problemTitle} /><div className="rich-copy">{data.problem}</div></div></section>

      <section className="section soft-section"><div className="container guide-grid compact-guide"><div className="doctor-pair"><img src={doctorMohajer} alt="Dr. Pouya Mohajer" /><img src={doctorBady} alt="Dr. Pejman Bady" /></div><div><SectionHeading eyebrow="YOUR PHYSICIAN GUIDE" title={data.empathy} /><p>{data.authority}</p><Link className="text-link" href="/about">Meet the physicians →</Link></div></div></section>

      <StemCellBasics compact />
      <Plan compact steps={[data.stepOne, data.stepTwo, data.stepThree]} />

      <section className="section proof-section"><div className="container"><SectionHeading eyebrow="FUNCTIONAL RECOVERY" title="See what moving forward can look like." /><ProofCards limit={2} /></div></section>

      <section className="section faq-preview"><div className="container faq-grid"><SectionHeading eyebrow="COMMON QUESTIONS" title="Clear answers before you make a decision." /><div className="accordion-list">{data.faq.map((item, index) => <details open={index === 0} key={item.question}><summary>{item.question}<span aria-hidden="true">+</span></summary><p>{item.answer}</p></details>)}</div></div></section>

      <section className="section future-section"><div className="container future-grid"><div className="future-number">12<span>months</span></div><div><span className="eyebrow">THIS TIME NEXT YEAR...</span><h2>{data.future}</h2><p>Results and timelines vary, but the first step toward a clearer plan can happen now.</p><Link className="button" href="/book">Book Your Consultation →</Link></div></div></section>

      <section className="section failure-band"><div className="container"><span className="eyebrow">DON'T LET WAITING MAKE THE DECISION</span><h2>{data.failure}</h2><CtaPair secondary={`Get the free ${data.guide}`} /></div></section>
      <ScrollOffer type={data.key} />
    </SiteShell>
  );
}

function PageHero({ eyebrow, title, intro, children }: { eyebrow: string; title: string; intro?: string; children?: ReactNode }) {
  return <section className="hero page-hero"><div className="container"><span className="eyebrow">{eyebrow}</span><h1>{title}</h1>{intro ? <p className="hero-subhead">{intro}</p> : null}{children}</div></section>;
}

function AboutPage() {
  return (
    <SiteShell>
      <PageHero eyebrow="MEET THE GUIDE" title="The guide, not the hero." intro="We've walked this path with thousands of patients who were told surgery was their only option - and helped them find out if that was really true." />
      <section className="section"><div className="container split-layout"><SectionHeading eyebrow="WHY CELLAXYS EXISTS" title="We know what it's like to be handed one option and no plan B." /><div className="rich-copy"><p>Most patients arrive after seeing at least one other doctor. They've been told to get a replacement, try another round of PT, or simply live with it.</p><p>Cellaxys begins somewhere else: a real imaging review, an honest answer on candidacy, and - when it fits - a physician-led, non-surgical plan with a fraction of the downtime.</p></div></div></section>
      <section className="section soft-section"><div className="container"><SectionHeading eyebrow="MEET YOUR PHYSICIANS" title="Credentials matter. How a doctor listens matters, too." intro="Get to know the specialists who explain the imaging, answer the hard questions, and build the plan with you." />
        <div className="physician-grid">
          <article className="physician-card"><img src={doctorMohajer} alt="Dr. Pouya Mohajer" /><div><span className="pill">DIRECTOR, INTERVENTIONAL SPINE MEDICINE</span><h2>Dr. Pouya Mohajer</h2><p>Board-certified in Anesthesiology and Interventional Pain Medicine, fellowship-trained at Harvard, and a UCLA alumnus.</p><p>Known for translating complex imaging into a clear, practical conversation patients can use to make a confident decision.</p><a className="text-link" href="https://cellaxys.atata.dev/dr-pouya-mohajer/" target="_blank" rel="noreferrer">Full physician profile →</a></div></article>
          <article className="physician-card reverse"><img src={doctorBady} alt="Dr. Pejman Bady" /><div><span className="pill">MEDICAL DIRECTOR</span><h2>Dr. Pejman Bady</h2><p>Medical Director with a medical degree from Western University of Health Sciences and executive education at USC Marshall.</p><p>Patients value his patient, option-focused approach and the time he takes to explain what each path really involves.</p><a className="text-link" href="https://cellaxys.atata.dev/dr-pejman-bady/" target="_blank" rel="noreferrer">Full physician profile →</a></div></article>
        </div>
      </div></section>
      <section className="section clinical-staff-section"><div className="container"><SectionHeading eyebrow="THE TEAM BEHIND YOUR CARE" title="Meet Our Clinical Staff" intro="Our dedicated clinical staff supports every step of your care, from scheduling and patient coordination to imaging, research, and procedure assistance, ensuring a seamless patient experience." />
        <div className="clinical-staff-grid">
          {clinicalStaff.map((member) => (
            <article className="staff-card" key={member.name}>
              <div className="staff-photo"><img src={member.image} alt={member.name} /></div>
              <div className="staff-card-copy"><h3>{member.name}</h3><p>{member.role}</p></div>
            </article>
          ))}
        </div>
      </div></section>
      <section className="section pledge-section"><div className="container pledge-grid"><div className="pledge-seal"><span>52</span><small>weeks tracked</small></div><div><SectionHeading eyebrow="THE PATIENT PLEDGE" title="Care that keeps paying attention after procedure day." /><p>Outcome check-ins at weeks 1, 12, 24, and 52 help keep recovery visible and give the team a clear framework for follow-up.</p><Link className="button" href="/how-it-works">See how the plan works →</Link></div></div></section>
    </SiteShell>
  );
}

function HowItWorksPage() {
  return (
    <SiteShell>
      <PageHero eyebrow="THE PLAN + PATIENT PLEDGE" title="Here's exactly what happens - no surprises." intro="One clear path from your first imaging review to a tracked, physician-led recovery." />
      <Plan />
      <section className="section process-detail"><div className="container">
        {[
          ["01", "Consultation & Imaging Review", "A 20-40 minute visit where your physician reviews existing imaging or orders new imaging when needed, then explains in plain language what may be driving your symptoms.", "Bring imaging files, reports, a medication list, and a short timeline of what you have already tried."],
          ["02", "Physician Candidacy & Custom Plan", "Your physician decides whether you are a candidate based on imaging, medical history, goals, and the structure being treated - not a one-size-fits-all script.", "You leave knowing the recommended path, realistic expectations, investment, and alternatives."],
          ["03", "In-House Procedure & Recovery", "The procedure is performed at the Las Vegas facility. Most patients are back on their feet in about 3-4 days, then progress through a structured recovery plan.", "Progress is tracked at weeks 1, 12, 24, and 52 through the Patient Pledge framework."],
        ].map(([num, title, body, note]) => <article className="process-row" key={num}><div>{num}</div><section><h2>{title}</h2><p>{body}</p><aside>{note}</aside></section></article>)}
      </div></section>
      <section className="section pledge-section"><div className="container pledge-grid"><div className="pledge-seal"><span>✓</span><small>Patient Pledge</small></div><div><SectionHeading eyebrow="OUTCOME TRACKING" title="A recovery plan with checkpoints, not guesswork." /><p>Your physician and care team track progress across a full year. The pledge conversation at consultation explains what is included and how follow-up works for your specific plan.</p><Link className="button" href="/book">Start with a consultation →</Link></div></div></section>
    </SiteShell>
  );
}

function ReviewsPage() {
  return (
    <SiteShell>
      <PageHero eyebrow="REVIEWS & RESULTS" title="Real patients. Real timelines." intro="Filter patient stories by the goal that feels most like yours." />
      <section className="section"><div className="container"><ReviewExplorer items={reviews} /><p className="results-disclaimer">Patient stories reflect individual experiences. Results, recovery time, and candidacy vary.</p></div></section>
      <section className="section proof-section"><div className="container"><SectionHeading eyebrow="VIDEO-FIRST PROOF" title="Watch recovery in motion." /><ProofCards /></div></section>
      <section className="section final-cta-section"><div className="container final-cta-grid"><div><h2>Ready to learn what your imaging says?</h2><p>Start with a physician review and a clear candidacy conversation.</p></div><Link className="button" href="/book">Book Your Consultation →</Link></div></section>
    </SiteShell>
  );
}

function BookPage() {
  return (
    <SiteShell>
      <PageHero eyebrow="BOOK A CONSULTATION" title="Find out if you qualify." intro="Takes about 2 minutes. A real person calls you back during business hours." />
      <section className="section book-section"><div className="container book-grid"><div className="book-aside"><span className="eyebrow">WHAT HAPPENS NEXT</span><h2>A conversation, not a commitment.</h2><ol><li><span>1</span><div><strong>We call you</strong><p>A patient coordinator confirms your goals and preferred time.</p></div></li><li><span>2</span><div><strong>You meet the physician</strong><p>Your history and imaging shape the candidacy review.</p></div></li><li><span>3</span><div><strong>You leave with clarity</strong><p>Understand fit, alternatives, investment, and next steps.</p></div></li></ol><div className="privacy-note">Your information is used only to respond to your consultation request.</div></div><ConsultationForm /></div></section>
    </SiteShell>
  );
}

const faqGroups = [
  { title: "Start here", items: [
    ["What is Stem Cell Therapy, exactly?", "A physician-performed, minimally invasive outpatient procedure designed to work with your body's natural healing response and target a specific joint, spine level, or injury source."],
    ["How long is the downtime?", "Most patients are back on their feet in about 3-4 days. A physician will set expectations for your condition, procedure, and activity goals."],
    ["Is it covered by insurance?", "Stem Cell Therapy is generally a self-pay investment. CareCredit and payment-plan options may be available."],
  ]},
  { title: "Knee", items: [
    ["I was told I'm bone on bone. Is surgery my only option?", "Not necessarily. A consultation and fresh imaging review - not a prior verbal diagnosis - determines candidacy."],
    ["Will the website tell me if I qualify?", "No. Only a physician review of your history and imaging can determine candidacy."],
  ]},
  { title: "Back & neck", items: [
    ["Do you treat the neck as well as the low back?", "Yes. Cellaxys evaluates cervical, thoracic, and lumbar spine concerns."],
    ["What if PT or chiropractic care did not last?", "Bring that history to your consultation. It helps your physician understand what has been tried and what the imaging may explain."],
  ]},
  { title: "Sports injury", items: [
    ["Is this only for older arthritis patients?", "No. Cellaxys also evaluates active adults with sports injuries or nagging issues they want to address before they worsen."],
    ["Can a minor use the online form?", "The online form is designed for adult patients. Please call the clinic to discuss options for a minor."],
  ]},
];

function FaqPage() {
  return (
    <SiteShell>
      <PageHero eyebrow="FREQUENTLY ASKED QUESTIONS" title="The questions patients ask before they book." intro="Clear, plain-language answers about candidacy, recovery, investment, and what happens next." />
      <section className="section"><div className="container faq-full-grid"><aside><span className="eyebrow">JUMP TO</span>{faqGroups.map((group) => <a href={`#faq-${group.title.replaceAll(" ", "-").toLowerCase()}`} key={group.title}>{group.title}</a>)}<Link className="button button-small" href="/book">Ask your physician</Link></aside><div>{faqGroups.map((group) => <section className="faq-group" id={`faq-${group.title.replaceAll(" ", "-").toLowerCase()}`} key={group.title}><h2>{group.title}</h2><div className="accordion-list">{group.items.map(([question, answer], index) => <details open={group.title === "Start here" && index === 0} key={question}><summary>{question}<span aria-hidden="true">+</span></summary><p>{answer}</p></details>)}</div></section>)}</div></div></section>
    </SiteShell>
  );
}

function FinancingPage() {
  return (
    <SiteShell>
      <PageHero eyebrow="FINANCING & INVESTMENT" title="Understand the full cost of every path." intro="Stem Cell Therapy is a self-pay investment. The consultation gives you the exact plan and financing choices without putting a hard price on care before imaging is reviewed." />
      <section className="section"><div className="container comparison-grid"><article><span className="pill">STEM CELL THERAPY</span><h2>Plan around days, not months.</h2><ul><li>Typically 3-4 days of initial downtime</li><li>Outpatient, physician-led procedure</li><li>CareCredit and payment-plan options</li><li>Personalized quote after candidacy review</li></ul></article><article className="muted-comparison"><span className="pill">SURGERY</span><h2>Include the hidden cost of time.</h2><ul><li>Often 3-6 months of recovery</li><li>Potential time away from work</li><li>Rehabilitation and caregiver needs</li><li>Personal deductibles and out-of-pocket costs vary</li></ul></article></div></section>
      <section className="section soft-section"><div className="container financing-options"><SectionHeading eyebrow="PAYMENT OPTIONS" title="Build a plan that fits the decision." intro="The team can walk through available financing after a physician confirms what, if anything, is clinically appropriate." /><div className="icon-grid three-up"><article className="icon-card"><span className="icon-token">CC</span><h3>CareCredit</h3><p>Explore healthcare financing subject to provider terms and approval.</p></article><article className="icon-card"><span className="icon-token">PM</span><h3>Payment plans</h3><p>Ask the patient coordinator which clinic plans are currently available.</p></article><article className="icon-card"><span className="icon-token">1:1</span><h3>Clear quote</h3><p>Receive the investment for your personalized plan before deciding.</p></article></div></div></section>
      <section className="section final-cta-section"><div className="container final-cta-grid"><div><h2>Get the clinical answer first.</h2><p>No hard price can replace a physician reviewing the imaging and defining the actual plan.</p></div><Link className="button" href="/book">Book Your Consultation →</Link></div></section>
    </SiteShell>
  );
}

function GuidePage() {
  return (
    <SiteShell>
      <PageHero eyebrow="FREE GUIDE + 60-SECOND ASSESSMENT" title="Not ready to book? Start with one useful answer." intro="Choose the resource that matches what you're trying to understand." />
      <section className="section"><div className="container resource-grid">{[
        ["KNEE", "5 Questions to Ask Before Knee Replacement Surgery", "Walk into your next appointment knowing what to ask about imaging, alternatives, and recovery."],
        ["SPINE", "The 60-Second Spine Pain Assessment", "Clarify where it hurts, what you have tried, and which conversation should come next."],
        ["SPORT", "Non-Surgical Sports Injury Timelines", "Compare the questions that matter when your goal is getting back to activity."],
      ].map(([tag, title, text], index) => <article className="resource-card" key={tag}><span className="resource-number">0{index + 1}</span><span className="pill">{tag}</span><h2>{title}</h2><p>{text}</p><a className="text-link" href="#assessment">Start here →</a></article>)}</div></section>
      <section className="section soft-section" id="assessment"><div className="container narrow-container"><SymptomQuiz /></div></section>
    </SiteShell>
  );
}

function ThankYouPage() {
  return (
    <SiteShell>
      <section className="thank-you-section"><div className="container thank-you-card"><span className="complete-mark" aria-hidden="true">✓</span><span className="eyebrow">REQUEST RECEIVED</span><h1>We'll call you shortly.</h1><p>A Cellaxys patient coordinator will review your request and call during business hours. Keep your phone nearby, and gather any recent imaging or reports you already have.</p><div className="next-steps"><article><span>01</span><h3>Save our number</h3><a href="tel:+17025292855">(702) 529-2855</a></article><article><span>02</span><h3>Gather imaging</h3><p>MRI, X-ray, or CT files and reports</p></article><article><span>03</span><h3>Write down your goal</h3><p>The activity you most want back</p></article></div><div className="cta-pair"><Link className="button" href="/how-it-works">See How It Works</Link><Link className="button button-outline" href="/">Return Home</Link></div></div></section>
    </SiteShell>
  );
}

const libraryGroups = [
  { title: "Spine & Back", description: "Cervical, thoracic, and lumbar education.", links: [
    ["Neck Pain", "https://cellaxys.atata.dev/conditions/neck-pain/"], ["Chronic Back Pain", "https://cellaxys.atata.dev/conditions/chronic-back-pain/"], ["Herniated Disc", "https://cellaxys.atata.dev/conditions/herniated-disc/"], ["Sciatica", "https://cellaxys.atata.dev/conditions/sciatica/"], ["Spinal Stenosis", "https://cellaxys.atata.dev/conditions/spinal-stenosis/"],
  ]},
  { title: "Joint & Orthopedic", description: "Educational resources for everyday joint pain.", links: [
    ["Knee Arthritis", "https://cellaxys.atata.dev/conditions/knee-arthritis/"], ["Hip Pain", "https://cellaxys.atata.dev/conditions/hip-pain/"], ["Shoulder Pain", "https://cellaxys.atata.dev/conditions/shoulder-pain/"], ["Meniscus Tears", "https://cellaxys.atata.dev/conditions/meniscus-tears/"], ["Cartilage Damage", "https://cellaxys.atata.dev/conditions/cartilage-damage/"],
  ]},
  { title: "Sports Injury", description: "Return-to-activity and injury education.", links: [
    ["Sports Injuries", "https://cellaxys.atata.dev/conditions/sports-injuries/"], ["Runner's Knee", "https://cellaxys.atata.dev/conditions/runners-knee/"], ["Rotator Cuff Injury", "https://cellaxys.atata.dev/conditions/rotator-cuff-injuries-2/"], ["Achilles Tendonitis", "https://cellaxys.atata.dev/conditions/achilles-tendonitis/"], ["Overuse Injuries", "https://cellaxys.atata.dev/conditions/overuse-injuries/"],
  ]},
  { title: "Treatments", description: "The retained organic treatment library, including PRP.", links: [
    ["Platelet-Rich Plasma (PRP)", "https://cellaxys.atata.dev/treatments/platelet-rich-plasma-prp/"], ["Epidural Steroid Injection", "https://cellaxys.atata.dev/treatments/epidural-steroid-injection/"], ["Stem Cell Therapy", "https://cellaxys.com/stem-cell-therapy/"], ["Treatment Articles", "https://cellaxys.com/blog/"],
  ]},
];

function LibraryPage() {
  return (
    <SiteShell>
      <PageHero eyebrow="ORGANIC / AI-SEARCH LAYER" title="Condition & Treatment Library" intro="Educational depth for patients who want to understand their condition before they book. Existing resources stay available while the paid journey stays focused." />
      <section className="section"><div className="container library-grid">{libraryGroups.map((group) => <article className="library-card" key={group.title}><span className="eyebrow">EXPLORE</span><h2>{group.title}</h2><p>{group.description}</p><div>{group.links.map(([label, href]) => <a href={href} target="_blank" rel="noreferrer" key={label}>{label}<span aria-hidden="true">↗</span></a>)}</div></article>)}</div></section>
      <section className="section final-cta-section"><div className="container final-cta-grid"><div><h2>Found the topic. Now find your next step.</h2><p>A physician-led imaging review turns education into a plan built for your case.</p></div><Link className="button" href="/book">Book Your Consultation →</Link></div></section>
    </SiteShell>
  );
}

export function ContentPage({ slug }: { slug: PageSlug }) {
  switch (slug) {
    case "knee-pain": return <LandingPage data={landingPages.knee} />;
    case "back-neck-pain": return <LandingPage data={landingPages.spine} />;
    case "sports-injury": return <LandingPage data={landingPages.sports} />;
    case "about": return <AboutPage />;
    case "how-it-works": return <HowItWorksPage />;
    case "reviews": return <ReviewsPage />;
    case "book": return <BookPage />;
    case "faq": return <FaqPage />;
    case "financing": return <FinancingPage />;
    case "guide": return <GuidePage />;
    case "thank-you": return <ThankYouPage />;
    case "library": return <LibraryPage />;
  }
}
