export default function PricingSection() {
  return (
    <section class="flex flex-col items-center gap-20 w-full">
      <div class="flex flex-col items-center gap-6">
        <div class="flex flex-col text-center gap-8">
          <h1 class="text-primary font-ubuntu font-medium text-4xl">
            Pick the best plan for you
          </h1>
          <p class="text-primary font-manrope font-normal text-xl tracking-wider max-w-xl leading-8">
            You have Free Unlimited Updates and Premium Support on each package.
          </p>
        </div>

        <div class="flex font-manrope">
          <button class="bg-primary font-bold text-dark-grey text-sm tracking-wider border border-primary rounded-l-full p-3">
            Month View
          </button>
          <button class="text-sm font-medium border tracking-wider text-primary border-primary rounded-r-full p-3 bg-dark">
            Week View
          </button>
        </div>
      </div>
      <div class="flex flex-col lg:flex-row gap-9 justify-center w-full lg:w-auto px-4">
        <div class="flex flex-col items-center border border-primary py-8 px-2.5 gap-10">
          <div class="flex flex-col items-center font-manrope">
            <h3 class="text-primary font-bold text-lg tracking-wider">
              Bravo Pack
            </h3>
            <img src="/assets/icons/PriceIcon.svg" class="w-auto h-auto" />
            <h2 class="font-normal text-xl text-primary tracking-wider">$10</h2>
          </div>
          <div class="flex flex-col items-center gap-2 font-manrope">
            <p class="font-normal text-primary tracking-wider text-base text-center">
              Complete documentation
            </p>
            <hr class="w-full border-t-[0.5] border-primary" />
            <p class="font-normal text-primary tracking-wider text-base text-center">
              Working materials in Sketch
            </p>
          </div>
          <button
            data-id="bravo-pack-10"
            data-name="Bravo Pack"
            data-price="10"
            data-icon="PriceIcon.svg"
            class="add-to-cart bg-primary text-yellow py-2.5 px-4 rounded-full hover:bg-light-yellow transition-all duration-300"
          >
            Add to Cart
          </button>
        </div>
        <div class="flex flex-col items-center border border-primary bg-primary py-8 px-2.5 gap-10 relative">
          <img src="/assets/icons/Featured.svg" class="absolute top-0 left-0" />
          <div class="flex flex-col items-center font-manrope">
            <h3 class="text-light-grey font-bold text-lg tracking-wider">
              Alpha Pack
            </h3>
            <img src="/assets/icons/PriceIcon1.svg" class="w-auto h-auto" />
            <h2 class="font-normal text-xl text-light-grey tracking-wider">
              $67
            </h2>
          </div>
          <div class="flex flex-col items-center gap-2 font-manrope">
            <p class="font-normal text-light-grey tracking-wider text-sm text-center">
              Working materials in EPS
            </p>
            <hr class="w-full border-t-[0.5] border-light-grey" />
            <p class="font-normal text-light-grey tracking-wider text-sm text-center">
              6 months access to the library
            </p>
          </div>
          <button
            data-id="alpha-pack-67"
            data-name="Alpha Pack"
            data-price="67"
            data-icon="PriceIcon1.svg"
            class="add-to-cart bg-orange text-primary py-2.5 px-4 rounded-full hover:brightness-125 transition-all duration-300"
          >
            Add to Cart
          </button>
        </div>
        <div class="flex flex-col items-center border border-primary py-8 px-2.5 gap-10">
          <div class="flex flex-col items-center font-manrope">
            <h3 class="text-primary font-bold text-lg tracking-wider">
              Alpha Pack
            </h3>
            <img src="/assets/icons/PriceIcon2.svg" class="w-auto h-auto" />
            <h2 class="font-normal text-xl text-primary tracking-wider">$75</h2>
          </div>
          <div class="flex flex-col items-center gap-2 font-manrope">
            <p class="font-normal text-primary tracking-wider text-base text-center">
              Working materials in PSD
            </p>
            <hr class="w-full border-t-[0.5] border-primary" />
            <p class="font-normal text-primary tracking-wider text-base text-center">
              1 year access to the library
            </p>
          </div>
          <button
            data-id="alpha-pack-75"
            data-name="Alpha Pack"
            data-price="75"
            data-icon="PriceIcon2.svg"
            class="add-to-cart bg-primary text-green py-2.5 px-4 rounded-full hover:bg-light-green transition-all duration-300"
          >
            Add to Cart
          </button>
        </div>
        <div class="flex flex-col items-center border border-primary py-8 px-2.5 gap-10">
          <div class="flex flex-col items-center font-manrope">
            <h3 class="text-primary font-bold text-lg tracking-wider">
              Extra Pack
            </h3>
            <img src="/assets/icons/PriceIcon3.svg" class="w-auto h-auto" />
            <h2 class="font-normal text-xl text-primary tracking-wider">$80</h2>
          </div>
          <div class="flex flex-col items-center gap-2 font-manrope">
            <p class="font-normal text-primary tracking-wider text-base text-center">
              Complete documentation
            </p>
            <hr class="w-full border-t-[0.5] border-primary" />
            <p class="font-normal text-primary tracking-wider text-base text-center">
              2GB cloud storage
            </p>
          </div>
          <button
            data-id="extra-pack-80"
            data-name="Extra Pack"
            data-price="80"
            data-icon="PriceIcon3.svg"
            class="add-to-cart bg-primary text-red py-2.5 px-4 rounded-full hover:bg-light-red transition-all duration-300"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </section>
  );
}
