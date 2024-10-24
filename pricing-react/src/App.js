import "./App.scss";
import CartButton from "./components/cart/cartButton/CartButton";
import PricingSection from "./components/pricing/PricingSection";
import ConfirmationModal from "./components/modals/confirmationModal/ConfirmationModal";

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
