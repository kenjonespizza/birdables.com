<script context="module">
  import { base } from '$app/paths';
  export async function load({page, fetch}) {
    const url = `${base}/api/birds`;
    const res = await fetch(url)
    if (res) {
			return {
				props: {
					birds: await res.json()
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
  import { assets } from '$app/paths';
  // import {invertColor} from "$lib/utils"
  import invert from 'invert-color';
  import GetNotified from '$lib/components/GetNotified.svelte';

  export let birds;
</script>

<svelte:head>
  <title>Bird Cards | Birdables</title>
</svelte:head>

<div class="bg-white">
 
  <!--
    This example requires Tailwind CSS v2.0+ 
    
    This example requires some changes to your config:
    
    ```
    // tailwind.config.js
    module.exports = {
      // ...
      plugins: [
        // ...
        require('@tailwindcss/forms'),
      ]
    }
    ```
  -->
  <div class="bg-gray-800">
    <div class="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8 lg:flex lg:justify-between">
      <div class="max-w-xl">
        <h2 class="text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl">Browse Cards</h2>
        <p class="mt-5 text-xl text-gray-400">Start or continue building you Birdables collection!</p>
      </div>
    </div>
  </div>

  <div class="mx-auto py-12 px-4 max-w-7xl lg:transform lg:-translate-y-12 sm:px-6 lg:px-8 lg:pb-24 lg:pt-0">
    <div class="space-y-12">
      <ul class="gap-4 grid grid-cols-2 sm:grid sm:grid-cols-3 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:gap-x-8">
        {#each birds as bird}
          <li class="space-y-4">

            <a href={`/bird/${bird.slug}`} sveltekit:prefetch class="flex flex-col space-y-4 tranform transition duration-200 ease-in hover:-translate-y-2 hover:underline">
              <img class="object-cover filter drop-shadow-card card-img" src={`${assets}/images/cards/${bird.friendlyId}.png`} alt={bird.birdName}>
              <div class="text-lg leading-6 font-medium space-y-2">
                <h1 class="flex flex-col">
                  <span class="text-xl tracking-tight leading-none">
                    {#if bird.smallName}
                      {bird.smallName}
                    {:else}
                      <br />
                    {/if}
                  </span>
                  <span class="font-black tracking-tight leading-none text-4xl">{bird.bigName}</span>
                </h1>
                <p class="text-gray-400 italic text-lg tracking-tight leading-none">{bird.scientificName}</p>
              </div>
            </a>
            
          </li>
        {/each}
      </ul>
    </div>
  </div>
</div>

<GetNotified />

<style>
  .card {
    width: 100%;
    height: 100%;
    perspective: 1000px; /* Remove this if you don't want the 3D effect */
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
    -webkit-backface-visibility: hidden; /* Safari */
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
  }
</style>