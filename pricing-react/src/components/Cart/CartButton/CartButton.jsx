import { PricingIcon } from "../../icons/pricingIcon/PricingIcon";
import EmptyCart from "../emptyCart/EmptyCart";
import FilledCart from "../filledCart/FilledCart";
import { useState, useEffect, useRef } from "react";
import { useCartStore } from "../../../store/cartStore";

import styles from "./CartButton.module.scss";

export default function CartButton() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { items, total } = useCartStore((state) => state.cart);
  const mainContainerRef = useRef(null);

  useEffect(() => {
    if (items.length > 0) {
      const mainContainer = mainContainerRef.current;
      mainContainer.classList.add(styles.expand);

      const timer = setTimeout(() => {
        mainContainer.classList.remove(styles.expand);
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [items.length]); //
  const handleClick = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <div ref={mainContainerRef} className={`${styles["main-container"]}`}>
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
