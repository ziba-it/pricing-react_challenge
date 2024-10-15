import ItemSummary from "../ItemSummary/ItemSummary";
import TotalSummary from "../TotalSummary/TotalSummary";
import { useCart } from "../../../context/CartContext";

import styles from "./CartSummary.module.scss";

export default function CartSummary() {
  const { cart } = useCart();

  const { items } = cart;

  return (
    <div className={styles.summary}>
      {items.map((item) => (
        <ItemSummary
          key={`item-summary-${item.id}-${item.title}-${item.price}`}
          name={item.title}
          subtotal={item.subtotal}
        />
      ))}
      <TotalSummary total={cart.total} />
    </div>
  );
}
