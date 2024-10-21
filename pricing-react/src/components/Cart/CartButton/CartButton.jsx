import { PricingIcon } from "../../icons/PricingIcon/PricingIcon";
import EmptyCart from "../EmptyCart/EmptyCart";
import FilledCart from "../FilledCart/FilledCart";
import { useState } from "react";
import { useCartStore } from "../../../store/cartStore";

import styles from "./CartButton.module.scss";

export default function CartButton() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { items, total } = useCartStore((state) => state.cart);

  const handleClick = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <div className={styles["main-container"]}>
      <button className={styles.button} onClick={handleClick}>
        <PricingIcon className={styles["pricing-icon"]} />
        {items.length > 0 && (
          <div className={styles["number-container"]}>
            <p className={styles.number}>{items.length}</p>
          </div>
        )}
      </button>
      {isCartOpen && (total < 1 ? <EmptyCart /> : <FilledCart />)}
    </div>
  );
}
