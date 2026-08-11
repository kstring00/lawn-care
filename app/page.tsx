import YardPlanner from "../components/YardPlanner";
import { phoneHref, reviewThemes, services, site } from "../config/site";

const smsHref = `sms:${site.phone.replace(/[^+\d]/g, "")}`;

const schema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: site.businessName,
  telephone: site.displayPhone,
  email: site.email,
  areaServed: {
    "@type": "City",
    name: "League City"
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "League City",
    addressRegion: "TX"
  }
};

export default function HomePage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {site.previewMode && (
        <div className="preview-bar">Private concept preview · not the official Bean’s Lawn Care website</div>
      )}

      <header className="site-header">
        <a className="brand" href="#top" aria-label="Bean’s Lawn Care home">
          <span className="brand-mark" aria-hidden="true">
            <span className="blade blade-one" />
            <span className="blade blade-two" />
            <span className="blade blade-three" />
          </span>
          <span className="brand-copy">
            <strong>BEAN’S</strong>
            <small>LAWN CARE SERVICES</small>
          </span>
        </a>
        <nav className="desktop-nav" aria-label="Primary navigation">
          <a href="#services">Services</a>
          <a href="#work">The difference</a>
          <a href="#about">About</a>
          <a href="#estimate" className="nav-cta">Request estimate</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <div className="eyebrow"><span /> Local lawn care · League City, TX</div>
          <h1>
            Your yard,
            <span>handled.</span>
          </h1>
          <p className="hero-lede">
            Family-owned lawn care and landscaping for the work that makes a home feel cared for — mowing, crisp edges, clean-ups, refreshed beds and shaped shrubs.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#estimate">Request a free estimate <span>↘</span></a>
            <a className="button quiet" href={phoneHref}>Call {site.displayPhone}</a>
          </div>
          <div className="hero-proof" aria-label="Business highlights">
            <div><strong>5.0</strong><span>local rating</span></div>
            <div><strong>Family</strong><span>owned</span></div>
            <div><strong>Free</strong><span>estimates</span></div>
            <div><strong>Call + text</strong><span>to get started</span></div>
          </div>
        </div>

        <div className="yard-visual" aria-label="Stylized residential lawn illustration">
          <div className="sky-wash" />
          <div className="yard-sun" />
          <div className="yard-label top-label">LEAGUE CITY · TX</div>
          <div className="house">
            <div className="roof" />
            <div className="home-face">
              <div className="window"><span /><span /><span /><span /></div>
              <div className="door" />
            </div>
          </div>
          <div className="hedge hedge-left" />
          <div className="hedge hedge-right" />
          <div className="lawn-plane">
            <span className="mow-line line-1" />
            <span className="mow-line line-2" />
            <span className="mow-line line-3" />
            <span className="mow-line line-4" />
            <span className="edge-line" />
          </div>
          <div className="yard-stamp">
            <span>THE FINISH MATTERS</span>
            <strong>01 / CURB APPEAL</strong>
          </div>
        </div>
      </section>

      <section className="marquee-strip" aria-label="Service highlights">
        <div>
          <span>MOW</span><i>✦</i><span>EDGE</span><i>✦</i><span>TRIM</span><i>✦</i><span>CLEAN UP</span><i>✦</i><span>REFRESH</span><i>✦</i><span>ENJOY THE YARD</span>
        </div>
      </section>

      <section className="services-section" id="services">
        <div className="section-shell">
          <div className="section-heading split-heading">
            <div>
              <div className="section-kicker">Care that shows from the curb</div>
              <h2>Small details.<br />Big difference.</h2>
            </div>
            <p>
              Bean’s publicly lists a focused set of lawn and landscape services built around keeping residential yards clean, sharp and easier to enjoy.
            </p>
          </div>

          <div className="service-grid">
            {services.map((service, index) => (
              <article className="service-card" key={service.id}>
                <div className="service-card-top">
                  <span className="service-num">0{index + 1}</span>
                  <span className="service-icon" aria-hidden="true">{service.icon}</span>
                </div>
                <span className="service-short">{service.short}</span>
                <h3>{service.title}</h3>
                <p>{service.body}</p>
                <a href="#estimate">Ask about this <span aria-hidden="true">→</span></a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <YardPlanner />

      <section className="difference-section" id="work">
        <div className="section-shell">
          <div className="difference-intro">
            <div className="section-kicker">The before / after feeling</div>
            <h2>Not just cut.<br /><em>Finished.</em></h2>
            <p>
              Lawn care is visual. This preview leaves the real project gallery open for Bean’s own photography — because their work should be the proof.
            </p>
          </div>

          <div className="before-after-card" aria-label="Conceptual before and after project photography placeholder">
            <div className="before-panel">
              <div className="panel-tag">BEFORE</div>
              <div className="wild-grass grass-a" />
              <div className="wild-grass grass-b" />
              <div className="wild-grass grass-c" />
              <div className="wild-grass grass-d" />
              <span className="photo-note">Replace with a real Bean’s project photo</span>
            </div>
            <div className="after-panel">
              <div className="panel-tag">AFTER</div>
              <div className="after-stripe stripe-a" />
              <div className="after-stripe stripe-b" />
              <div className="after-stripe stripe-c" />
              <span className="photo-note">Same angle. Clean finish. Real work.</span>
            </div>
            <div className="split-handle" aria-hidden="true"><span>↔</span></div>
          </div>

          <div className="gallery-rail">
            {[
              ["01", "Fresh-cut lawn"],
              ["02", "Yard clean-up"],
              ["03", "Mulch + beds"],
              ["04", "Shrub shaping"]
            ].map(([num, label]) => (
              <div className="gallery-slot" key={num}>
                <span>{num}</span>
                <div className="slot-art"><i /><i /><i /></div>
                <strong>{label}</strong>
                <small>REAL PROJECT PHOTO SLOT</small>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="reputation-section">
        <div className="section-shell reputation-layout">
          <div className="rating-lockup">
            <span className="stars" aria-label="5 out of 5 stars">★★★★★</span>
            <strong>5.0</strong>
            <span>local rating</span>
          </div>
          <div className="reputation-copy">
            <div className="section-kicker light">What people notice</div>
            <h2>A yard can tell when somebody cared.</h2>
            <p>
              The strongest public signals around Bean’s point toward the same thing: neighbors care about the details after the mower stops — the cleanup, the edges, and the finished look.
            </p>
            <div className="theme-list">
              {reviewThemes.map((theme) => <span key={theme}>{theme}</span>)}
            </div>
          </div>
        </div>
      </section>

      <section className="about-section" id="about">
        <div className="section-shell about-layout">
          <div className="about-visual">
            <div className="about-photo-slot">
              <span>OWNER / TEAM PHOTO</span>
              <strong>Put the people behind the work right here.</strong>
            </div>
            <div className="community-chip">PROUDLY SERVING<br /><strong>LEAGUE CITY</strong></div>
          </div>
          <div className="about-copy">
            <div className="section-kicker">Local by design</div>
            <h2>Built for the neighborhood.</h2>
            <p className="about-lede">
              Bean’s describes itself publicly as a family-owned lawn care and landscaping business serving League City, with a simple mission: reliable, professional service that helps neighbors keep their yards looking their best.
            </p>
            <p>
              That is the kind of story a website should make easier to see — not bury under a giant list of services.
            </p>
            <a className="text-link" href="#estimate">Tell Bean’s what your yard needs <span>↘</span></a>
          </div>
        </div>
      </section>

      <section className="process-section">
        <div className="section-shell">
          <div className="section-kicker">Easy on purpose</div>
          <div className="process-heading">
            <h2>From “I need this fixed”<br />to “that looks good.”</h2>
            <p>For the preview, the website keeps the first step simple: tell Bean’s what the yard needs, then continue by text or call.</p>
          </div>
          <ol className="process-list">
            <li><span>01</span><strong>Pick what the yard needs</strong><small>Mowing, cleanup, beds, shrubs — or “not sure.”</small></li>
            <li><span>02</span><strong>Add a few details</strong><small>Property type, ZIP and what is bothering you.</small></li>
            <li><span>03</span><strong>Open the text</strong><small>Your answers are pre-filled for you.</small></li>
            <li><span>04</span><strong>Attach photos</strong><small>Show the yard instead of trying to describe every detail.</small></li>
          </ol>
        </div>
      </section>

      <section className="faq-section">
        <div className="section-shell faq-layout">
          <div className="faq-title">
            <div className="section-kicker">Quick answers</div>
            <h2>Before you text.</h2>
          </div>
          <div className="faq-list">
            <details>
              <summary>What services does Bean’s publicly advertise?</summary>
              <p>Lawn mowing, trimming and edging; yard clean-ups and weed control; mulch installs and flower-bed refreshes; and shrub trimming.</p>
            </details>
            <details>
              <summary>Do they offer free estimates?</summary>
              <p>Yes. Bean’s publicly invites neighbors to call or text for a free estimate.</p>
            </details>
            <details>
              <summary>Can I text Bean’s?</summary>
              <p>Yes. Their public business information lists {site.displayPhone} for calls and texts.</p>
            </details>
            <details>
              <summary>What areas do they serve?</summary>
              <p>Bean’s publicly identifies League City as its home service area. Contact the business to confirm availability for your specific property.</p>
            </details>
            <details>
              <summary>What are their hours?</summary>
              <p>Current hours should be confirmed directly with Bean’s before this preview becomes an official website.</p>
            </details>
          </div>
        </div>
      </section>

      <section className="final-cta">
        <div className="final-leaf leaf-one" aria-hidden="true" />
        <div className="final-leaf leaf-two" aria-hidden="true" />
        <div className="final-cta-copy">
          <span>THE YARD IS WAITING.</span>
          <h2>Ready to get it<br />taken care of?</h2>
          <p>Tell Bean’s what needs attention and start with a free estimate.</p>
          <div className="final-actions">
            <a className="button cream-button" href="#estimate">Request an estimate <span>↘</span></a>
            <a className="button outline-light" href={smsHref}>Text Bean’s</a>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="footer-brand">
          <strong>BEAN’S</strong>
          <span>LAWN CARE SERVICES</span>
        </div>
        <div className="footer-block">
          <small>BASED IN</small>
          <strong>League City, TX</strong>
        </div>
        <div className="footer-block">
          <small>CALL / TEXT</small>
          <a href={phoneHref}>{site.displayPhone}</a>
        </div>
        <div className="footer-block">
          <small>EMAIL</small>
          <a href={`mailto:${site.email}`}>{site.email}</a>
        </div>
        <p className="footer-preview">Concept preview · business details to be confirmed before launch.</p>
      </footer>

      <div className="mobile-action-bar" aria-label="Quick contact">
        <a href={phoneHref}>Call</a>
        <a href="#estimate">Free estimate</a>
      </div>
    </main>
  );
}
