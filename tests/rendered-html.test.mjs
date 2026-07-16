import assert from "node:assert/strict";
import test from "node:test";

async function render(path = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${path}`, { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

test("server-renders the Cellaxys StoryBrand homepage", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /Told surgery is your only option/i);
  assert.match(html, /Where does it hurt/i);
  assert.match(html, /Book Your Consultation/i);
  assert.ok((html.match(/cellaxys-logo\.webp/g)?.length ?? 0) >= 2);
  assert.doesNotMatch(html, /brand-mark/);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape|react-loading-skeleton/i);
});

test("server-renders a focused avatar landing page", async () => {
  const response = await render("/knee-pain");
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /bone on bone/i);
  assert.match(html, /Consultation and imaging determine candidacy/i);
  assert.match(html, /Patient Pledge/i);
});

test("server-renders clinical staff before the patient pledge", async () => {
  const response = await render("/about");
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /Meet Our Clinical Staff/i);
  assert.match(html, /Nancy Vargas/i);
  assert.match(html, /Alejandra Bernal/i);
  assert.ok(html.indexOf("Meet Our Clinical Staff") < html.indexOf("THE PATIENT PLEDGE"));
});
