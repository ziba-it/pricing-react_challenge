import { Pricing } from "../../Icons/Pricing";
import EmptyCart from "../EmptyCart/EmptyCart";
import FilledCart from "../FilledCart/FilledCart";
import { useCart } from "../../../context/CartContext";
import { useState } from "react";

import styles from "./CartButton.module.scss";

export default function CartButton({ amount }) {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div className={styles["main-container"]}>
      <button className={styles.button} onClick={handleClick}>
        <Pricing />
        <div className={styles["number-container"]}>
          <p className={styles.number}>{amount}</p>
        </div>
      </button>
      {isClicked && <EmptyCart />}
      <FilledCart />
    </div>
  );
}
