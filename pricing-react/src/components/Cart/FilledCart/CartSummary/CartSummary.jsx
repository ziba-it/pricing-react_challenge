import ItemSummary from "../ItemSummary/ItemSummary";
import TotalSummary from "../TotalSummary/TotalSummary";
import { useCartStore } from "../../../../store/cartStore";

import styles from "./CartSummary.module.scss";

export default function CartSummary() {
  const { items, total } = useCartStore((state) => state.cart);
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
