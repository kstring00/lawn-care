"use client";

import { FormEvent, useState } from "react";
import { needOptions, services, site } from "../config/site";

const serviceLabel = (value: string) => {
  const service = services.find((item) => item.id === value);
  if (service) return service.title;
  if (value === "multiple") return "A few things around the yard";
  return "Not sure yet";
};

export default function YardPlanner() {
  const [need, setNeed] = useState<string>("unsure");
  const [propertyType, setPropertyType] = useState<string>("Home");
  const [zip, setZip] = useState<string>("");
  const [details, setDetails] = useState<string>("");

  const chooseNeed = (id: string) => {
    setNeed(id);
    document.getElementById("estimate")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const openText = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const message = [
      "Hi Bean’s Lawn Care! I’d like a free estimate.",
      "",
      `Service: ${serviceLabel(need)}`,
      `Property: ${propertyType}`,
      `ZIP: ${zip || "Not entered"}`,
      `What I need help with: ${details || "I’ll explain in the text."}`,
      "",
      "I can attach photos of the yard here."
    ].join("\n");

    const number = site.phone.replace(/[^+\d]/g, "");
    window.location.href = `sms:${number}?&body=${encodeURIComponent(message)}`;
  };

  return (
    <>
      <section className="needs-section" id="needs" aria-labelledby="needs-title">
        <div className="section-shell">
          <div className="section-kicker">Start with the yard, not the jargon</div>
          <div className="needs-heading-row">
            <h2 id="needs-title">What does your yard need?</h2>
            <p>
              Pick the closest match. You do not need to know the landscaping term — just tell Bean’s what is bothering you.
            </p>
          </div>
          <div className="need-grid">
            {needOptions.map((option, index) => (
              <button
                className="need-card"
                key={option.id}
                type="button"
                onClick={() => chooseNeed(option.id)}
              >
                <span className="need-index">0{index + 1}</span>
                <span className="need-label">{option.label}</span>
                <span className="need-arrow" aria-hidden="true">↘</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="estimate-section" id="estimate" aria-labelledby="estimate-title">
        <div className="section-shell estimate-layout">
          <div className="estimate-copy">
            <div className="section-kicker light">Free estimate · call or text</div>
            <h2 id="estimate-title">Show us the yard.</h2>
            <p className="estimate-lede">
              A few details are enough to start. The button opens a text to Bean’s with your answers already filled in — then you can attach photos from your phone.
            </p>
            <div className="estimate-note">
              <span className="note-dot" aria-hidden="true" />
              Preview mode: nothing entered here is stored on this website.
            </div>
          </div>

          <form className="estimate-form" onSubmit={openText}>
            <label>
              <span>What do you need help with?</span>
              <select value={need} onChange={(event) => setNeed(event.target.value)}>
                {needOptions.map((option) => (
                  <option key={option.id} value={option.id}>{option.label}</option>
                ))}
              </select>
            </label>

            <label>
              <span>Property type</span>
              <select value={propertyType} onChange={(event) => setPropertyType(event.target.value)}>
                <option>Home</option>
                <option>Rental property</option>
                <option>Other</option>
              </select>
            </label>

            <label>
              <span>ZIP code</span>
              <input
                inputMode="numeric"
                value={zip}
                onChange={(event) => setZip(event.target.value)}
                placeholder="77573"
                maxLength={10}
              />
            </label>

            <label>
              <span>What is going on?</span>
              <textarea
                value={details}
                onChange={(event) => setDetails(event.target.value)}
                placeholder="Overgrown backyard, edging around the driveway, beds need a refresh…"
                rows={5}
              />
            </label>

            <button className="estimate-submit" type="submit">
              <span>Open text to Bean’s</span>
              <span aria-hidden="true">↗</span>
            </button>
            <p className="form-helper">After the message opens, attach a few photos of the yard if helpful.</p>
          </form>
        </div>
      </section>
    </>
  );
}
