import styles from "./EmptyCart.module.scss";

export default function EmptyCart() {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Empty cart</h3>
      <p className={styles.description}>
        You have not added any items to your cart yet.
      </p>
    </div>
  );
}
