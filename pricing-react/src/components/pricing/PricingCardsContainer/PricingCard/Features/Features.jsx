import styles from "./Features.module.scss";

export default function Features({ isFeatured, features }) {
  return (
    <div className={styles.container}>
      <p className={`${isFeatured && styles.featured} ${styles.text}`}>
        {features[0]}
      </p>
      <hr className={styles.line} />
      <p className={`${isFeatured && styles.featured} ${styles.text}`}>
        {features[1]}
      </p>
    </div>
  );
}
