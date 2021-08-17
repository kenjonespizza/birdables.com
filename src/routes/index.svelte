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

        <img class="hero-bird bird-1 absolute h-full hidden lg:block" src="images/Sandhill_Crane.png" alt="Sandhill Crane">

        <div class="relative z-10 px-4 pt-16 sm:px-12 sm:pt-24 lg:pt-32 lg:px-8">
          <span class="text-center sm:text-left lg:text-center block text-gray-900 text-4xl font-extrabold tracking-tight sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">Collectable Bird Cards!
          </span>
          <p class="mt-6 lg:mx-auto text-center sm:text-left lg:text-center font-light text-2xl italic text-gray-900 text-opacity-50">
            Because birds are fly.
          </p>
          <div class="mt-10 flex justify-center sm:justify-start lg:justify-center">
              <a sveltekit:prefetch href="birds" class="flex items-center justify-center px-12 py-4 border border-transparent text-xl font-black rounded-full bg-gray-900 text-white transition hover:ring-3 hover:ring-offset-3 hover:ring-offset-gray-blue hover:ring-gray-500 focus:ring-3 focus:ring-offset-3 focus:ring-offset-gray-blue focus:ring-gray-500 sm:px-8">
                Browse Cards
              </a>
          </div>
          
          <img src="/images/cards/brown-pelican_01.png" role="presentation" alt="" class="halfImageFiller opacity-0 pointer-events-none" />
          
        </div>
      </div>
      <img class="hero-bird bird-2 absolute h-full hidden sm:block" src="images/Loggerhead_Shrike.png" alt="Loggerhead Shrike">
    </div>

    <!-- Cards -->
    <div class="px-8 sm:px-6 lg:px-16 2xl:px-32">
      <div class={`transform -translate-y-1/2`}>
        <div class="cards relative h-full">
          <div class="home-card card card-1 card-sm hidden sm:block">
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
          <div class="home-card card card-5 card-sm hidden sm:block">
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


  <!-- <div class="relative px-4 sm:px-6 lg:px-8">
    <div class="mt-6 prose prose-gray prose-lg text-gray-500 mx-auto">
      <h2>How do these cards help birds?</h2>
      <p>Great question! We donate a portion of profits to a bird conservation organization like the Cornell Lab of Ornithology, eBird, etc. More details on this are still to come, as it is still unclear the cost of running this operation. All donation amounts & recipients will be available on this website, here, in the future.</p>
    </div>
  </div> -->
  <div class="pb-16 xl:pb-36 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
    <div class="max-w-max lg:max-w-7xl mx-auto">
      <div class="relative">
       
        <div class="relative md:bg-white md:p-6 space-y-10 lg:space-y-0">
          <div class="md:grid md:grid-cols-2 md:gap-10 items-center">    
            <div>
              <div class="prose prose-gray prose-lg text-gray-500 md:max-w-none">
                <h2>How do these cards help birds?</h2>
                <p>Great question! <span class="font-black">We donate a portion of profits</span> to a bird conservation organization like the Cornell Lab of Ornithology, eBird, etc. More details on this are still to come, as it is still unclear the cost of running this operation. All donation amounts & recipients will be available on this website, here, in the future.</p>
              </div>
            </div>
            <div>
                <img src={`${assets}/images/roseate-spoonbill-cutout.png`} alt="Grafitti that says Recycling And Giving Back" class="w-full h-full object-center object-contain group-hover:opacity-75">
            </div>
          </div>

          <div class="md:grid md:grid-cols-2 md:gap-10 md:items-center md:grid-flow-row-dense">
            <div class="md:col-span-1 md:col-start-2">
              <div class="prose prose-gray prose-lg text-gray-500 md:max-w-none">
                <h2>But paper comes from trees...</h2>
                <p>To make sure Birdables is not contributing to the destruction of bird habitats, every physical card is printed on <span class="font-black">100% recycled paper</span>, so that no trees are cut down for the creation of the cards.</p>
              </div>
            </div>
            <div class="md:col-span-1 md:col-start-1 transform lg:-translate-y-20">
                <img src={`${assets}/images/osprey-cutout.png`} alt="Owl in a tree" class="w-full h-full object-center object-contain group-hover:opacity-75">
            </div>
          </div>
          
          <div class="md:grid md:grid-cols-2 md:gap-10 md:items-center"> 
            <div>
              <div class="prose prose-gray prose-lg text-gray-500 md:max-w-none">
                <h2>I heard NFT's & crypto required large amounts of energy...</h2>
                <p>The Birdables NFT's (digital cards) are minted and distributed on the Polygon blockchain, which validates transactions using the Proof-of-Stake consensus model.  This model <span class="font-black">consumes far less energy</span> than the Proof-of Work model.</p>
                  
                <p>Energy concise considerations were also made when creating this website. Each page is generated one time before uploading the files to the server. This allows for database & external API calls to be made once every "build" instead of on every page load by every user.</p>
              </div>
            </div>
            <div>
                <img src={`${assets}/images/brown-pelican-cutout.png`} alt="Bird flying with windmills in the background" class="w-full h-full object-center object-contain group-hover:opacity-75 lg:max-h-[calc(100vh-200px)]">
            </div>
          </div>

          <div class="flex justify-center space-x-4">
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
      </div>
    </div>
  </div>


  <div class="relative py-16 bg-white">
    <div class="max-w-7xl mx-auto bg-gray-blue lg:bg-transparent lg:px-8">
      <div class="lg:grid lg:grid-cols-12">
        <div class="relative z-10 lg:col-start-1 lg:row-start-1 lg:col-span-4 lg:py-16 lg:bg-transparent">
          <div class="max-w-md mx-auto px-4 sm:max-w-3xl sm:px-6 lg:max-w-none lg:p-0">
            <div class="">
              <img class="object-cover object-center drop-shadow-card" src={`${assets}/images/pool-flamingo_01.png`} alt="">
            </div>
          </div>
        </div>

        <div class="relative bg-gray-blue lg:col-start-3 lg:row-start-1 lg:col-span-10 lg:rounded-3xl lg:grid lg:grid-cols-10 lg:items-center">
          
          <div class="relative max-w-md mx-auto py-12 px-4 space-y-6 sm:max-w-3xl sm:py-16 sm:px-6 lg:max-w-none lg:p-0 lg:col-start-4 lg:col-span-6">
            <h2 class="text-3xl font-extrabold" id="join-heading">Suggest a bird!</h2>
            <p class="text-lg text-gray-500">Producing each card is time consuming, so creating cards that spark joy is a priority.  Suggest birds you would like to see made into a Birdables card.</p>
            <a class="block w-full py-4 px-6 text-center bg-gray-900 border border-transparent rounded-full shadow-lg text-lg font-semibold text-white transition hover:ring-2 hover:ring-offset-2 hover:ring-offset-gray-blue hover:ring-gray-500 focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-blue focus:ring-gray-500 sm:inline-block sm:w-auto" href="/">Suggest a Bird</a>
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

  @media (max-width: 640px) {
    .card-md {width: calc(41.5% + var(--cardAdder)); z-index:2;}
    .card-lg {width: calc(42.5% + var(--cardAdder)); z-index:3;}
  }
  
  .halfImageFiller {width: calc(11.25% + 40px);}
  .fullImageFiller {width: calc(22.5% + 40px);}

  @media (max-width: 640px) {
    .halfImageFiller {width: calc(21.25% + 40px);}
    .fullImageFiller {width: calc(32.5% + 40px);}
  }

  .card-1 {
    left: 0;
    animation-delay: 3s;
  }
  .card-2 {
    left: 18.5%;
    animation-delay: 2.5s;
  }
  @media (max-width: 640px) {
    .card-2 {
      left: 0%;
      animation-delay: 1s;
    }
  }
  .card-3 {
    left: 38.6%;
    animation-delay: 2s;
  }
  @media (max-width: 640px) {
    .card-3 {
      left: 28.55%;
      animation-delay: .5s;
    }
  }
  .card-4 {
    left: 59.8%;
    animation-delay: 2.5s;
  }
  @media (max-width: 640px) {
    .card-4 {
      animation-delay: 1s;
    }
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