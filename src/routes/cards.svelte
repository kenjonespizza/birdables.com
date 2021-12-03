<script context="module">
  import { base } from '$app/paths';
  export async function load({page, fetch}) {
    const url = `${base}/api/cards`;
    const res = await fetch(url)
    if (res) {
			return {
				props: {
					cardsOrig: await res.json()
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
  import SEO from 'svelte-seo';

  import {browser} from '$app/env';
  import site from '$lib/info';
  import Breadcrumb from '$lib/components/Breadcrumb.svelte';
  import CardList from '$lib/components/CardList.svelte';

  // import invert from 'invert-color';
  import GetNotified from '$lib/components/GetNotified.svelte';
  import Stars from '$lib/components/Stars.svelte';

  export let cardsOrig;
  
  var cards = cardsOrig

  let raritys = [1,2,3,4,5];
  let selectedFilers = [];
  let filterOpen = false;

  function toggleFilter() {
    filterOpen = !filterOpen;
  }

  function filterCards(cards) {
    if (browser) {
      const formData = new FormData(document.querySelector('form[name="card-filter"]'))
      selectedFilers = []
      for(var item of formData.entries()) {
        selectedFilers.push(item[1]);
      }
    }

    let results = []

    if (selectedFilers.length > 0) {
      cards.forEach(card => {
        if (selectedFilers.includes('1-star') && card.rarity === 1) {
          results.indexOf(card) === -1 && results.push(card)
        }
        if (selectedFilers.includes('2-star') && card.rarity === 2) {
          results.indexOf(card) === -1 && results.push(card)
        }
        if (selectedFilers.includes('3-star') && card.rarity === 3) {
          results.indexOf(card) === -1 && results.push(card)
        }
        if (selectedFilers.includes('4-star') && card.rarity === 4) {
          results.indexOf(card) === -1 && results.push(card)
        }
        if (selectedFilers.includes('5-star') && card.rarity === 5) {
          results.indexOf(card) === -1 && results.push(card)
        }
      })

      
      if (selectedFilers.includes('specialty')) {
        if (results.length > 0) {
          results = results.filter(result => result.specialty);
        } else {
          results = cards.filter(result => result.specialty);
        }
      }


    } else {
      results = cards;
    }
   return results;
    
  }
  
  $: {
    cards = cards;
  }
</script>

<SEO
  title={`About ${site.name} | Physical & NFT Bird Collectable Cards`}
  description={`${site.name} is a collection of artistic yet realistic bird collectable/trading cards. Created for lovers of birds, art, and sustainably thoughtful projects. Distributed in digital (NFT) and physical mediums, so that owners can enjoy ${site.name} cards any way they like.`}
  keywords={`Bird Collectable Cards, Bird Trading Cards, ${site.name}, Bird NFT's`}
  openGraph={{
    title: 'About ${site.name} | Physical & Digital Bird Collectable Cards',
    description: '${site.name} is a collection of artistic yet realistic bird collectable/trading cards. Created for lovers of birds, art, and sustainably thoughtful projects. Distributed in digital (NFT) and physical mediums, so that owners can enjoy ${site.name} cards any way they like.',
    url: '${site.address}/',
    type: 'website',
    images: [
      {
        url: `${site.address}/images/opengraph/index.webp`,
        width: 1200,
        height: 627, 
        alt: `${site.name} Collectable Cards and NFT's`
      }
     ]
  }}
  twitter={{
    site: `@${site.twitterHandle}`,
    title: `${site.name} | Physical & NFT Bird Collectable Cards`,
    description: `${site.name} is a collection of artistic yet realistic bird collectable/trading cards. Created for lovers of birds, art, and sustainably thoughtful projects. Distributed in digital (NFT) and physical mediums, so that owners can enjoy ${site.name} cards any way they like.`,
    image: `${site.address}/images/opengraph/index.webp`,
    imageAlt: `Alt text for the card!`,
  }}
  jsonLd={{
    "logo": `${site.address}/images/logo.png`,
    "@context": `http://schema.org`,
    "@type": `WebSite`,
    "name": `${site.name}`,
    "url": `${site.address}`,
  }}
/>

<div class="bg-white">
 
  <section class="bg-gray-blue">
    
    <div class="max-w-7xl mx-auto pt-10 pb-12 px-4 sm:px-6 md:px-8">
      <Breadcrumb current={"All Cards"} />
      <div class="md:flex md:justify-between items-end">
      <div class="max-w-3xl pt-8">
          <h1 class="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tighter lg:text-6xl">Browse Cards <span class="tracking-tight italic text-gray-300 text-4xl">({cardsOrig.length})</span></h1>
          <p class="mt-4 text-xl text-gray-500">Start or continue building your Birdables collection!</p>
      </div>
    </div>
    </div>
  </section>
  <!-- Filters -->
  <div class="bg-white border-b border-gray-900 border-opacity-10 sticky top-0 z-10">
    <button on:click={toggleFilter} class={`${filterOpen && 'border-b'} border-gray-900 border-opacity-10 py-4 flex justify-center w-full md:hidden transition hover:border-white hover:ring-2 hover:ring-offset-2 hover:ring-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500`}>
      {#if filterOpen}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path fill="currentColor" d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z"/></svg>
      {:else}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-6 h-6"><path fill="none" d="M0 0h24v24H0z"/><path fill="currentColor" d="M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z"/></svg>
      {/if}
    </button>
    <div class={`${filterOpen ? "flex" : "hidden md:flex"} max-w-7xl mx-auto py-4 px-4 space-x-4 items-center sm:px-6 lg:px-8`}>
      
      <h3 class="text-base font-semibold text-gray-500">
        FILTERS
        <span class="sr-only">, active</span>
      </h3>

      <div aria-hidden="true" class="hidden w-px h-5 bg-gray-blue lg:block sm:ml-4 sm:mr-2"></div>
      <!-- <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-5 h-5 text-gray-300"><path fill="none" d="M0 0h24v24H0z"/><path fill="currentColor" d="M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z"/></svg> -->
      <form name="card-filter" on:change={() => {cards = filterCards(cardsOrig)}} class="flex flex-wrap gap-2 items-center p-0 m-0">

        {#each raritys as rarity}
        <div class="">
          <div class="flex flex-wrap items-center h-full">
            <label for={`filter-rarity-${rarity}`} class="h-full cursor-pointer flex items-center space-x-2 text-sm rounded-full border border-gray-blue px-3 py-2  text-gray-600 transition hover:border-white hover:ring-2 hover:ring-offset-2 hover:ring-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
              <input id={`filter-rarity-${rarity}`} name="cards[]" value={`${rarity}-star`} type="checkbox" class="h-4 w-4 border-gray-300 rounded text-gray-600 focus:ring-gray-500">
              <span  class="flex space-x-1">
                <Stars stars={rarity} size="xs" hideEmpty={true} /><span></span>
              </span>
            </label>
          </div>
        </div>
        {/each}
        <div class="">
          <div class="flex flex-wrap items-center h-full">
            <label for="filter-specialty" class="h-full cursor-pointer flex items-center space-x-2  rounded-full border border-gray-blue px-3 py-2 text-gray-600 transition hover:border-white hover:ring-2 hover:ring-offset-2 hover:ring-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
              <input id="filter-specialty" name="cards[]" value="specialty" type="checkbox" class="h-4 w-4 border-gray-300 rounded text-gray-600 focus:ring-gray-500">
              <span  class="text-xs">
                Only available in pack
                 <!-- ({cardsOrig.filter(card => card.specialty).length}) -->
              </span>
            </label>
          </div>
        </div>
        
        <!-- <div class="mt-2 sm:mt-0">
          <div class="flex flex-wrap items-center">
            <label for="filter-legendary" class="cursor-pointer flex items-center space-x-2 font-medium rounded-full border px-4 py-2 text-base text-gray-600 transition hover:border-white hover:ring-2 hover:ring-offset-2 hover:ring-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
              <input id="filter-legendary" name="cards[]" value="legendary" type="checkbox" class="h-4 w-4 border-gray-300 rounded text-gray-600 focus:ring-gray-500">
              <span  class="">
                Legendary Cards ({cardsOrig.filter(card => card.rarity === 5).length})
              </span>
            </label>
          </div>
        </div> -->

      </form>
    </div>
  </div>

  <div class="mx-auto max-w-7xl pt-6 pb-6 px-4 lg:transform sm:px-6 md:px-8 lg:pb-12">
    <div class="space-y-6">
      <CardList cards={cards} />
    </div>
  </div>
</div>

<GetNotified />
