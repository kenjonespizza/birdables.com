<script context="module">
  // export async function load({page, fetch}) {
  //   const url = "api/birds";
  //   const res = await fetch(url)

  //   if (res) {
	// 		return {
	// 			props: {
	// 				// birds: {test: 'yes'}
	// 			}
	// 		};
	// 	}

  //   return {
	// 		status: res.status,
	// 		error: new Error().message,
	// 	};
  // }
</script>

<script>
  function setHeights() {
    // const bigImg = window.document.querySelector(".card-lg").offsetHeight
    // const divToSet = window.document.querySelector(".set-me-dynamically")
    // const divToSetFull = window.document.querySelector(".set-me-dynamically-full")

    // divToSet.style.height = `${(bigImg/2) + 60}px`;
    // divToSetFull.style.height = `${(bigImg/2) + 60}px`;
  };
</script>

<svelte:head>
  <title>Birdables | Physical & NFT Bird Trading Cards</title>
</svelte:head>
<!-- <div class="bg-white">
  <div class="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
    <div class="space-y-12">
      <div class="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
        <h2 class="text-3xl font-extrabold tracking-tight sm:text-4xl">Our Team</h2>
        <p class="text-xl text-gray-500">Odio nisi, lectus dis nulla. Ultrices maecenas vitae rutrum dolor ultricies donec risus sodales. Tempus quis et.</p>
      </div>
      <ul class="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8">
        {#each birds as bird}
          <li>
            <a class="space-y-4" href={`/bird/${bird.slug}`}>
              <img class="object-cover" src={`images//cards/${bird.friendlyId}.png`} alt="">

              <div class="space-y-2">
                <div class="text-lg leading-6 font-medium space-y-1">
                </div>
              </div>
            </a>
          </li>
        {/each}
      </ul>
    </div>
  </div>
</div> -->

<main class="">
  <!-- Hero card -->
  <div class="relative">
    <div class="mx-auto sm:px-6 lg:px-8">
      <div class="relative sm:rounded-2xl sm:overflow-hidden bg-gray-blue">

        <div class="relative px-4 pt-16 sm:px-6 sm:pt-24 lg:pt-32 lg:px-8">
          <span class="text-center block text-gray-900 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">Collectable Bird Cards!
          </span>
          <p class="mt-6 max-w-lg mx-auto text-center font-light text-xl italic text-gray-900 text-opacity-50 sm:max-w-3xl">
            Because birds are fly
          </p>
          <div class="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
              <a sveltekit:prefetch href="birds" class="flex items-center justify-center px-4 py-3 border border-transparent text-xl font-black rounded-md shadow-sm text-gray-900 bg-white hover:bg-gray-900 hover:text-white sm:px-8">
                Browse Cards
              </a>
          </div>
          
          <img src="/images/cards/brown-pelican_01.png" class="halfImageFiller opacity-0 pointer-events-none" />

        </div>
      </div>
    </div>

    <!-- Cards -->
    <div class="px-8 sm:px-6 lg:px-16 2xl:px-32">
      <div class={`transform -translate-y-1/2`}>
        <div class="cards relative h-full">
          <div class="card card-1 card-sm">
            <div class="front w-full shadow-xl">
              <img src="/images/cards/northern-cardinal_01.png" alt="Northern Cardinal Card - Edition 01" class="shadow-md object-contain">
            </div>
          </div>
          <div class="card card-2 card-md">
            <div class="front w-full shadow-xl">
              <img src="/images/cards/osprey_01.png" alt="Northern Cardinal Card - Edition 01" class="shadow-md object-contain">
            </div>
          </div>
          <div class="card card-3 card-lg">
            <div class="front w-full shadow-xl">
              <img src="/images/cards/brown-pelican_01.png" alt="Northern Cardinal Card - Edition 01" class="shadow-md object-contain">
            </div>
          </div>
          <div class="card card-4 card-md">
            <div class="front w-full shadow-xl">
              <img src="/images/cards/yellow-warbler_01.png" alt="Northern Cardinal Card - Edition 01" class="shadow-md object-contain">
            </div>
          </div>
          <div class="card card-5 card-sm">
            <div class="front w-full shadow-xl">
              <img src="/images/cards/roseate-spoonbill_01.png" alt="Northern Cardinal Card - Edition 01" class="shadow-md object-contain">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <img src="/images/cards/brown-pelican_01.png" class="halfImageFiller opacity-0 pointer-events-none" />

  <!-- more -->
  <div class="pb-16 xl:pb-36 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
    <div class="max-w-max lg:max-w-7xl mx-auto">
      <div class="relative z-10 mb-8 md:mb-2 md:px-6">
        
      </div>
      <div class="relative">
       
        <div class="relative md:bg-white md:p-6">
          <div class="lg:grid lg:grid-cols-2 lg:gap-6">
            <div>
              <div class="prose prose-gray prose-lg text-gray-500 lg:max-w-none">
                <h2>How do these cards help birds?</h2>
                <p>Great question!   we will be donating a portion of profits to a bird conservation organization like the Cornell Lab of Ornithology, eBird, etc.  More detail on this to come because it’s still unclear the cost of running this operation.  All donation amounts & recipiants will be available on this site.</p>
                <p>Also, every physical card is printed on 100% recycled paper., so that no trees are harvested.  The digital cards (NFT’s) are minted and distributed on the Polygon blockchain, which validates transactions using the Proof-of-Stake consensus model, which far less energy use than the Proof-of Work model.</p>
              </div>
              <div class="flex space-x-4">
                <div class="mt-8 inline-flex rounded-md shadow">
                  <a href="#" class="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-900 hover:bg-gray-700">
                    Learn Birdables
                  </a>
                </div>
                <div class="mt-8 inline-flex rounded-md shadow">
                  <a href="#" class="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-900 hover:bg-gray-700">
                    NFT... Say what now?
                  </a>
                </div>
              </div>
            </div>
            <div>
              <div class="prose prose-gray prose-lg text-gray-500 lg:max-w-none">
                <h2>Want a certain bird card?</h2>
                <p>Great question!   we will be donating a portion of profits to a bird conservation organization like the Cornell Lab of Ornithology, eBird, etc.  More detail on this to come because it’s still unclear the cost of running this operation.  All donation amounts & recipiants will be available on this site.</p>
                <p>Also, every physical card is printed on 100% recycled paper., so that no trees are harvested.  The digital cards (NFT’s) are minted and distributed on the Polygon blockchain, which validates transactions using the Proof-of-Stake consensus model, which far less energy use than the Proof-of Work model.</p>
              </div>
              <div class="flex space-x-4">
                <div class="mt-8 inline-flex rounded-md shadow">
                  <a href="#" class="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-900 hover:bg-gray-700">
                    Vote on birds
                  </a>
                </div>
                <div class="mt-8 inline-flex rounded-md shadow">
                  <a href="#" class="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-900 hover:bg-gray-700">
                    Submit a bird
                  </a>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  </div>

</main>

<style lang="postcss">
    
   .card {
    --cardAdder:0%;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
   }
   
   .card-sm {width: calc(20% + var(--cardAdder)); z-index:1;}
   .card-md {width: calc(21.5% + var(--cardAdder)); z-index:2;}
   .card-lg {width: calc(22.5% + var(--cardAdder)); z-index:3;}
   
   .halfImageFiller {width: calc(11.25% + 40px);}
   .fullImageFiller {width: calc(22.5% + 40px);}

   .card-1 {left: 0}
   .card-2 {left: 18.5%}
   .card-3 {left: 38.6%}
   .card-4 {left: 59.8%}
   .card-5 {right: 0}
</style>