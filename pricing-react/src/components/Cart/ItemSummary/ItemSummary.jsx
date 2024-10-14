import styles from "./ItemSummary.module.scss";

export default function ItemSummary({ name, subtotal }) {
  return (
    <div className={styles.container}>
      <p className={styles["item-name"]}>{name}</p>
      <p>${subtotal}</p>
    </div>
  );
}
