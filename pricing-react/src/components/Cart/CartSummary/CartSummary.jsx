import ItemSummary from "../ItemSummary/ItemSummary";
import TotalSummary from "../TotalSummary/TotalSummary";
import { useCart } from "../../../context/CartContext";

import styles from "./CartSummary.module.scss";

export default function CartSummary({ total }) {
  const { cart } = useCart();

  const { items } = cart;

  return (
    <div className={styles.summary}>
      {items.map((item) => (
        <ItemSummary name={item.title} subtotal={item.price * item.quantity} />
      ))}
      <TotalSummary total={cart.total} />
    </div>
  );
}
