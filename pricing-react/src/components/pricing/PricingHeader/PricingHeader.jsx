import styles from "./PricingHeader.module.scss";

export default function PricingHeader() {
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Pick the best plan for you</h1>
      <p className={styles.description}>
        You have Free Unlimited Updates and Premium Support on each package.
      </p>
    </div>
  );
}
