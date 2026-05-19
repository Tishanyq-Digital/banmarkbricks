import Reveal from "@/components/Reveal";
import styles from "./contact.module.css";

export const metadata = {
  title: "Contact Banmark Bricks — Call 0778 933 858 · Plot 20 Raynham, Harare",
  description:
    "Contact Banmark Bricks in Harare for quotes on bricks, sand, gravel and stones. Call 0778 933 858 or 0718 201 581. Visit us at Plot 20 Raynham, Harare.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Banmark Bricks — Harare, Zimbabwe",
    description:
      "Call 0778 933 858 or 0718 201 581. Visit Plot 20 Raynham, Harare for bricks, sand, gravel and stones.",
    url: "/contact",
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <>
      <section className={styles.header}>
        <div className={`container anim-hero-text`}>
          <span className={styles.eyebrow}>Contact Us</span>
          <h1>Let’s Talk About Your Project</h1>
          <p>
            Reach out for quotes, stock checks or product advice. Our team is
            ready to help you build with confidence.
          </p>
        </div>
      </section>

      <section className="section">
        <div className={`container ${styles.infoGrid}`}>
          {[
            {
              title: "Address",
              body: <p>Plot 20 Raynham, Harare</p>,
            },
            {
              title: "Phone",
              body: (
                <>
                  <p>
                    <a href="tel:0778933858">0778 933 858</a>
                  </p>
                  <p>
                    <a href="tel:0718201581">0718 201 581</a>
                  </p>
                </>
              ),
            },
            {
              title: "Business Hours",
              body: (
                <>
                  <p>Monday – Saturday</p>
                  <p>7:30am – 5:00pm</p>
                </>
              ),
            },
          ].map((c, i) => (
            <Reveal
              key={c.title}
              variant="up"
              delay={i * 130}
              className={styles.infoCard}
            >
              <h3>{c.title}</h3>
              {c.body}
            </Reveal>
          ))}
        </div>

        <Reveal variant="fade" delay={200} className={`container ${styles.callRow}`}>
          <a href="tel:0778933858" className="btn btn-primary">
            Call Now
          </a>
        </Reveal>
      </section>

      {/* Location */}
      <section className="section section-beige">
        <div className="container">
          <Reveal variant="up">
            <h2 className="section-title">Find Us</h2>
            <p className="section-sub">
              Drop by our yard at Plot 20 Raynham, Harare — we’d love to show
              you what we offer.
            </p>
          </Reveal>
          <Reveal variant="zoom" delay={120} className={styles.mapEmbed}>
            <iframe
              title="Banmark Bricks location — Plot 20 Raynham, Harare"
              src="https://www.google.com/maps?q=Plot+20+Raynham+Harare+Zimbabwe&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </Reveal>
        </div>
      </section>
    </>
  );
}
