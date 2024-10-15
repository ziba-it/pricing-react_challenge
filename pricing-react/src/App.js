import "./App.scss";
import { CartProvider } from "./context/CartContext";
import CartButton from "./components/Cart/CartButton/CartButton";
import PricingSection from "./components/PricingSection/PricingSection";
import ConfirmationModal from "./components/Modals/ConfirmationModal/ConfirmationModal";

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
