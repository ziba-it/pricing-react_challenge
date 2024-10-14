import styles from "./Header.module.scss";

export default function Header({ title, icon, price, isFeatured }) {
  return (
    <div className={`${isFeatured && styles.featured} ${styles.container}`}>
      <h3 className={styles.title}>{title}</h3>
      <img src={icon} alt="logo" className={styles.icon} />
      <h2 className={styles.price}>${price}</h2>
    </div>
  );
}
