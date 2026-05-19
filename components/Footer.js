import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.col}>
          <h3 className={styles.brand}>
            Banmark <span>Bricks</span>
          </h3>
          <p className={styles.tag}>
            Quality bricks and building materials you can trust — built for
            strong, lasting construction.
          </p>
        </div>

        <div className={styles.col}>
          <h4>Quick Links</h4>
          <ul className={styles.links}>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/products">Products</Link></li>
            <li><Link href="/contact">Contact Us</Link></li>
          </ul>
        </div>

        <div className={styles.col}>
          <h4>Contact</h4>
          <ul className={styles.links}>
            <li>Plot 20 Raynham, Harare</li>
            <li><a href="tel:0778933858">0778 933 858</a></li>
            <li><a href="tel:0718201581">0718 201 581</a></li>
          </ul>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>© {new Date().getFullYear()} Banmark Bricks. All rights reserved.</p>
        <p className={styles.credit}>
          Designed and created by{" "}
          <a
            href="https://tishanyq.co.zw"
            target="_blank"
            rel="noopener noreferrer"
          >
            Tishanyq Digital
          </a>
        </p>
      </div>
    </footer>
  );
}
