<script>
  import {assets} from '$app/paths';

  let isModalOpen = false;

  function toggleModal() {
    isModalOpen = !isModalOpen;
  }

  function handleKeydown(e) {
    if (isModalOpen && e.key === "Escape") {
      toggleModal();
    }
  }

</script>

<svelte:window on:keydown={handleKeydown}></svelte:window>

<!-- <button class="group mt-10 relative" on:click={toggleModal}>
  <img src={`${assets}/images/Birdable-Card-Anatomy.jpg`} class="rounded-xl" alt="Birdables card anatomy diagram" />
  <div class="w-full h-full text-white absolute inset-0 bg-gray-900 bg-opacity-0 flex justify-center items-center transition group-hover:bg-opacity-50">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-24 h-24 opacity-0 transition scale-75 group-hover:opacity-100 group-hover:scale-100"><path fill="none" d="M0 0h24v24H0z"/><path d="M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15zM10 10V7h2v3h3v2h-3v3h-2v-3H7v-2h3z" fill="currentColor"/></svg>
  </div>
</button> -->

<div class="block overflow-hidden rounded-2xl md:rounded-2xl lg:rounded-5xl group mt-10 relative">
  <img  src={`${assets}/images/Birdable-Card-Anatomy-Light.webp`} alt="Birdables card anatomy diagram" />
  <!-- <div class="w-full h-full text-white absolute inset-0 bg-gray-900 bg-opacity-0 flex justify-center items-center transition group-hover:bg-opacity-50">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-24 h-24 opacity-0 transition scale-75 group-hover:opacity-100 group-hover:scale-100"><path fill="none" d="M0 0h24v24H0z"/><path d="M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15zM10 10V7h2v3h3v2h-3v3h-2v-3H7v-2h3z" fill="currentColor"/></svg>
  </div> -->
</div>

<!-- Modal -->
<div class={`${isModalOpen ? "opacity-100 pointer-events-auto" : "opacity-0 delay-300 pointer-events-none"} fixed z-20 inset-0 overflow-y-auto transition`} aria-labelledby="modal-rarity-description" role="dialog" aria-modal="true">
  <div class={`flex items-center justify-center min-h-screen text-center  sm:block sm:p-0`}>
    
    <!-- Overlay -->
    <div on:click={toggleModal} class={`${isModalOpen ? "opacity-100" : "opacity-0"} fixed h-screen w-screen inset-0 bg-gray-900 bg-opacity-75 transition-opacity duration-300 ease-in-out`} aria-hidden="true"></div>
    <!-- This element is to trick the browser into centering the modal contents. -->

    <div class={`${isModalOpen ? "opacity-100 translate-y-0 sm:scale-100" : "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"} fixed overflow-auto inset-0 flex items-center justify-center h-screen w-screen  pointer-events-none transition-all duration-300 ease-in-out px-0 py-0 md:px-6 md:py-12`}>
        <img src={`${assets}/images/Birdable-Card-Anatomy.jpg`} alt={`Birdables card anatomy diagram`} class={`${isModalOpen ? "pointer-events-auto" : "pointer-events-none"} rounded-xl object-center object-cover drop-shadow-card`}>
    </div>
    <button on:click={toggleModal} class="fixed top-4 right-4 text-white cursor-pointer z-10">
      <span class="sr-only">Close Modal</span>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36" class=""><path fill="none" d="M0 0h24v24H0z"/><path fill="currentColor" d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z"/></svg>
    </button>
  </div>
</div>