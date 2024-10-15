import styles from "./CartItem.module.scss";

export default function CartItem({ icon, name, price, quantity }) {
  return (
    <div className={styles["cart-item"]}>
      <img src={icon} alt="" className={styles.icon} />
      <div className={styles["pack-container"]}>
        <h3 className={styles["item-name"]}>{name}</h3>
        <div className={styles["quantity-container"]}>
          <img
            src="/icons/SubstractIcon.svg"
            alt=""
            className={styles["edit-button"]}
          />
          <p>{quantity}</p>
          <img
            src="/icons/AddIcon.svg"
            alt=""
            className={styles["edit-button"]}
          />
        </div>
      </div>
      <div className={styles["price-container"]}>
        <p>${price}</p>
        <img
          src="icons/BinIcon.svg"
          alt=""
          className={styles["remove-button"]}
        />
      </div>
    </div>
  );
}
