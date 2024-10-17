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
    const existingItemIndex = cart.items.findIndex(
      (item) => item.id === selectedPack.id
    );

    let updatedItems;

    if (existingItemIndex > -1) {
      const updatedItem = {
        ...cart.items[existingItemIndex],
        quantity: cart.items[existingItemIndex].quantity + 1,
        subtotal:
          selectedPack.price * (cart.items[existingItemIndex].quantity + 1),
      };
      updatedItems = [...cart.items];
      updatedItems[existingItemIndex] = updatedItem;
    } else {
      const itemToAdd = {
        ...selectedPack,
        quantity: 1,
        subtotal: selectedPack.price,
      };
      updatedItems = [...cart.items, itemToAdd];
    }

    const updatedTotal = updatedItems.reduce(
      (acc, item) => acc + item.subtotal,
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
