import { Button } from "../../ui";
import CartItem from "./CartItem/CartItem";
import CartSummary from "./CartSummary/CartSummary";
import { useCartStore } from "../../../store/cartStore";

import styles from "./FilledCart.module.scss";

export default function FilledCart() {
  const { items } = useCartStore((state) => state.cart);
  return (
    <div className={styles.container}>
      {items.map(({ id, title, price, icon, quantity }) => (
        <CartItem
          key={`cart-item-${id}-${title}-${price}`}
          id={id}
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
