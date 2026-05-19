import Image from "next/image";
import styles from "./ProductCard.module.css";

export default function ProductCard({ product }) {
  return (
    <article className={styles.card}>
      <div className={styles.imageWrap}>
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className={styles.image}
        />
      </div>
      <div className={styles.body}>
        <h3 className={styles.name}>{product.name}</h3>
        <p className={styles.desc}>{product.description}</p>
        <div className={styles.priceRow}>
          <span className={styles.price}>{product.price}</span>
          <span className={styles.unit}>{product.unit}</span>
        </div>
        <a href="tel:0778933858" className="btn btn-primary">
          Call to Order
        </a>
      </div>
    </article>
  );
}
