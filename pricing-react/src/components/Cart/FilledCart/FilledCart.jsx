import { Button } from "../../UI";
import CartItem from "../CartItem/CartItem";
import CartSummary from "../CartSummary/CartSummary";
import { useCart } from "../../../context/CartContext";

import styles from "./FilledCart.module.scss";

export default function FilledCart() {
  const { cart } = useCart();
  const { items } = cart;

  return (
    <div className={styles.container}>
      {items.map((item) => (
        <CartItem
          name={item.title}
          price={item.price}
          icon={item.icon}
          quantity={item.quantity}
        />
      ))}
      <CartSummary />
      <Button className={styles["custom-button"]} color="primary">
        Buy
      </Button>
    </div>
  );
}
