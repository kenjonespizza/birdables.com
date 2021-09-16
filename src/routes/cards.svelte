<script context="module">
  import { base } from '$app/paths';
  export async function load({page, fetch}) {
    const url = `${base}/api/cards`;
    const res = await fetch(url)
    if (res) {
			return {
				props: {
					birdsProp: await res.json()
				}
			};
		}
    return {
			status: res.status,
			error: new Error().message,
		};
  }
</script>

<script>
  import { scrollToSection } from '$lib/utils'
  import Breadcrumb from '$lib/components/Breadcrumb.svelte'
  import CardList from '$lib/components/CardList.svelte'

  // import invert from 'invert-color';
  import GetNotified from '$lib/components/GetNotified.svelte';

  export let birdsProp;

  let isSorterShowing = false;
  let releaseOrderNewest = true;
  let alphabeticalOrder = false;
  let rarityOrder = true;
  let sortStatus = 'Alphabetical (A > Z)';

  function toggle() {
    isSorterShowing = !isSorterShowing;
  }

  let standardBirds = birdsProp.filter(bird => !bird.specialty)
  let specialtyBirds = birdsProp.filter(bird => bird.specialty)

  var birds = birdsProp
  const filterBy = (property="slug") => {
    toggle()
    birds.sort((a,b) => {
      let birdA = a[property];
      let birdB = b[property];
      
      if (property === "releaseDate") {
        let birdADate = new Date(birdA);
        let birdBDate = new Date(birdB);

        birds = birds;
        return releaseOrderNewest ? birdADate - birdBDate : birdBDate - birdADate;
      } else if (property === "birdName") {
        if (birdA < birdB) {
          birds = birds;
          return alphabeticalOrder ? -1 : 1;
        }
        if (birdB < birdA) {
          birds = birds;
          return alphabeticalOrder ? 1 : -1;
        }
        birds = birds;

        return 0;
      } else if (property === "rarity") {
        if (birdA < birdB) {
          birds = birds;
          return rarityOrder ? -1 : 1;
        }
        if (birdB < birdA) {
          birds = birds;
          return rarityOrder ? 1 : -1;
        }
        birds = birds;

        return 0;
      }
      
    });
  }
  
  $: {
    birds = birds;
  }
</script>

<svelte:head>
  <title>Bird Cards | Birdables</title>
</svelte:head>

<div class="bg-white">
 
  <section class="bg-gray-blue">
    
    <div class="max-w-7xl mx-auto pt-10 pb-12 sm:px-6 md:px-8">
      <Breadcrumb current={"All Cards"} />
      <div class="md:flex md:justify-between items-end">
      <div class="max-w-3xl pt-8">
          <h2 class="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tighter lg:text-6xl">Browse Cards</h2>
          <p class="mt-4 text-xl text-gray-500">Start or continue building your Birdables collection!</p>
      </div>
      

      <!-- <section aria-labelledby="filter-heading" class="border-t border-gray-200">
        <h2 id="filter-heading" class="sr-only">Bird sorting options</h2>
  
        <div class="flex items-center justify-between">
          <div class="relative z-10 inline-block text-left">
            <div>
              <button on:click={toggle} type="button" class={`${isSorterShowing ? "text-gray-900 border-b-gray-blue" : "text-gray-400 border-b-gray-300 hover:border-b-gray-900"} group inline-flex justify-between items-center w-80 text-lg transform translate-y-3 transition-all border-b-3 pb-2 hover:text-gray-900 `} id="mobile-menu-button" aria-expanded="false" aria-haspopup="true">
                Sort By: {sortStatus}
                <svg class={`${isSorterShowing ? "scale-y-flip" : ""} scale-y-1 flex-shrink-0 -mr-1 ml-1 h-5 w-5 text-gray-400 transform transition group-hover:text-gray-500`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
              </button>
            </div>

            <div class={`${isSorterShowing ? "ease-out duration-100 transform opacity-100 scale-100 block" : " hidden ease-in duration-75 transform opacity-0 scale-95"} transition origin-top-left absolute left-0 z-10 mt-2 w-full rounded-md shadow-2xl bg-white ring-1 ring-black ring-opacity-5 focus:outline-none`} role="menu" aria-orientation="vertical" aria-labelledby="mobile-menu-button" tabindex="-1">
              <div class="py-1" role="none">
                <button on:click={
                    () => {
                      filterBy("birdName");
                      
                      alphabeticalOrder = !alphabeticalOrder;
                      releaseOrderNewest = true;
                      rarityOrder = true;
                      sortStatus = `Alphabetical (${alphabeticalOrder ? "Z > A" : "A > Z"})`;
                      
                    }
                  } class="text-left flex space-x-2 w-full px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100" role="menuitem" tabindex="-1" id="mobile-menu-item-0">
                  {#if alphabeticalOrder}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16"><path fill="none" d="M0 0H24V24H0z"/><path fill="currentColor" d="M20 4v12h3l-4 5-4-5h3V4h2zm-8 14v2H3v-2h9zm2-7v2H3v-2h11zm0-7v2H3V4h11z"/></svg>
                  {:else}
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0H24V24H0z"/><path fill="currentColor" d="M19 3l4 5h-3v12h-2V8h-3l4-5zm-5 15v2H3v-2h11zm0-7v2H3v-2h11zm-2-7v2H3V4h9z"/></svg>
                  {/if}
                  <span>Alphabetical ({alphabeticalOrder ? "A > Z" : "Z > A"})</span>
                </button>

                <button on:click={
                    () => {
                      filterBy("releaseDate");
                      releaseOrderNewest = !releaseOrderNewest;
                      alphabeticalOrder = true;
                      rarityOrder = true;
                      sortStatus = `Release Date (${releaseOrderNewest ? "Old > New" : "Newest > Old"})`;
                    }
                  } class="text-left flex space-x-2 w-full px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100" role="menuitem" tabindex="-1" id="mobile-menu-item-0">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16"><path fill="none" d="M0 0h24v24H0z"/><path fill="currentColor" d="M2 11h20v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-9zm15-8h4a1 1 0 0 1 1 1v5H2V4a1 1 0 0 1 1-1h4V1h2v2h6V1h2v2z"/></svg>
                  <span>Release Date ({releaseOrderNewest ? "Newest > Old" : "Old > New"})</span>
                </button>                  
  
                <button on:click={
                    () => {
                    filterBy("rarity");
                      rarityOrder = !rarityOrder;
                      releaseOrderNewest = true;
                      alphabeticalOrder = true;
                      sortStatus = `Rarity (${rarityOrder ? "Rare > Common" : "Common > Rare"})`;
                    }
                  } class="text-left flex space-x-2 w-full px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100" role="menuitem" tabindex="-1" id="mobile-menu-item-0">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16"><path fill="none" d="M0 0h24v24H0z"/><path fill="currentColor" d="M12 18.26l-7.053 3.948 1.575-7.928L.587 8.792l8.027-.952L12 .5l3.386 7.34 8.027.952-5.935 5.488 1.575 7.928z"/></svg>
                  <span>Rarity ({rarityOrder ? "Common > Rare" : "Rare > Common"})</span>
                </button>
              </div>
            </div>
          </div>
  
        </div>
      </section> -->
    </div>
    </div>
  </section>
  <!-- Active filters -->
  <div class="bg-white border-b border-gray-900 border-opacity-10 sticky top-0 z-10">
    <div class="max-w-7xl mx-auto py-4 px-4 sm:flex sm:space-x-2 sm:items-center sm:px-6 lg:px-8">
      <h3 class="text-base font-semibold text-gray-500">
        Jump to
        <span class="sr-only">, active</span>
      </h3>

      <!-- <div aria-hidden="true" class="hidden w-px h-5 bg-gray-300 sm:block sm:ml-4 sm:mr-2"></div> -->
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-5 h-5 text-gray-300"><path fill="none" d="M0 0h24v24H0z"/><path fill="currentColor" d="M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z"/></svg>

      <div class="mt-2 sm:mt-0">
        <div class="flex flex-wrap items-center">
          <span class="flex items-center space-x-2 font-medium text-gray-900">
            <a on:click={(e) => {scrollToSection('standard', e)}} href="#standard" class="rounded-full border px-4 py-2 text-base text-gray-600 transition hover:border-white hover:ring-2 hover:ring-offset-2 hover:ring-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
              Standard Cards ({standardBirds.length})
            </a>
          </span>
        </div>
      </div>

      <div class="mt-2 sm:mt-0">
        <div class="flex flex-wrap items-center">
          <span class="flex items-center space-x-2 font-medium text-gray-900">
            <a on:click={(e) => {scrollToSection('specialty', e)}} href="#specialty" class="rounded-full border px-4 py-2 text-base text-gray-600 transition hover:border-white hover:ring-2 hover:ring-offset-2 hover:ring-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
              Specialy Cards ({specialtyBirds.length})
            </a>
          </span>
        </div>
      </div>

    </div>
  </div>

  <div class="mx-auto max-w-7xl pt-6 pb-6 px-4 lg:transform sm:px-6 md:px-8 lg:pb-12" id="standard">
    <div class="space-y-6">
      <br>
      <div>
        <h2 class="font-black tracking-tighter leading-none text-5xl">Standard Cards <span class="tracking-tight italic text-gray-300 text-4xl">({standardBirds.length})</span></h2>
        <p class="mt-3 text-lg text-gray-500">Standard cards are available to buy separately, but also are included as part of <a class="underline text-gray-900 font-semibold" href="#">Card Packs</a>.</p>
      </div>
      <CardList cards={standardBirds} />
    </div>
  </div>

  <div class="mx-auto max-w-7xl pt-6 pb-6 px-4 lg:transform sm:px-6 lg:pb-24" id="specialty">
    <div class="space-y-6">
      <br>
      <div>
        <h2 class="font-black tracking-tighter leading-none text-5xl">Specialty Cards <span class="tracking-tight italic text-gray-300 text-4xl">({specialtyBirds.length})</span></h2>
        <p class="mt-3 text-lg text-gray-500">The only way to get a specialy card is to buy a <a class="underline text-gray-900 font-semibold" href="#">Card Pack</a> and chance your luck!  However the digital version are available separately.</p>
      </div>
      <CardList cards={specialtyBirds} />
    </div>
  </div>
</div>



<GetNotified />

<style>
  /* .card {
    width: 100%;
    height: 100%;
    perspective: 1000px; 
    will-change: transform;
  }

  .card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.5s ease-out;
    transform-style: preserve-3d;
  }

  .card:hover .card-inner{
    transform: rotateY(180deg);
  }

  .card-front, .card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
  }

  .card-back {
    transform: rotateY(180deg);
    will-change: transform;
  }

  .card-back > div {
    background-color: var(--bird-color);
    border-radius: 13px;
    color: var(--text-color);
  } */
</style>