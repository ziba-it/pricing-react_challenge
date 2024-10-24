import { Button } from "../../../ui";
import Header from "./Header/Header";
import Features from "./Features/Features";
import { FeaturedIcon } from "../../../icons";
import { useCartStore } from "../../../../store/cartStore";

import styles from "./PricingCard.module.scss";

export default function PricingCard({
  title,
  features,
  price,
  icon,
  isFeatured,
  color,
  id,
}) {
  const pack = { title, features, price, icon, isFeatured, color, id };
  const openModal = useCartStore((state) => state.openModal);
  const handleClick = () => {
    openModal(pack);
  };

  return (
    <div className={`${isFeatured && styles.featured} ${styles.cardContainer}`}>
      {isFeatured && <FeaturedIcon className={styles["featured-tag"]} />}
      <Header icon={icon} title={title} price={price} isFeatured={isFeatured} />
      <Features features={features} isFeatured={isFeatured} />
      <Button isFeatured={isFeatured} color={color} onClick={handleClick}>
        Add to Cart
      </Button>
    </div>
  );
}
