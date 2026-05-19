import Image from "next/image";
import CTASection from "@/components/CTASection";
import Reveal from "@/components/Reveal";
import styles from "./about.module.css";

export const metadata = {
  title: "About — Banmark Bricks",
  description:
    "Learn about Banmark Bricks — a trusted Harare-based bricks manufacturer and supplier of building materials.",
};

export default function AboutPage() {
  return (
    <>
      <section className={styles.header}>
        <div className={`container anim-hero-text`}>
          <span className={styles.eyebrow}>About Us</span>
          <h1>Building Strong Foundations Across Harare</h1>
          <p>
            Banmark Bricks is a local manufacturer and supplier of quality
            bricks, sand, stones and construction materials — proudly serving
            builders, contractors and homeowners across Zimbabwe.
          </p>
        </div>
      </section>

      <section className="section">
        <div className={`container ${styles.split}`}>
          <Reveal variant="left" className={styles.imageWrap}>
            <Image
              src="/images/Plum-rustic.png"
              alt="Banmark plum rustic bricks"
              fill
              sizes="(max-width: 900px) 100vw, 50vw"
              style={{ objectFit: "cover" }}
            />
          </Reveal>
          <Reveal variant="right" delay={120}>
            <h2>Who We Are</h2>
            <p>
              Banmark Bricks is a Harare-based manufacturing and supply company
              built on a simple belief: every project deserves materials that
              last. From the bricks in your boundary wall to the sand in your
              plaster, we put quality first.
            </p>
            <p>
              Based at Plot 20 Raynham, we serve a growing community of
              builders, developers and home-owners with friendly service and
              honest pricing.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section section-beige">
        <div className={`container ${styles.split} ${styles.reverse}`}>
          <Reveal variant="right" className={styles.imageWrap}>
            <Image
              src="/images/Pit-sand.png"
              alt="Pit sand supply"
              fill
              sizes="(max-width: 900px) 100vw, 50vw"
              style={{ objectFit: "cover" }}
            />
          </Reveal>
          <Reveal variant="left" delay={120}>
            <h2>What We Supply</h2>
            <p>
              We manufacture and supply a wide range of construction materials
              suited for residential, commercial and industrial projects:
            </p>
            <ul className={styles.list}>
              <li>Plum rustic, Botswana face and red face bricks</li>
              <li>Loadbearing and smooth common bricks</li>
              <li>Pit sand for building and plastering</li>
              <li>3/4 stones for concrete and foundations</li>
            </ul>
            <p>
              Need something specific? Call us and we’ll help you find the
              right material for the job.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal variant="up">
            <h2 className="section-title">Why Choose Us</h2>
            <p className="section-sub">
              Quality, reliability and service — the values we build on every
              single day.
            </p>
          </Reveal>
          <div className="grid grid-3">
            {[
              {
                title: "Built to Last",
                text: "Our bricks and aggregates are made to the highest local standards so your construction stands the test of time.",
              },
              {
                title: "Honest Pricing",
                text: "Clear, competitive prices with no hidden charges — making quality materials accessible to everyone.",
              },
              {
                title: "Construction Support",
                text: "From small home renovations to large developments, our team is ready to help with advice and dependable supply.",
              },
            ].map((c, i) => (
              <Reveal
                key={c.title}
                variant="up"
                delay={i * 130}
                className={styles.card}
              >
                <h3>{c.title}</h3>
                <p>{c.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Reveal variant="zoom">
        <CTASection
          title="Let’s Build Something Strong Together"
          subtitle="Get in touch today for a quote or to confirm stock availability."
        />
      </Reveal>
    </>
  );
}
