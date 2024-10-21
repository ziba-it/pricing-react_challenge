import { AddIcon, SubstractIcon, BinIcon } from "../../../icons/index";
import { useCartStore } from "../../../../store/cartStore";

import styles from "./CartItem.module.scss";

export default function CartItem({ icon, name, price, quantity, id }) {
  const IconComponent = icon;
  const removeItemFromCart = useCartStore((state) => state.removeItemFromCart);
  const decrementItemFromCart = useCartStore(
    (state) => state.decrementItemFromCart
  );
  const addItemToCart = useCartStore((state) => state.addItemToCart);

  const handleRemoveItem = () => {
    removeItemFromCart(id);
  };

  const handleDecrementItem = () => {
    if (quantity === 1) {
      removeItemFromCart(id);
    } else {
      decrementItemFromCart(id);
    }
  };

  const handleAddItem = () => {
    addItemToCart({ id, price, title: name, icon });
  };

  return (
    <div className={styles["cart-item"]}>
      <IconComponent className={styles.icon} />
      <div className={styles["pack-container"]}>
        <h3 className={styles["item-name"]}>{name}</h3>
        <div className={styles["quantity-container"]}>
          <button className={styles.button} onClick={handleDecrementItem}>
            <SubstractIcon className={styles["edit-button"]} />
          </button>
          <p>{quantity}</p>
          <button className={styles.button} onClick={handleAddItem}>
            <AddIcon className={styles["edit-button"]} />
          </button>
        </div>
      </div>
      <div className={styles["price-container"]}>
        <p>${price}</p>
        <button className={styles.button} onClick={handleRemoveItem}>
          <BinIcon className={styles["remove-button"]} />
        </button>
      </div>
    </div>
  );
}
