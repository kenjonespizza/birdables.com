<script>
import { amp, browser, dev, mode, prerendering } from '$app/env';
  import {assets} from '$app/paths'

  const checkIfShownAnimationsCookieIsTrue = () => {
    if (document.cookie.split(';').some((item) => item.includes('shown_animations=true'))) {
      return true
    }
    return false
  }

  if (browser && !checkIfShownAnimationsCookieIsTrue()) {
      document.body.classList.add("show-animation")
      document.cookie = `shown_animations=true; SameSite=None; Secure;`;
  }
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
      <div class="relative sm:rounded-2xl bg-gray-blue">

        <img class="hero-bird bird-1 absolute h-full" src="images/Sandhill_Crane.png" alt="Sandhill Crane">

        <div class="relative z-10 px-4 pt-16 sm:px-6 sm:pt-24 lg:pt-32 lg:px-8">
          <span class="text-center block text-gray-900 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">Collectable Bird Cards!
          </span>
          <p class="mt-6 max-w-lg mx-auto text-center font-light text-2xl italic text-gray-900 text-opacity-50 sm:max-w-3xl">
            Because birds are fly.
          </p>
          <div class="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
              <a sveltekit:prefetch href="birds" class="flex items-center justify-center px-4 py-3 border border-transparent text-xl font-black rounded-md bg-gray-900 text-white hover:bg-white hover:text-gray-900 sm:px-8">
                Browse Cards
              </a>
          </div>
          
          <img src="/images/cards/brown-pelican_01.png" role="presentation" alt="" class="halfImageFiller opacity-0 pointer-events-none" />
          
        </div>
      </div>
      <img class="hero-bird bird-2 absolute h-full" src="images/Loggerhead_Shrike.png" alt="Loggerhead Shrike">
    </div>

    <!-- Cards -->
    <div class="px-8 sm:px-6 lg:px-16 2xl:px-32">
      <div class={`transform -translate-y-1/2`}>
        <div class="cards relative h-full">
          <div class="home-card card card-1 card-sm">
            <div class="front w-full flex justify-center">
              <img src="/images/cards/northern-cardinal_01.png" alt="Northern Cardinal Card - Edition 01" class="object-contain drop-shadow-card">
            </div>
          </div>
          <div class="home-card card card-2 card-md">
            <div class="front w-full flex justify-center">
              <img src="/images/cards/osprey_01.png" alt="Northern Cardinal Card - Edition 01" class="object-contain drop-shadow-card">
            </div>
          </div>
          <div class="home-card card card-3 card-lg">
            <div class="front w-full flex justify-center">
              <img src="/images/cards/brown-pelican_01.png" alt="Northern Cardinal Card - Edition 01" class="object-contain drop-shadow-card">
            </div>
          </div>
          <div class="home-card card card-4 card-md">
            <div class="front w-full flex justify-center">
              <img src="/images/cards/yellow-warbler_01.png" alt="Northern Cardinal Card - Edition 01" class="object-contain drop-shadow-card">
            </div>
          </div>
          <div class="home-card card card-5 card-sm">
            <div class="front w-full flex justify-center">
              <img src="/images/cards/roseate-spoonbill_01.png" alt="Northern Cardinal Card - Edition 01" class="object-contain drop-shadow-card">
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="absolute top-[-100px] left-0 bg-white h-[calc(100%+100px)] sm:w-6 lg:w-8 "></div>
  </div>

  <!--This image is a placeholder that helps size the hero correctly. Maybe there is a better way to do this but, this works for now with no javascript.-->
  <img src="/images/cards/brown-pelican_01.png" class="halfImageFiller opacity-0 pointer-events-none"  aria-hidden="true" alt=""/>


    <div class="relative px-4 sm:px-6 lg:px-8">
      <div class="text-lg max-w-prose mx-auto">
        <h1>
          <span class="block text-base text-center text-gray-400 font-semibold tracking-wide uppercase">Explain it to me</span>
          <span class="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">What are Birdables</span>
        </h1>
        <p class="mt-8 text-xl text-gray-500 leading-8">Birdables are collectable & tradable bird cards sold in physical and digital form.</p>
      </div>
      <div class="mt-6 prose prose-gray prose-lg text-gray-500 mx-auto">
        <h2>How do these cards help birds?</h2>
        <p>Great question!  We will donate a portion of profits to a bird conservation organization like the Cornell Lab of Ornithology, eBird, etc.  More details on this are still to come, as it is still unclear the cost of running this operation.  All donation amounts & recipients will be available on this website in the future.</p>
        <p>To not be a contributor to the destruction of bird habitats, every physical card is printed on 100% recycled paper, so that no trees are cut down for the creation of the cards.  The digital cards (NFT’s) are minted and distributed on the Polygon blockchain, which validates transactions using the Proof-of-Stake consensus model, which consumes far less energy use than the Proof-of Work model.  Considerations were also made when creating this website.  Each page of the site is generated statically and built once before uploading the files to the server.  This allows for database & external API calls to be made once every few days instead of every time a user lands on the site and loads a new page.</p>
      </div>
    </div>

  

  <!--
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ]
  }
  ```
-->
<div class="relative py-16 bg-white">
  <div class="max-w-7xl mx-auto bg-gray-900 lg:bg-transparent lg:px-8">
    <div class="lg:grid lg:grid-cols-12">
      <div class="relative z-10 lg:col-start-1 lg:row-start-1 lg:col-span-4 lg:py-16 lg:bg-transparent">
        <div class="max-w-md mx-auto px-4 sm:max-w-3xl sm:px-6 lg:max-w-none lg:p-0">
          <div class="aspect-w-10 aspect-h-6 sm:aspect-w-2 sm:aspect-h-1 lg:aspect-w-1">
            <img class="object-cover object-center drop-shadow-card" src={`${assets}/images/pool-flamingo_01.png`} alt="">
          </div>
        </div>
      </div>

      <div class="relative bg-gray-900 lg:col-start-3 lg:row-start-1 lg:col-span-10 lg:rounded-3xl lg:grid lg:grid-cols-10 lg:items-center">
        
        <div class="relative max-w-md mx-auto py-12 px-4 space-y-6 sm:max-w-3xl sm:py-16 sm:px-6 lg:max-w-none lg:p-0 lg:col-start-4 lg:col-span-6">
          <h2 class="text-3xl font-extrabold text-white" id="join-heading">Want a certain bird card made?</h2>
          <p class="text-lg text-white">Very cool, and we want to make that card for you.  Producing each card is time consuming, so creating cards that spark joy is a priority.  Visit our Voting page to vote for a bird youd like to see made into a Birdables card.  Or, for a better chance of your card getting made, submit a hight resolution personal photo to assist us in bring your favorite bird or new lifer to Birdables.</p>
          <a class="block w-full py-3 px-5 text-center bg-white border border-transparent rounded-md shadow-md text-base font-medium text-gray-700 hover:bg-gray-50 sm:inline-block sm:w-auto" href="/">Explore open positions</a>
        </div>
      </div>
    </div>
  </div>
</div>

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
                  <a href="/" class="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-900 hover:bg-gray-700">
                    Learn Birdables
                  </a>
                </div>
                <div class="mt-8 inline-flex rounded-md shadow">
                  <a href="/" class="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-900 hover:bg-gray-700">
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
                  <a href="/" class="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-900 hover:bg-gray-700">
                    Vote on birds
                  </a>
                </div>
                <div class="mt-8 inline-flex rounded-md shadow">
                  <a href="/" class="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-900 hover:bg-gray-700">
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
  .cards {
    perspective: 1000px;
  }

  :global(.show-animation .home-card) {
    animation: birdFadeIn 1s ease forwards;
    opacity: 0;
    transform: rotateX(45deg);
  }

  .card {
    --cardAdder:0%;
    will-change: transform;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }
  
  .card-sm {width: calc(20% + var(--cardAdder)); z-index:1;}
  .card-md {width: calc(21.5% + var(--cardAdder)); z-index:2;}
  .card-lg {width: calc(22.5% + var(--cardAdder)); z-index:3;}
  
  .halfImageFiller {width: calc(11.25% + 40px);}
  .fullImageFiller {width: calc(22.5% + 40px);}

  .card-1 {
    left: 0;
    animation-delay: 3s;
  }
  .card-2 {
    left: 18.5%;
    animation-delay: 2.5s;
  }
  .card-3 {
    left: 38.6%;
    animation-delay: 2s;
  }
  .card-4 {
    left: 59.8%;
    animation-delay: 2.5s;
  }
  .card-5 {
    right: 0;
    animation-delay: 3s;
  }

  .hero-bird {
    bottom: 0;
  }

  :global(.show-animation .bird-1) {
    transform: translateX(-100%);
    animation: bird1InFlight 1s ease-in-out forwards 1s;
  }
  .bird-1 {
    left: 0;
    height: calc(100% + 15px);
  }

  :global(.show-animation .bird-2) {
    transform: translateX(100%);
    animation: bird2InFlight 1s ease-in-out forwards .5s;
  }
  .bird-2 {
    right: 0;
    height: calc(100% + 15px);
  }

  @keyframes birdFadeIn {
    from { opacity: 0; transform: rotateX(45deg) translateY(-50%); }
    to { opacity: 1; transform: rotateX(0) translateY(-50%); }
  }

  @keyframes bird1InFlight {
    from { transform: translateX(-100%); }
    to { transform: translateX(0); }
  }
  
  @keyframes bird2InFlight {
    from { transform: translateX(100%); }
    to { transform: translateX(0); }
  }
</style>