import ProductCard from "@/components/ProductCard";
import CTASection from "@/components/CTASection";
import Reveal from "@/components/Reveal";
import products from "@/data/products";
import styles from "./products.module.css";

export const metadata = {
  title: "Products & Prices — Banmark Bricks",
  description:
    "Browse Banmark Bricks' full range of bricks, sand and stones with up-to-date prices.",
};

export default function ProductsPage() {
  return (
    <>
      <section className={styles.header}>
        <div className={`container anim-hero-text`}>
          <span className={styles.eyebrow}>Our Products</span>
          <h1>Bricks, Sand & Stones — All in One Place</h1>
          <p>
            Below is our full product range with current prices. Call us on{" "}
            <a href="tel:0778933858">0778 933 858</a> or{" "}
            <a href="tel:0718201581">0718 201 581</a> to confirm availability
            and place your order.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid grid-3">
            {products.map((p, i) => (
              <Reveal key={p.name} variant="up" delay={(i % 3) * 110}>
                <ProductCard product={p} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Reveal variant="zoom">
        <CTASection
          title="Need a Bulk Quote?"
          subtitle="Tell us what your project needs and we'll prepare a tailored quote with delivery options."
          primary={{ label: "Get a Quote", href: "/contact" }}
          secondary={{ label: "Call Now", href: "tel:0778933858" }}
        />
      </Reveal>
    </>
  );
}
