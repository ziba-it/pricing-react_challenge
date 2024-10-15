import ItemSummary from "../ItemSummary/ItemSummary";
import TotalSummary from "../TotalSummary/TotalSummary";
import { useCart } from "../../../../context/CartContext";

import styles from "./CartSummary.module.scss";

export default function CartSummary() {
  const {
    cart: { items, total },
  } = useCart();

  return (
    <div className={styles.summary}>
      {items.map(({ id, title, price, subtotal }) => (
        <ItemSummary
          key={`item-summary-${id}-${title}-${price}`}
          name={title}
          subtotal={subtotal}
        />
      ))}
      <TotalSummary total={total} />
    </div>
  );
}
