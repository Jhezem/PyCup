import Image from "next/image";
import styles from "./Cta.module.css";
import { ITwoColumn } from "./ICta";

export const TwoColumn = ({
  subtitle,
  title,
  description,
  buttonText,
  img,
  imgStyles,
}: ITwoColumn) => {
  return (
    <section className={styles.two_column}>
      <div className={styles.grid}>
        <div className={styles.image}>
          <Image
            src={img.src}
            width={img.width}
            height={img.height}
            alt={img.alt}
            style={imgStyles}
          />
        </div>
        <div className={styles.cta}>
          <div className={styles.title}>
            <span>{subtitle}</span>
            <h2>{title}</h2>
          </div>
          <div className={styles.content}>
            <p>{description}</p>
          </div>
          <div className={styles.action}>
            <a>{buttonText}</a>
          </div>
        </div>
      </div>
    </section>
  );
};
