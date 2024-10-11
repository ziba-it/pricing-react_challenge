import "./App.scss";
import CartButtonContainer from "./components/CartButtonContainer";
import CartModal from "./components/CartModal";
import EmptyCartModal from "./components/EmptyCartModal";
import PricingSection from "./components/PricingSection";
import ConfirmationModal from "./components/ConfirmationModal";

function App() {
  return (
    <main>
      <CartButtonContainer />
      <CartModal />
      <EmptyCartModal />
      <PricingSection />
      <ConfirmationModal />
    </main>
  );
}

export default App;
