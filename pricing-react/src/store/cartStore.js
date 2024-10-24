import { create } from "zustand";

export const useCartStore = create((set) => ({
  isModalOpen: false,
  selectedPack: null,
  cart: {
    total: 0,
    items: [],
  },

  openModal: (pack) =>
    set({
      isModalOpen: true,
      selectedPack: pack,
    }),

  closeModal: () =>
    set({
      isModalOpen: false,
      selectedPack: null,
    }),

  addItemToCart: (selectedPack) =>
    set((state) => {
      const existingItemIndex = state.cart.items.findIndex(
        (item) => item.id === selectedPack.id
      );

      let updatedItems;

      if (existingItemIndex > -1) {
        const updatedItem = {
          ...state.cart.items[existingItemIndex],
          quantity: state.cart.items[existingItemIndex].quantity + 1,
          subtotal:
            state.cart.items[existingItemIndex].price *
            (state.cart.items[existingItemIndex].quantity + 1),
        };
        updatedItems = [...state.cart.items];
        updatedItems[existingItemIndex] = updatedItem;
      } else {
        const itemToAdd = {
          ...selectedPack,
          quantity: 1,
          subtotal: selectedPack.price,
        };
        updatedItems = [...state.cart.items, itemToAdd];
      }

      const updatedTotal = updatedItems.reduce(
        (acc, item) => acc + item.subtotal,
        0
      );

      return {
        cart: { total: updatedTotal, items: updatedItems },
      };
    }),

  removeItemFromCart: (id) =>
    set((state) => {
      const updatedItems = state.cart.items.filter((item) => item.id !== id);
      const updatedTotal = updatedItems.reduce(
        (acc, item) => acc + item.subtotal,
        0
      );
      return {
        cart: { total: updatedTotal, items: updatedItems },
      };
    }),
  decrementItemFromCart: (id) =>
    set((state) => {
      const existingItemIndex = state.cart.items.findIndex(
        (item) => item.id === id
      );
      const item = state.cart.items[existingItemIndex];
      const updatedItem = {
        ...item,
        quantity: item.quantity - 1,
        subtotal: item.price * (item.quantity - 1),
      };
      const updatedItems = [...state.cart.items];
      updatedItems[existingItemIndex] = updatedItem;

      const updatedTotal = updatedItems.reduce(
        (acc, item) => acc + item.subtotal,
        0
      );
      return {
        cart: { total: updatedTotal, items: updatedItems },
      };
    }),
}));
