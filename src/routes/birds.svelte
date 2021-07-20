<script context="module">
  import { base } from '$app/paths';
  export async function load({page, fetch}) {
    const url = `${base}/api/birds`;
    const res = await fetch(url)

    if (res) {
    // console.log('res:', res)
			return {
				props: {
					birds: await res.json()
					// birds: {test: 'yes'}
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
  import {invertColor} from "$lib/utils"
  export let birds;
  console.log('birds:', birds)

  function SetCardHeight() {
    const cardImg = window.document.querySelector(".card-img");
    const cards = window.document.querySelectorAll(".card");
    
    cards.forEach(card => {
      card.style.height = `auto`;
      card.style.width = `auto`;
    })

    const cardImgWidth = cardImg.offsetWidth;
    const cardImgHeight = cardImg.offsetHeight;

    cards.forEach(card => {
      card.style.height = `${cardImgHeight}px`;
      card.style.width = `${cardImgWidth}px`;
    })
  }

  // function mouseOverCard(node) {
  //   node.ontouchstart = () => {
  //     node.querySelector('.card-inner').style.cssText = "transform: rotateY(180deg);";
  //   };
  //   node.ontouchend = () => {
  //     node.querySelector('.card-inner').style.cssText = "transform: rotateY(0deg);";
  //   };
  // }
</script>

<svelte:window on:resize={SetCardHeight} />

<div class="bg-white" use:SetCardHeight>
  <div class="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
    <div class="space-y-12">
      <div class="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
        <h2 class="text-2xl font-extrabold tracking-tight sm:text-6xl">Bird Cards</h2>
        <p class="text-base text-text">Odio nisi, lectus dis nulla. Ultrices maecenas vitae rutrum dolor ultricies donec risus sodales. Tempus quis et.</p>
      </div>
      <ul class="gap-4 grid grid-cols-2 sm:grid sm:grid-cols-3 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-4 lg:gap-x-8">
        {#each birds as bird}
          <li class="space-y-4">

            <!-- Card -->
            <div class="card">
              <div class="card-inner">
                <div class="card-front">
                  <a sveltekit:prefetch href={`/bird/${bird.slug}`} class="block">
                    <img class="object-cover filter drop-shadow-card card-img" src={`images/cards/${bird.friendlyId}.png`} alt="">
                  </a>
                </div>

                <div class="card-back" style={`--bird-color: #${bird.accentColor}; --text-color: ${invertColor(bird.accentColor, 'bw')}`}>
                  <a sveltekit:prefetch href={`/bird/${bird.slug}`} class="w-full h-full filter drop-shadow-card flex items-center justify-center">
                    <h3 class="flex flex-col space-y-0">
                      <span class="text-2xl">{bird.smallName || ''}</span>
                      <span class="font-black text-4xl">{bird.bigName}</span>
                    </h3>
                  </a>
                </div>
              </div>
            </div>

            <!-- Under Card -->
            <!-- <div class="space-y-2">
                <h3 class="flex flex-col space-y-0">
                  <span class="text-2xl">{bird.smallName || ''}<br /></span>
                  <span class="font-black text-4xl">{bird.bigName}</span>
                </h3>
            </div> -->
            
          </li>
        {/each}
      </ul>
    </div>
  </div>
</div>

<style>
  .card {
    width: 100%;
    height: 100%;
    perspective: 1000px; /* Remove this if you don't want the 3D effect */
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
  }

  .card-back > a {
    background-color: var(--bird-color);
    border-radius: 10px;
    color: var(--text-color);
  }
</style>