import { Button } from "../../UI";
import CartItem from "./CartItem/CartItem";
import CartSummary from "./CartSummary/CartSummary";
import { useCart } from "../../../context/CartContext";

import styles from "./FilledCart.module.scss";

export default function FilledCart() {
  const {
    cart: { items },
  } = useCart();
  console.log(items);
  return (
    <div className={styles.container}>
      {items.map(({ id, title, price, icon, quantity }) => (
        <CartItem
          key={`cart-item-${id}-${title}-${price}`}
          name={title}
          price={price}
          icon={icon}
          quantity={quantity}
        />
      ))}
      <CartSummary />
      <Button className={styles["custom-button"]} color="primary">
        Buy
      </Button>
    </div>
  );
}
