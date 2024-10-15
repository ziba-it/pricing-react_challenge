import styles from "./TotalSummary.module.scss";

export default function TotalSummary({ total }) {
  return (
    <div className={styles["total-container"]}>
      <p className={styles.total}>Total</p>
      <p>${total}</p>
    </div>
  );
}
