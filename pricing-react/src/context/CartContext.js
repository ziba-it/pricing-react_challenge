import { createContext, useState, useContext } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPack, setSelectedPack] = useState(null);
  const [cart, setCart] = useState({ total: 0, items: [] });

  const openModal = (pack) => {
    setSelectedPack(pack);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPack(null);
  };

  const addItemToCart = (selectedPack) => {
    const itemToAdd = {
      ...selectedPack,
      quantity: (selectedPack.quantity || 0) + 1,
    };

    const updatedItems = [...cart.items, itemToAdd];

    const updatedTotal = updatedItems.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    setCart({ total: updatedTotal, items: updatedItems });
  };

  return (
    <CartContext.Provider
      value={{
        isModalOpen,
        selectedPack,
        openModal,
        closeModal,
        addItemToCart,
        cart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
