export default function EmptyCartModal() {
  return (
    <div
      id="empty-cart-modal"
      class="flex bg-primary flex-col items-center gap-1 text-center absolute rounded-xl w-64 font-manrope p-4 top-14 right-10 text-modal-dark-grey scale-0 opacity-0 pointer-events-none transition-all duration-300"
    >
      <h3 class="font-bold">Empty cart</h3>
      <p class="font-medium leading-tight">
        You have not added any items to your cart yet.
      </p>
    </div>
  );
}
