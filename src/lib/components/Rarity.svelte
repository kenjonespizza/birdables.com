<script>
  export let stars;
  export let color;

  let fullStars = [];
  let hollowlStars = [];
  let isModalOpen = false;

  function toggleModal() {
    isModalOpen = !isModalOpen;
  }

  function handleKeydown(e) {
    if (isModalOpen && e.key === "Escape") {
      toggleModal();
    }
  }

  for (let i = 0; i < 5; i++) {
    i < stars ? fullStars.push('★') : hollowlStars.push('☆');
  }
</script>

<svelte:window on:keydown={handleKeydown}/>

<div class="mt-4">
  <span class="sr-only">Rarity:</span>
  <div class="flex items-center rounded-full space-x-1">
    <!-- <span class="text-md text-gray-600">Rarity:</span> -->
    {#each fullStars as star}
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" class="h-4 w-4 flex-shrink-0 text-gray-600"><path fill="none" d="M0 0h24v24H0z"/><path fill="currentColor" d="M12 18.26l-7.053 3.948 1.575-7.928L.587 8.792l8.027-.952L12 .5l3.386 7.34 8.027.952-5.935 5.488 1.575 7.928z"/></svg>
      
    {/each}

    {#each hollowlStars as star}
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" th="16" height="16" class="h-4 w-4 flex-shrink-0 text-gray-600"><path fill="none" d="M0 0h24v24H0z"/><path fill="currentColor" d="M12 18.26l-7.053 3.948 1.575-7.928L.587 8.792l8.027-.952L12 .5l3.386 7.34 8.027.952-5.935 5.488 1.575 7.928L12 18.26zm0-2.292l4.247 2.377-.949-4.773 3.573-3.305-4.833-.573L12 5.275l-2.038 4.42-4.833.572 3.573 3.305-.949 4.773L12 15.968z"/></svg>
    {/each}

    <button on:click={toggleModal} class="text-xs ml-4 underline text-gray-600">(What's this?)</button>

    <!--
      Heroicon name: solid/star

      Active: "text-yellow-400", Default: "text-gray-300"
    -->
    <!-- <svg class="text-yellow-400 h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>

    <svg class="text-yellow-400 h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>

    <svg class="text-yellow-400 h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>

    <svg class="text-yellow-400 h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>

    <svg class="text-gray-300 h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg> -->
  </div>
  <p class="sr-only">{stars} out of 5 stars on the rarity scale</p>
</div>

<!-- Modal -->
<div class={`${isModalOpen ? "opacity-100 pointer-events-auto" : "opacity-0 delay-300 pointer-events-none"} fixed z-20 inset-0 overflow-y-auto transition`} aria-labelledby="modal-rarity-description" role="dialog" aria-modal="true">
  <div class={`flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0`}>
    <!--
      Background overlay, show/hide based on modal state.

      Entering: "ease-out duration-300"
        From: "opacity-0"
        To: "opacity-100"
      Leaving: "ease-in duration-200"
        From: "opacity-100"
        To: "opacity-0"
    -->
    <div on:click={toggleModal} class={`${isModalOpen ? "opacity-100" : "opacity-0"} fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity duration-300 ease-in-out`} aria-hidden="true"></div>

    <!-- This element is to trick the browser into centering the modal contents. -->
    <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

    <!--
      Modal panel, show/hide based on modal state.

      Entering: "ease-out duration-300"
        From: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
        To: "opacity-100 translate-y-0 sm:scale-100"
      Leaving: "ease-in duration-200"
        From: "opacity-100 translate-y-0 sm:scale-100"
        To: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
    -->
    <div class={`${isModalOpen ? "opacity-100 translate-y-0 sm:scale-100" : "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"} inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all duration-300 ease-in-out sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6`}>
      <div>
        <div class="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-gray-200">
          <svg class="h-6 w-6 text-gray-400"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path fill="currentColor" d="M12 15.968l4.247 2.377-.949-4.773 3.573-3.305-4.833-.573L12 5.275v10.693zm0 2.292l-7.053 3.948 1.575-7.928L.587 8.792l8.027-.952L12 .5l3.386 7.34 8.027.952-5.935 5.488 1.575 7.928L12 18.26z"/></svg>
        </div>
        <div class="mt-3 text-center sm:mt-5">
          <h3 class="text-lg leading-6 font-semibold text-gray-900" id="modal-title">
            Rarity Scale
          </h3>
          <div class="mt-2">
            <p class="text-sm text-gray-500">
              A birds rarity is set by a secret blend of the birds conservation status, likelyness of being spotted in the wild, and the "Birdables Scale of Majesticness".
            </p>
          </div>
        </div>
      </div>
      <div class="mt-5 sm:mt-6">
        <button on:click={toggleModal} type="button" class="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-gray-900 text-base font-medium text-white transition hover:ring-2 hover:ring-offset-2 hover:ring-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 sm:text-sm">
          Got It!
        </button>
      </div>
    </div>
  </div>
</div>