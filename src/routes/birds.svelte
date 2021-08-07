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

  <div class="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
    <div class="space-y-12">
      <ul class="gap-4 grid grid-cols-2 sm:grid sm:grid-cols-3 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-4 lg:gap-x-8">
        {#each birds as bird}
          <li class="space-y-4">

            <a href={`/bird/${bird.slug}`} class="relative block">
              <img class="object-cover filter drop-shadow-card card-img opacity-0 pointer-events-none" src={`${assets}/images/cards/${bird.friendlyId}.png`} alt="">
              <div class="card absolute inset-0">
                <div class="card-inner">
                  <div class="card-front">
                    <div class="block">
                      <img class="object-cover filter drop-shadow-card card-img" src={`${assets}/images/cards/${bird.friendlyId}.png`} alt="">
                    </div>
                  </div>
                    <div class="card-back" style={`--bird-color: #${bird.accentColor}; --text-color: 
                    ${invert(bird.accentColor, {
                      black: '#11191E', 
                      white: '#ffffff', 
                      threshold: .42
                    })}
                  `}>
                    <div class="block relative">
                      <img class="object-cover filter drop-shadow-card card-img" src={`${assets}/images/cards/card-back-${bird.rarity === 5 ? 'dark' : 'light'}.png`} alt="">
                      <div class="absolute top-0 left-0 py-2 px-4 transfrom rounded-tl-lg rounded-br-lg filter drop-shadow flex items-center justify-center" style={`background-color: #${bird.accentColor};`}>
                        <div class="text-lg" style={`color: #${invert(bird.accentColor, {
                          black: '#11191E', 
                          white: '#ffffff', 
                          threshold: .42
                        })}`}>
                          <span class="">{bird.smallName ? bird.smallName+' ' : ''}</span>
                          <span class="font-black">{bird.bigName}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
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