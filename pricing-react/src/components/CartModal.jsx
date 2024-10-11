export default function CartModal() {
  return (
    <div
      id="cart-modal"
      class="bg-primary-transparent flex flex-col gap-3.5 absolute rounded-xl font-manrope p-6 top-14 right-10 pointer-events-none opacity-0 scale-0 transition-all duration-300"
    >
      <div
        id="cart-summary"
        class="bg-primary rounded-xl w-full flex flex-col gap-4 pl-4 py-4 pr-10 order-12"
      >
        <div class="flex justify-between font-semibold order-last">
          <p class="text-black text-sm">Total</p>
          <p id="total-cart-display" class="text-black text-base"></p>
        </div>
      </div>
      <button class="bg-orange text-primary w-full rounded-full text-base font-normal py-3 hover:brightness-125 transition-all duration-300 order-last">
        Buy
      </button>
    </div>
  );
}
