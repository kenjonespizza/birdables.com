<script>
  import { page } from "$app/stores"
  import EtsyIcon from "$lib/svgs/EtsyIcon.svelte";
  import Instagram from "$lib/svgs/Instagram.svelte";
  import OpenSeaIcon from "$lib/svgs/OpenSeaIcon.svelte";
  import Twtter from "$lib/svgs/Twtter.svelte";

  let isOpen = false;
  let shopNavOpen = false;

  function toggle() {
    isOpen = !isOpen
  }
  
  function toggleShopNav(setter = null) {
    if (setter !== null) {
      shopNavOpen = setter
    } else {
      shopNavOpen = !shopNavOpen
    }
  }

  function handleKeyDown(e) {
    if (isOpen && e.key === "Escape") {
      toggle();
    }
    if (shopNavOpen && e.key === "Escape") {
      toggleShopNav(false);
    }
  }

</script>

<svelte:window on:keydown={handleKeyDown}></svelte:window>

<!-- This example requires Tailwind CSS v2.0+ -->
<div class="relative bg-white z-10">
  <div class="absolute inset-0 z-30 pointer-events-none" aria-hidden="true"></div>
  <div class="relative z-20">
    <div class="flex justify-between items-center px-6 py-6 lg:px-16 lg:justify-start lg:space-x-10">
      <div class="flex space-x-12 items-center">
        <a sveltekit:prefetch href="/" class="flex">
          <span class="sr-only">Birdables</span>
          <img class="h-6 w-auto sm:h-8" src="/images/logo.svg" alt="Birdables Logo"  width="202.86" height="36"/>
        </a>
        <div class="w-[1px] h-12 bg-gray-100 hidden lg:block"></div>
      </div>
      <div class="-mr-2 -my-2 lg:hidden">
        <button type="button" on:click={toggle} class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-90 border0 border-gray-100 hover:border-gray-blue focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500" aria-expanded={isOpen}>
          <span class="sr-only">Open menu</span>
          <!-- Heroicon name: outline/menu -->
          <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      <div class="hidden lg:flex-1 lg:flex lg:items-center lg:justify-between">
        <nav class="flex space-x-8">
          <a sveltekit:prefetch href="/cards" on:focus={() => toggleShopNav(false)} class={`${ $page.url.pathname === "/cards" ? "border-gray-900" : "border-transparent"} text-lg font-medium text-gray-900 border-b-3 translate-y-1.5 pb-1 transition hover:border-gray-900 focus:border-gray-900`}>
            Cards
          </a>
          <!-- <div
            class="relative">
            <button on:click={() => toggleShopNav()} class={`${shopNavOpen ? 'border-gray-900' : ''} inline-flex items-center text-base font-medium text-gray-900 border-b-3 border-transparent transform translate-y-1.5 pb-1 transition hover:border-gray-900 focus:border-gray-900`}>
              <span>Shop</span>
              <svg class={`${shopNavOpen ? '-rotate-180' : 'rotate-0'} transform transition text-gray-900 ml-2 h-5 w-5 group-hover:text-gray-900`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
            </button>

            <div class={`${shopNavOpen ? 'opacity-100 translate-y-0 ease-in duration-150' : 'opacity-0 translate-y-1 pointer-events-none duration-200'} transition absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2`}>
              <div class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                <div class="relative grid gap-4 bg-white p-4">
                  <a on:click={() => toggleShopNav()} href="https://opensea.io/collection/birdables" target="_blank" rel="noopener" noreferrer class="p-4 flex items-center rounded-lg border border-gray-100 hover:border-gray-blue">                    
                    <svg class="w-10 h-10" viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M90 45C90 69.8514 69.8514 90 45 90C20.1486 90 0 69.8514 0 45C0 20.1486 20.1486 0 45 0C69.8566 0 90 20.1486 90 45Z" fill="#2081E2"/>
                      <path d="M22.2011 46.512L22.3953 46.2069L34.1016 27.8939C34.2726 27.6257 34.6749 27.6535 34.8043 27.9447C36.76 32.3277 38.4475 37.7786 37.6569 41.1721C37.3194 42.5683 36.3948 44.4593 35.3545 46.2069C35.2204 46.4612 35.0725 46.7109 34.9153 46.9513C34.8413 47.0622 34.7165 47.127 34.5824 47.127H22.5432C22.2196 47.127 22.0301 46.7756 22.2011 46.512Z" fill="white"/>
                      <path d="M74.38 49.9149V52.8137C74.38 52.9801 74.2783 53.1281 74.1304 53.1928C73.2242 53.5812 70.1219 55.0052 68.832 56.799C65.5402 61.3807 63.0251 67.932 57.4031 67.932H33.949C25.6362 67.932 18.9 61.1727 18.9 52.8322V52.564C18.9 52.3421 19.0803 52.1618 19.3023 52.1618H32.377C32.6359 52.1618 32.8255 52.4022 32.8024 52.6565C32.7099 53.5072 32.8671 54.3764 33.2693 55.167C34.0461 56.7435 35.655 57.7283 37.3934 57.7283H43.866V52.675H37.4673C37.1391 52.675 36.9449 52.2959 37.1345 52.0277C37.2038 51.9214 37.2824 51.8104 37.3656 51.6856C37.9713 50.8257 38.8358 49.4895 39.6958 47.9684C40.2829 46.9421 40.8516 45.8463 41.3093 44.746C41.4018 44.5472 41.4758 44.3438 41.5497 44.1449C41.6746 43.7936 41.804 43.4653 41.8965 43.1371C41.9889 42.8597 42.0629 42.5684 42.1369 42.2956C42.3542 41.3617 42.4467 40.3723 42.4467 39.3459C42.4467 38.9437 42.4282 38.523 42.3912 38.1207C42.3727 37.6815 42.3172 37.2423 42.2617 36.8031C42.2247 36.4147 42.1554 36.031 42.0814 35.6288C41.9889 35.0416 41.8595 34.4591 41.7115 33.8719L41.6607 33.65C41.5497 33.2478 41.4573 32.864 41.3278 32.4618C40.9626 31.1996 40.5418 29.9698 40.098 28.8186C39.9362 28.3609 39.7512 27.9217 39.5663 27.4825C39.2935 26.8213 39.0161 26.2203 38.7619 25.6516C38.6324 25.3927 38.5214 25.1569 38.4105 24.9165C38.2857 24.6437 38.1562 24.371 38.0268 24.112C37.9343 23.9132 37.8279 23.7283 37.754 23.5434L36.9634 22.0824C36.8524 21.8836 37.0374 21.6478 37.2546 21.7079L42.2016 23.0487H42.2155C42.2247 23.0487 42.2294 23.0533 42.234 23.0533L42.8859 23.2336L43.6025 23.437L43.866 23.511V20.5706C43.866 19.1512 45.0034 18 46.4089 18C47.1116 18 47.7496 18.2866 48.2073 18.7536C48.665 19.2206 48.9517 19.8586 48.9517 20.5706V24.935L49.4787 25.0829C49.5204 25.0968 49.562 25.1153 49.599 25.143C49.7284 25.2401 49.9133 25.3835 50.1491 25.5591C50.3341 25.7071 50.5329 25.8874 50.7733 26.0723C51.2495 26.4561 51.8181 26.9508 52.4423 27.5194C52.6087 27.6628 52.7706 27.8107 52.9185 27.9587C53.723 28.7076 54.6245 29.5861 55.4845 30.557C55.7249 30.8297 55.9607 31.1071 56.2011 31.3984C56.4415 31.6943 56.6958 31.9856 56.9177 32.2769C57.209 32.6652 57.5233 33.0674 57.7961 33.4882C57.9256 33.687 58.0735 33.8904 58.1984 34.0892C58.5497 34.6209 58.8595 35.1711 59.1554 35.7212C59.2802 35.9755 59.4097 36.2529 59.5206 36.5257C59.8489 37.2608 60.1078 38.0098 60.2742 38.7588C60.3251 38.9206 60.3621 39.0963 60.3806 39.2535V39.2904C60.436 39.5124 60.4545 39.7482 60.473 39.9886C60.547 40.756 60.51 41.5235 60.3436 42.2956C60.2742 42.6239 60.1818 42.9336 60.0708 43.2619C59.9598 43.5763 59.8489 43.9045 59.7056 44.2143C59.4282 44.8569 59.0999 45.4996 58.7115 46.1006C58.5867 46.3225 58.4388 46.5583 58.2908 46.7802C58.129 47.016 57.9626 47.238 57.8146 47.4553C57.6112 47.7327 57.3939 48.0239 57.172 48.2828C56.9732 48.5556 56.7697 48.8284 56.5478 49.0688C56.2381 49.434 55.9422 49.7808 55.6324 50.1137C55.4475 50.331 55.2487 50.5529 55.0452 50.7517C54.8464 50.9736 54.643 51.1724 54.4581 51.3573C54.1483 51.6671 53.8894 51.9075 53.6721 52.1063L53.1635 52.5733C53.0896 52.638 52.9925 52.675 52.8908 52.675H48.9517V57.7283H53.9079C55.0175 57.7283 56.0716 57.3353 56.9223 56.6141C57.2136 56.3598 58.485 55.2594 59.9876 53.5997C60.0384 53.5442 60.1032 53.5026 60.1771 53.4841L73.8668 49.5265C74.1211 49.4525 74.38 49.6467 74.38 49.9149Z" fill="white"/>
                    </svg>
  
                    <div class="ml-4">
                      <p class="text-base font-semibold text-gray-900 inline-flex items-center space-x-1">
                        <span>
                          Digital Cards
                        </span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16"><path fill="none" d="M0 0h24v24H0z"/><path fill="currentColor" d="M10 6v2H5v11h11v-5h2v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h6zm11-3v8h-2V6.413l-7.793 7.794-1.414-1.414L17.585 5H13V3h8z"/></svg>
                      </p>
                      <p class="mt-1 text-sm text-gray-500">
                        Collect the NFTs on <span class="underline">Opensea.io</span>.
                      </p>
                    </div>
                  </a>

                  <a on:click={() => toggleShopNav()} href="https://www.etsy.com/shop/Birdables" target="_blank" rel="noopener" noreferrer class="p-4 flex items-center rounded-lg border border-gray-100 hover:border-gray-blue">                    
                    <svg class="w-10 h-10" viewBox="0 0 57 58" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M28.615 57c15.804 0 28.616-12.76 28.616-28.5S44.419 0 28.615 0C12.812 0 0 12.76 0 28.5S12.812 57 28.615 57z" fill="#CE6F2D"/><path d="M25 38V17.51l.029-.01H35c2 0 2.5 5.5 2.5 5.5H39l.3-7.5H37s-.5.5-2 .5H17v1s4 .374 4 2v19s0 2-2 2h-2v1.5h23l.7-7.5h-1.2s-1.475 6-5.5 6h-7c-2 0-2-2-2-2zm0-10.3h6c1.6 0 2-4 2-4h1.5s-.25 3.529-.25 4.8c0 1.307.25 4.8.25 4.8h-1.434s-.466-4-2.07-4H25v-1.6z" fill="#FFF"/></g></svg>
  
                    <div class="ml-4">
                      <p class="text-base font-semibold text-gray-900 inline-flex items-center space-x-1">
                        <span>
                          Physical Cards
                        </span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16"><path fill="none" d="M0 0h24v24H0z"/><path fill="currentColor" d="M10 6v2H5v11h11v-5h2v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h6zm11-3v8h-2V6.413l-7.793 7.794-1.414-1.414L17.585 5H13V3h8z"/></svg>
                      </p>
                      <p class="mt-1 text-sm text-gray-500">
                        Cards made from 100% recycled paper on <span class="underline">Etsy.com</span>.
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div> -->
          
          <a on:focus={() => toggleShopNav(false)} sveltekit:prefetch href="/about" class={`${ $page.url.pathname === "/about" ? "border-gray-900" : "border-transparent"} text-lg font-medium text-gray-900 border-b-3 translate-y-1.5 pb-1 transition hover:border-gray-900 focus:border-gray-900`}>
            About Birdables
          </a>
          <a on:focus={() => toggleShopNav(false)} sveltekit:prefetch href="/blog" class={`${ $page.url.pathname === "/blog" ? "border-gray-900" : "border-transparent"} text-lg font-medium text-gray-900 border-b-3 translate-y-1.5 pb-1 transition hover:border-gray-900 focus:border-gray-900`}>
            Blog
          </a>
          <!-- <span class={`text-base font-medium text-gray-600 transform translate-y-1.5 pb-1 transition cursor-not-allowed`}>
            Submit a Bird (Coming Soon)
          </span> -->

        </nav>
        <div class="flex items-center lg:ml-12 space-x-6">
          <a href="https://instagram.com/Birdables_Cards" target="_blank" rel="noopener" noreferrer class="text-base font-medium text-gray-900 border-b-3 border-transparent translate-y-1.5 pb-1 transition hover:border-gray-900 focus:border-gray-900">
            <Instagram class="h-[21px] text-gray-900" />
            <span class="sr-only">Instagram</span>
          </a>
          <a href="https://twitter.com/BirdablesCards" target="_blank" rel="noopener" noreferrer class="text-base font-medium text-gray-900 border-b-3 border-transparent translate-y-1.5 pb-1 transition hover:border-gray-900 focus:border-gray-900">
            <Twtter class="h-[21px] text-gray-900" />
            <span class="sr-only">Twitter</span>
          </a>
          <a href="https://opensea.io/collection/birdables" target="_blank" rel="noopener" noreferrer class="text-base font-medium text-gray-900 border-b-3 border-transparent translate-y-1.5 pb-1 transition hover:border-gray-900 focus:border-gray-900">
            <OpenSeaIcon class="h-[21px] text-gray-900" />
            <span class="sr-only">OpenSea</span>
          </a>
          <a href="https://www.etsy.com/shop/Birdables" target="_blank" rel="noopener" noreferrer class="text-base font-medium text-gray-900 border-b-3 border-transparent translate-y-1.5 pb-1 transition hover:border-gray-900 focus:border-gray-900">
            <EtsyIcon class="h-[21px] text-gray-900" />
            <span class="sr-only">Etsy</span>
          </a>
        </div>
      </div>
    </div>
  </div>

  <!--
    Mobile menu, show/hide based on mobile menu state.

    Entering: "duration-200 ease-out"
      From: "opacity-0 scale-95"
      To: "opacity-100 scale-100"
    Leaving: "duration-100 ease-in"
      From: "opacity-100 scale-100"
      To: "opacity-0 scale-95"
  -->
  <div class={`absolute z-30 top-0 inset-x-0 p-2 transition origin-top-right lg:hidden ${isOpen ? "ease-out duration-200 opacity-100 scale-100" : "ease-out duration-150 opacity-0 scale-95 pointer-events-none"}`}>
    <div class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
      <div class="pt-5 pb-6 px-5">
        <div class="flex items-center justify-between">
          <a on:click={toggle} sveltekit:prefetch href="/">
            <img class="h-6 w-auto" src="/images/logo.svg" alt="Birdables Logo">
          </a>
          <div class="-mr-2">
            <button type="button" on:click={toggle} class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-90 border0 border-gray-100 hover:border-gray-blue focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500">
              <span class="sr-only">Close menu</span>
              <!-- Heroicon name: outline/x -->
              <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
        <div class="mt-6">
          <nav class="grid gap-6">
            <div class="py-6 px-5">
              <div class="grid grid-cols-1 gap-4 text-center">
                <a on:click={toggle} sveltekit:prefetch href="/cards" class={`${ $page.url.pathname === "/cards" ? "border-gray-900" : "border-transparent"} text-lg font-medium text-gray-900 border-b-3 translate-y-1.5 pb-1 transition hover:border-gray-900 focus:border-gray-900`}>
                  Cards
                </a>
                <!-- <a on:click={toggle} sveltekit:prefetch href="/cards" class={`border-transparent text-lg font-medium text-gray-900 border-b-3 transform translate-y-1.5 pb-1 transition hover:border-gray-900 focus:border-gray-900`}>
                  Shop: Digital Cards
                </a>
                <a on:click={toggle} sveltekit:prefetch href="/cards" class={`border-transparent text-lg font-medium text-gray-900 border-b-3 transform translate-y-1.5 pb-1 transition hover:border-gray-900 focus:border-gray-900`}>
                  Shop: Physical Cards
                </a> -->
                <a on:click={toggle} sveltekit:prefetch href="/about" class={`${ $page.url.pathname === "/about" ? "border-gray-900" : "border-transparent"} text-lg font-medium text-gray-900 border-b-3 translate-y-1.5 pb-1 transition hover:border-gray-900 focus:border-gray-900`}>
                  About Birdables
                </a>
                <a on:click={toggle} sveltekit:prefetch href="/blog" class={`${ $page.url.pathname === "/blog" ? "border-gray-900" : "border-transparent"} text-lg font-medium text-gray-900 border-b-3 translate-y-1.5 pb-1 transition hover:border-gray-900 focus:border-gray-900`}>
                  Blog
                </a>
                <!-- <span class={`text-base font-medium text-gray-600 transform translate-y-1.5 pb-1 transition cursor-not-allowed`}>
                  Submit a Bird (Coming Soon)
                </span> -->
              </div>
              <div class="flex items-center justify-center space-x-6 mt-6 w-full">
                <a href="https://instagram.com/Birdables_Cards" target="_blank" rel="noopener" noreferrer class="text-base font-medium text-gray-900 border-b-3 border-transparent translate-y-1.5 pb-1 transition hover:border-gray-900 focus:border-gray-900">
                  <Instagram class="h-[21px] text-gray-900" />
                </a>
                <a href="https://twitter.com/BirdablesCards" target="_blank" rel="noopener" noreferrer class="text-base font-medium text-gray-900 border-b-3 border-transparent translate-y-1.5 pb-1 transition hover:border-gray-900 focus:border-gray-900">
                  <Twtter class="h-[21px] text-gray-900" />
                </a>
                <a href="https://opensea.io/collection/birdables" target="_blank" rel="noopener" noreferrer class="text-base font-medium text-gray-900 border-b-3 border-transparent translate-y-1.5 pb-1 transition hover:border-gray-900 focus:border-gray-900">
                  <OpenSeaIcon class="h-[21px] text-gray-900" />
                </a>
                <a href="https://www.etsy.com/shop/Birdables" target="_blank" rel="noopener" noreferrer class="text-base font-medium text-gray-900 border-b-3 border-transparent translate-y-1.5 pb-1 transition hover:border-gray-900 focus:border-gray-900">
                  <EtsyIcon class="h-[21px] text-gray-900" />
                </a>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  </div>
</div>
