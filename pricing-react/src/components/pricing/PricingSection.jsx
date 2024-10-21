import PricingHeader from "./pricingHeader/PricingHeader";
import PricingToggle from "./pricingToggle/PricingToggle";
import PricingCardsContainer from "./pricingCardsContainer/PricingCardsContainer";

import styles from "./PricingSection.module.scss";

export default function PricingSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <PricingHeader />
        <PricingToggle />
      </div>
      <PricingCardsContainer />
    </section>
  );
}
