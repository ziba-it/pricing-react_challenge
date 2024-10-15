import PricingCard from "./PricingCard/PricingCard";
import styles from "./PricingCardsContainer.module.scss";

const pricingData = [
  {
    id: "bravo-pack-10",
    title: "Bravo Pack",
    price: 10,
    features: ["Complete documentation", "Working materials in Sketch"],
    icon: "icons/PriceIcon.svg",
    isFeatured: false,
    color: "yellow",
    quantity: 0,
  },
  {
    id: "premium-pack-67",
    title: "Premium Pack",
    price: 67,
    features: ["Working materials in EPS", "6 months access to the library"],
    icon: "icons/PriceIcon1.svg",
    isFeatured: true,
    color: "orange",
    quantity: 0,
  },
  {
    id: "alpha-pack-75",
    title: "Alpha Pack",
    price: 75,
    features: ["Working materials in PSD", "1 year access to the library"],
    icon: "icons/PriceIcon2.svg",
    isFeatured: false,
    color: "green",
    quantity: 0,
  },
  {
    id: "extra-pack-80",
    title: "Extra Pack",
    price: 80,
    features: ["Complete documentation", "2GB cloud storage"],
    icon: "icons/PriceIcon3.svg",
    isFeatured: false,
    color: "red",
    quantity: 0,
  },
];

export default function PricingCardsContainer() {
  return (
    <div className={styles.container}>
      {pricingData.map((item) => (
        <PricingCard
          key={item.id}
          id={item.id}
          title={item.title}
          price={item.price}
          features={item.features}
          icon={item.icon}
          isFeatured={item.isFeatured}
          color={item.color}
        />
      ))}
    </div>
  );
}
