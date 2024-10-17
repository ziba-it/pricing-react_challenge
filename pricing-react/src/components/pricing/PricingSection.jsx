import PricingHeader from "./PricingHeader/PricingHeader";
import PricingToggle from "./PricingToggle/PricingToggle";
import PricingCardsContainer from "./PricingCardsContainer/PricingCardsContainer";

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
