import Link from "next/link";
import styles from "./CTASection.module.css";

export default function CTASection({
  title = "Ready to Build with Quality?",
  subtitle = "Talk to us today for fast quotes, reliable supply and trusted building materials across Harare.",
  primary = { label: "Call Now", href: "tel:0778933858" },
  secondary = { label: "Contact Us", href: "/contact" },
}) {
  return (
    <section className={`section ${styles.cta}`}>
      <div className="container">
        <div className={styles.box}>
          <h2>{title}</h2>
          <p>{subtitle}</p>
          <div className={styles.actions}>
            <a href={primary.href} className="btn btn-light">
              {primary.label}
            </a>
            <Link href={secondary.href} className="btn btn-secondary">
              {secondary.label}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
