import styles from "./TotalSummary.module.scss";

export default function TotalSummary({ total }) {
  return (
    <div className={styles["total-container"]}>
      <p class="text-black text-sm">Total</p>
      <p id="total-cart-display" class="text-black text-base">
        ${total}
      </p>
    </div>
  );
}
