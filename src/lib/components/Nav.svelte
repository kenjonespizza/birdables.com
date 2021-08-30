<script>
  import { page } from "$app/stores"
  let isOpen = false;

  function toggle() {
    isOpen = !isOpen
  }

  function handleKeyDown(e) {
    if (isOpen && e.key === "Escape") {
      toggle();
    }
  }

</script>

<svelte:window on:keydown={handleKeyDown}></svelte:window>

<!-- This example requires Tailwind CSS v2.0+ -->
<div class="relative bg-white">
  <div class="absolute inset-0 z-30 pointer-events-none" aria-hidden="true"></div>
  <div class="relative z-20">
    <div class="flex justify-between items-center px-6 py-6 lg:px-16 lg:justify-start lg:space-x-10">
      <div class="flex space-x-12 items-center">
        <a sveltekit:prefetch href="/" class="flex">
          <span class="sr-only">Birdables</span>
          <img class="h-6 w-auto sm:h-8" src="/images/BirdablesLogoDark.svg" alt="Birdables">
        </a>
        <div class="w-[1px] h-12 bg-gray-100 hidden lg:block"></div>
      </div>
      <div class="-mr-2 -my-2 lg:hidden">
        <button type="button" on:click={toggle} class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500" aria-expanded={isOpen}>
          <span class="sr-only">Open menu</span>
          <!-- Heroicon name: outline/menu -->
          <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      <div class="hidden lg:flex-1 lg:flex lg:items-center lg:justify-between">
        <nav class="flex space-x-8">
          <a sveltekit:prefetch href="/birds" class={`${$page.path === "/birds" ? "border-gray-900" : "border-transparent"} text-base font-medium text-gray-900 border-b-3 transform translate-y-1.5 pb-1 transition hover:border-gray-900`}>
            Cards
          </a>
          <a sveltekit:prefetch href="/about" class={`${$page.path === "/about" ? "border-gray-900" : "border-transparent"} text-base font-medium text-gray-900 border-b-3 transform translate-y-1.5 pb-1 transition hover:border-gray-900`}>
            About Birdables
          </a>
          <span class={`text-base font-medium text-gray-400 transform translate-y-1.5 pb-1 transition cursor-not-allowed`}>
            Submit a Bird (Coming Soon)
          </span>

        </nav>
        <div class="flex items-center lg:ml-12 space-x-6">
          <a href="https://instagram.com/Birdables_Cards" target="_blank" class="text-base font-medium text-gray-900 border-b-3 border-transparent transform translate-y-1.5 pb-1 transition hover:border-gray-900">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path fill="currentColor" d="M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm0-2a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm6.5-.25a1.25 1.25 0 0 1-2.5 0 1.25 1.25 0 0 1 2.5 0zM12 4c-2.474 0-2.878.007-4.029.058-.784.037-1.31.142-1.798.332-.434.168-.747.369-1.08.703a2.89 2.89 0 0 0-.704 1.08c-.19.49-.295 1.015-.331 1.798C4.006 9.075 4 9.461 4 12c0 2.474.007 2.878.058 4.029.037.783.142 1.31.331 1.797.17.435.37.748.702 1.08.337.336.65.537 1.08.703.494.191 1.02.297 1.8.333C9.075 19.994 9.461 20 12 20c2.474 0 2.878-.007 4.029-.058.782-.037 1.309-.142 1.797-.331.433-.169.748-.37 1.08-.702.337-.337.538-.65.704-1.08.19-.493.296-1.02.332-1.8.052-1.104.058-1.49.058-4.029 0-2.474-.007-2.878-.058-4.029-.037-.782-.142-1.31-.332-1.798a2.911 2.911 0 0 0-.703-1.08 2.884 2.884 0 0 0-1.08-.704c-.49-.19-1.016-.295-1.798-.331C14.925 4.006 14.539 4 12 4zm0-2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772 4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2z"/></svg>
          </a>
          <a href="https://twitter.com/BirdablesCards" target="_blank" class="text-base font-medium text-gray-900 border-b-3 border-transparent transform translate-y-1.5 pb-1 transition hover:border-gray-900">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path fill="currentColor" d="M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z"/></svg>
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
  <div class={`absolute z-30 top-0 inset-x-0 p-2 transition transform origin-top-right lg:hidden ${isOpen ? "ease-out duration-200 opacity-100 scale-100" : "ease-out duration-150 opacity-0 scale-95 pointer-events-none"}`}>
    <div class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
      <div class="pt-5 pb-6 px-5">
        <div class="flex items-center justify-between">
          <a on:click={toggle} sveltekit:prefetch href="/">
            <img class="h-6 w-auto" src="/images/BirdablesLogoDark.svg" alt="Birdables">
          </a>
          <div class="-mr-2">
            <button type="button" on:click={toggle} class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500">
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
                <a on:click={toggle} sveltekit:prefetch href="/birds" class={`${$page.path === "/birds" ? "border-gray-900" : "border-transparent"} text-lg font-medium text-gray-900 border-b-3 transform translate-y-1.5 pb-1 transition hover:border-gray-900`}>
                  Cards
                </a>
                <a on:click={toggle} sveltekit:prefetch href="/about" class={`${$page.path === "/about" ? "border-gray-900" : "border-transparent"} text-lg font-medium text-gray-900 border-b-3 transform translate-y-1.5 pb-1 transition hover:border-gray-900`}>
                  About Birdables
                </a>
                <span class={`text-base font-medium text-gray-400 transform translate-y-1.5 pb-1 transition cursor-not-allowed`}>
                  Submit a Bird (Coming Soon)
                </span>
              </div>
              <div class="flex items-center justify-center space-x-6 mt-6 w-full">
                <a href="https://instagram.com/Birdables_Cards" target="_blank" class="text-base font-medium text-gray-900 border-b-3 border-transparent transform translate-y-1.5 pb-1 transition hover:border-gray-900">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path fill="currentColor" d="M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm0-2a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm6.5-.25a1.25 1.25 0 0 1-2.5 0 1.25 1.25 0 0 1 2.5 0zM12 4c-2.474 0-2.878.007-4.029.058-.784.037-1.31.142-1.798.332-.434.168-.747.369-1.08.703a2.89 2.89 0 0 0-.704 1.08c-.19.49-.295 1.015-.331 1.798C4.006 9.075 4 9.461 4 12c0 2.474.007 2.878.058 4.029.037.783.142 1.31.331 1.797.17.435.37.748.702 1.08.337.336.65.537 1.08.703.494.191 1.02.297 1.8.333C9.075 19.994 9.461 20 12 20c2.474 0 2.878-.007 4.029-.058.782-.037 1.309-.142 1.797-.331.433-.169.748-.37 1.08-.702.337-.337.538-.65.704-1.08.19-.493.296-1.02.332-1.8.052-1.104.058-1.49.058-4.029 0-2.474-.007-2.878-.058-4.029-.037-.782-.142-1.31-.332-1.798a2.911 2.911 0 0 0-.703-1.08 2.884 2.884 0 0 0-1.08-.704c-.49-.19-1.016-.295-1.798-.331C14.925 4.006 14.539 4 12 4zm0-2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772 4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2z"/></svg>
                </a>
                <a href="https://twitter.com/BirdablesCards" target="_blank" class="text-base font-medium text-gray-900 border-b-3 border-transparent transform translate-y-1.5 pb-1 transition hover:border-gray-900">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path fill="currentColor" d="M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z"/></svg>
                </a>
              </div>
            </div>
          </nav>
        </div>
      </div>
      
    </div>
  </div>
</div>