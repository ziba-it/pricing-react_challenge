import { AddIcon, SubstractIcon, BinIcon } from "../../../Icons/index";

import styles from "./CartItem.module.scss";

export default function CartItem({ icon, name, price, quantity }) {
  const IconComponent = icon;

  return (
    <div className={styles["cart-item"]}>
      <IconComponent className={styles.icon} />
      <div className={styles["pack-container"]}>
        <h3 className={styles["item-name"]}>{name}</h3>
        <div className={styles["quantity-container"]}>
          <SubstractIcon className={styles["edit-button"]} />
          <p>{quantity}</p>
          <AddIcon className={styles["edit-button"]} />
        </div>
      </div>
      <div className={styles["price-container"]}>
        <p>${price}</p>
        <BinIcon className={styles["remove-button"]} />
      </div>
    </div>
  );
}
