import "./App.scss";
import { CartProvider } from "./context/CartContext";
import CartButton from "./components/cart/CartButton/CartButton";
import PricingSection from "./components/pricing/PricingSection";
import ConfirmationModal from "./components/modals/ConfirmationModal/ConfirmationModal";

function App() {
  return (
    <CartProvider>
      <main>
        <CartButton />
        <PricingSection />
        <ConfirmationModal />
      </main>
    </CartProvider>
  );
}

export default App;
