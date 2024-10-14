import styles from "./PricingToggle.module.scss";

export default function PricingToggle() {
  return (
    <div className={styles.container}>
      <button className={`${styles.button} ${styles["left-button"]}`}>
        Month View
      </button>
      <button className={`${styles.button} ${styles["right-button"]}`}>
        Week View
      </button>
    </div>
  );
}
