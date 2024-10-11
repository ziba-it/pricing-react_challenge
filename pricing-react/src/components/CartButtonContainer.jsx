export default function CartButtonContainer() {
  return (
    <div class="flex justify-center lg:justify-end items-center w-full py-2.5 2xl:py-8 px-10">
      <button
        id="cart-button"
        class="relative hover:brightness-125 transition-all duration-300"
      >
        <img src="/icons/Pricing Button.svg" />
        <div
          id="cart-items-container"
          class="absolute -bottom-1 -right-1 bg-primary rounded-full items-center justify-center text-center w-4 h-4 hidden"
        >
          <p
            id="cart-items-number"
            class="text-orange text-xs font-manrope font-bold"
          ></p>
        </div>
      </button>
    </div>
  );
}
