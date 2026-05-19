import Link from "next/link";
import Image from "next/image";
import ProductCard from "@/components/ProductCard";
import CTASection from "@/components/CTASection";
import Reveal from "@/components/Reveal";
import products from "@/data/products";
import styles from "./page.module.css";

export default function HomePage() {
  const featured = products.slice(0, 4);

  const reasons = [
    {
      title: "Quality Materials",
      text: "Durable bricks and aggregates manufactured to last and built to perform.",
      icon: "★",
    },
    {
      title: "Affordable Pricing",
      text: "Honest, competitive prices for builders, contractors and homeowners.",
      icon: "$",
    },
    {
      title: "Reliable Supply",
      text: "Consistent stock and dependable delivery so your project never stalls.",
      icon: "✓",
    },
    {
      title: "Located in Harare",
      text: "Conveniently based at Plot 20 Raynham — easy to reach, easy to order.",
      icon: "◉",
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={`container ${styles.heroInner}`}>
          <div className={`${styles.heroText} anim-hero-text`}>
            <span className={styles.eyebrow}>Banmark Bricks · Harare</span>
            <h1>
              Quality Bricks & Building Materials{" "}
              <span className={styles.accent}>You Can Trust</span>
            </h1>
            <p>
              Banmark Bricks supplies durable bricks, pit sand, stones and a
              full range of building materials in Harare — strong, affordable
              and ready when you are.
            </p>
            <div className={styles.heroActions}>
              <Link href="/products" className="btn btn-primary">
                View Products
              </Link>
              <a href="tel:0778933858" className="btn btn-secondary">
                Call Now
              </a>
            </div>
          </div>
          <div className={`${styles.heroImage} anim-hero-image`}>
            <Image
              src="/images/Red-face-bricks.png"
              alt="Stacks of quality red face bricks"
              fill
              priority
              sizes="(max-width: 900px) 100vw, 50vw"
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section section-beige">
        <div className="container">
          <Reveal variant="up">
            <h2 className="section-title">Why Choose Banmark Bricks</h2>
            <p className="section-sub">
              We combine quality manufacturing with reliable supply so your
              project gets the materials it deserves.
            </p>
          </Reveal>
          <div className="grid grid-4">
            {reasons.map((r, i) => (
              <Reveal
                key={r.title}
                variant="up"
                delay={i * 110}
                className={styles.reason}
              >
                <div className={styles.reasonIcon}>{r.icon}</div>
                <h3>{r.title}</h3>
                <p>{r.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="section">
        <div className="container">
          <Reveal variant="up">
            <h2 className="section-title">Featured Products</h2>
            <p className="section-sub">
              A look at some of our most-requested building materials. Browse
              the full range on our products page.
            </p>
          </Reveal>
          <div className="grid grid-4">
            {featured.map((p, i) => (
              <Reveal key={p.name} variant="up" delay={i * 100}>
                <ProductCard product={p} />
              </Reveal>
            ))}
          </div>
          <Reveal variant="fade" delay={120} className={styles.center}>
            <Link href="/products" className="btn btn-primary">
              View All Products
            </Link>
          </Reveal>
        </div>
      </section>

      <Reveal variant="zoom">
        <CTASection />
      </Reveal>
    </>
  );
}
