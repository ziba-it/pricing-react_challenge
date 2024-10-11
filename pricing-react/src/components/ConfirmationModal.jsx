export default function ConfirmationModal() {
  return (
    <div class="flex flex-col items-center bg-white gap-5 p-10 rounded-2xl max-w-md relative">
      <button class="absolute right-1 top-1" id="close-modal-button">
        <img src="/assets/icons/ExitButton.svg" class="w-auto h-auto" />
      </button>
      <div class="flex flex-col items-center gap-2.5">
        <h2 class="font-inter text-lg font-bold text-xl tracking-wide text-modal-dark-grey">
          Add to cart?
        </h2>
        <p
          id="confirmation-text"
          class="font-inter text-base font-medium text-modal-light-grey text-center leading-5"
        ></p>
      </div>

      <div class="flex gap-4 font-manrope">
        <button
          id="cancel-confirmation-button"
          class="text-orange border font-medium border-orange tracking-wider rounded-full py-2.5 px-4 hover:bg-light-orange transition-all duration-300"
        >
          Cancel
        </button>
        <button
          id="confirmation-button"
          class="bg-orange rounded-full font-medium border tracking-wider border-orange text-primary py-2.5 px-4 hover:brightness-125 transition-all duration-300"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
