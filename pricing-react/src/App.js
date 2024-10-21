import "./App.scss";
import CartButton from "./components/cart/CartButton/CartButton";
import PricingSection from "./components/pricing/PricingSection";
import ConfirmationModal from "./components/modals/ConfirmationModal/ConfirmationModal";

function App() {
  return (
    <main>
      <CartButton />
      <PricingSection />
      <ConfirmationModal />
    </main>
  );
}

export default App;
