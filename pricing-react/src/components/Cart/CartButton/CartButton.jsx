import { PricingIcon } from "../../Icons/PricingIcon/PricingIcon";
import EmptyCart from "../EmptyCart/EmptyCart";
import FilledCart from "../FilledCart/FilledCart";
import { useCart } from "../../../context/CartContext";
import { useState } from "react";

import styles from "./CartButton.module.scss";

export default function CartButton() {
  const [isClicked, setIsClicked] = useState(false);
  const { cart } = useCart();
  const { items } = cart;

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div className={styles["main-container"]}>
      <button className={styles.button} onClick={handleClick}>
        <PricingIcon />
        {items.length > 0 && (
          <div className={styles["number-container"]}>
            <p className={styles.number}>{items.length}</p>
          </div>
        )}
      </button>
      {cart.total < 1 && isClicked && <EmptyCart />}
      {cart.total > 1 && isClicked && <FilledCart />}
    </div>
  );
}
