"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const close = () => setOpen(false);

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link href="/" className={styles.brand} onClick={close}>
          <Image
            src="/images/logo.png"
            alt="Banmark Bricks logo"
            width={120}
            height={120}
            className={styles.logo}
          />
        </Link>

        <button
          className={styles.toggle}
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`${styles.nav} ${open ? styles.navOpen : ""}`}>
          <Link href="/" onClick={close}>Home</Link>
          <Link href="/about" onClick={close}>About</Link>
          <Link href="/products" onClick={close}>Products</Link>
          <Link href="/contact" onClick={close}>Contact Us</Link>
          <a href="tel:0778933858" className={`btn btn-primary ${styles.cta}`} onClick={close}>
            Call Now
          </a>
        </nav>
      </div>
    </header>
  );
}
