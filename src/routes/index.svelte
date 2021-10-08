<script>
  import SEO from 'svelte-seo';
  import IntersectionObserver from "svelte-intersection-observer";
  
  import { browser } from '$app/env';
  import {assets} from '$app/paths';
  import site from '$lib/info';
  import GetNotified from '$lib/components/GetNotified.svelte';

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

  let element;
  let intersecting;
  let element2;
  let intersecting2;
  // let element3;
  // let intersecting3;
  let element4;
  let intersecting4;
</script>

<SEO
  title={`${site.name} | Physical & NFT Bird Collectable Cards`}
  description={`${site.name} is a collection of artistic yet realistic bird collectable/trading cards. Created for lovers of birds, art, and sustainably thoughtful projects. Distributed in digital (NFT) and physical mediums, so that owners can enjoy ${site.name} cards any way they like.`}
  keywords={`Bird Collectable Cards, Bird Trading Cards, ${site.name}, Bird NFT's`}
  openGraph={{
    title: `${site.name} | Physical & Digital Bird Collectable Cards`,
    description: `${site.name} is a collection of artistic yet realistic bird collectable/trading cards. Created for lovers of birds, art, and sustainably thoughtful projects. Distributed in digital (NFT) and physical mediums, so that owners can enjoy ${site.name} cards any way they like.`,
    url: `${site.address}/`,
    type: `website`,
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
    "@type": `WebSite`,
    "name": `${site.name}`,
    "url": `${site.address}`,
  }}
/>

<main class="">
  <!-- Hero card -->
  <div class="relative">
    <div class="mx-auto sm:px-6 lg:px-8">
      <div class="relative sm:rounded-2xl bg-gray-blue">

        <img class="hero-bird bird-1 absolute h-full hidden lg:block" src="/images/Sandhill_Crane.webp" alt="Sandhill Crane">

        <div class="relative z-10 px-4 pt-16 sm:px-12 sm:pt-24 lg:pt-32 lg:px-8">
          <span class="text-center sm:text-left lg:text-center block text-gray-900 text-4xl font-extrabold tracking-tight sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">Collectable Bird Cards!
          </span>
          <p class="mt-6 lg:mx-auto text-center sm:text-left lg:text-center font-light text-2xl italic text-gray-900 text-opacity-50">
            Because birds are fly.
          </p>
          <div class="mt-10 flex justify-center sm:justify-start lg:justify-center">
              <a sveltekit:prefetch href="/cards" class="flex items-center justify-center px-12 py-4 border border-transparent text-xl font-black rounded-full bg-gray-900 text-white transition hover:ring-3 hover:ring-offset-3 hover:ring-offset-gray-blue hover:ring-gray-500 focus:ring-3 focus:ring-offset-3 focus:ring-offset-gray-blue focus:ring-gray-500 sm:px-8">
                Browse All Cards
              </a>
          </div>
          
          <img src="/images/cards/brown-pelican_01.webp" role="presentation" alt="" class="halfImageFiller opacity-0 pointer-events-none" />
          
        </div>
      </div>
      <img class="hero-bird bird-2 absolute h-full hidden sm:block" src="/images/Loggerhead_Shrike.webp" alt="Loggerhead Shrike">
    </div>

    

    <div class="absolute top-[-100px] left-0 bg-white h-[calc(100%+100px)] sm:w-6 lg:w-8 "></div>
  </div>

  <!-- Cards -->
  <div class="px-4 sm:px-6 lg:px-16 2xl:px-32 relative z-20">
    <div class={`transform -translate-y-1/2`}>
      <div class="cards relative h-full">
        <a href="/bird/northern-cardinal" class="home-card card card-1 card-sm hidden sm:block transition transform">
          <div class="front w-full flex justify-center">
            <img src="/images/cards/northern-cardinal_01.webp" alt="Northern Cardinal Card - Edition 01" class="object-contain drop-shadow-card">
          </div>
        </a>
        <a href="/bird/osprey" class="home-card card card-2 card-md block transition transform">
          <div class="front w-full flex justify-center">
            <img src="/images/cards/osprey_01.webp" alt="Northern Cardinal Card - Edition 01" class="object-contain drop-shadow-card">
          </div>
        </a>
        <a href="/bird/brown-pelican" class="home-card card card-3 card-lg block transition transform">
          <div class="front w-full flex justify-center">
            <img src="/images/cards/brown-pelican_01.webp" alt="Northern Cardinal Card - Edition 01" class="object-contain drop-shadow-card">
          </div>
        </a>
        <a href="/bird/yellow-warbler" class="home-card card card-4 card-md block transition transform">
          <div class="front w-full flex justify-center">
            <img src="/images/cards/yellow-warbler_01.webp" alt="Northern Cardinal Card - Edition 01" class="object-contain drop-shadow-card">
          </div>
        </a>
        <a href="/bird/roseate-spoonbill" class="home-card card card-5 card-sm hidden sm:block transition transform">
          <div class="front w-full flex justify-center">
            <img src="/images/cards/roseate-spoonbill_01.webp" alt="Northern Cardinal Card - Edition 01" class="object-contain drop-shadow-card">
          </div>
        </a>
      </div>
    </div>
  </div>

  <!--This image is a placeholder that helps size the hero correctly. Maybe there is a better way to do this but, this works for now with no javascript.-->
  <img src="/images/cards/brown-pelican_01.webp" class="halfImageFiller opacity-0 pointer-events-none"  aria-hidden="true" alt=""/>


  <!-- <div class="relative px-4 sm:px-6 lg:px-8">
    <div class="mt-6 prose prose-gray prose-lg text-gray-500 mx-auto">
      <h2>How do these cards help birds?</h2>
      <p>Great question! We donate a portion of profits to a bird conservation organization like the Cornell Lab of Ornithology, eBird, etc. More details on this are still to come, as it is still unclear the cost of running this operation. All donation amounts & recipients will be available on this website, here, in the future.</p>
    </div>
  </div> -->
  <div class="px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
    <div class="max-w-max lg:max-w-7xl mx-auto">
      <div class="relative">
       
        <div class="relative md:bg-white md:p-6 space-y-10 lg:space-y-0">
          <div class="grid gap-10 md:grid-cols-2 items-center">    
            <div>
              <div class="prose prose-gray prose-lg text-gray-500 md:max-w-none">
                <h2 class="text-center sm:text-left">What even is Birdables?</h2>
                <p>It's a collection of artistic yet realistic bird collectable/trading cards. Created for lovers of birds, art, and sustainably thoughtful projects. Distributed in digital and physical mediums, so that owners can enjoy Birdables cards any way they like.</p>
              </div>
              <div class="flex space-x-4 mt-8">
                <a href="/cards" sveltekit:prefetch class="block w-full py-4 px-6 text-center bg-gray-900 border border-transparent rounded-full shadow-lg text-lg font-semibold text-white transition sm:inline-block sm:w-auto hover:ring-3 hover:ring-offset-3 hover:ring-offset-gray-blue hover:ring-gray-500 focus:ring-3 focus:ring-offset-3 focus:ring-offset-gray-blue focus:ring-gray-500">
                  See the cards
                </a>
              </div>
            </div>
            <div>
              <IntersectionObserver {element} bind:intersecting threshold={0.5} once />
              <img bind:this={element} src={`${assets}/images/roseate-spoonbill-cutout.webp`} alt="Roseate Spoonbill" class={`${intersecting ? "motion-safe:opacity-100 motion-safe:translate-x-0" : "motion-safe:opacity-0 motion-safe:translate-x-1/3"} transform transition duration-1000 w-full h-full object-center object-contain group-hover:opacity-75`}>
            </div>
          </div>

          <div class="lg:py-10">
            <GetNotified />
          </div>

          <div class="grid gap-10 md:grid-cols-2 md:items-center md:grid-flow-row-dense">
            <div class="md:col-span-1 md:col-start-2">
              <div class="prose prose-gray prose-lg text-gray-500 md:max-w-none">
                <h2 class="text-center sm:text-left">How do these cards help birds?</h2>
                <p>Great question! <span class="font-black">We donate a portion of profits</span> to a bird conservation organization like the <a href="https://www.birds.cornell.edu/" target="_blank" rel="noopener" noreferrer>Cornell Lab of Ornithology</a>, <a href="https://ebird.org/" target="_blank" rel="noopener" noreferrer>eBird</a>, <a href="https://www.audubon.org/" target="_blank" rel="noopener" noreferrer>Audubon</a>, etc. More details on this are still to come, as it is still unclear the cost of running this operation. All donation amounts & recipients will be available on this website, here, in the future.</p>
                
                <p><span class="font-black text-xl text-gray-900">But paper comes from trees...</span><br />To make sure Birdables is not contributing to the destruction of bird habitats, <span class="font-black">100% recycled paper</span> is used for all physical cards. No trees are cut down for the creation of the cards.</p>
              </div>
              <div class="flex space-x-4 mt-8">
                  <a href="/about" sveltekit:prefetch class="block w-full py-4 px-6 text-center bg-gray-900 border border-transparent rounded-full shadow-lg text-lg font-semibold text-white transition hover:ring-3 hover:ring-offset-3 hover:ring-offset-gray-blue hover:ring-gray-500 focus:ring-3 focus:ring-offset-3 focus:ring-offset-gray-blue focus:ring-gray-500 sm:inline-block sm:w-auto">
                    Learn more about Birdables
                  </a>
              </div>
            </div>
            <div class="md:col-span-1 md:col-start-1 transform xl:-translate-y-20">
              <IntersectionObserver element={element2} bind:intersecting={intersecting2} threshold={0.5} once />
              <img bind:this={element2} src={`${assets}/images/osprey-cutout.webp`} alt="Osprey" class={`${intersecting2 ? "motion-safe:opacity-100 motion-safe:translate-x-0" : "motion-safe:opacity-0 motion-safe:-translate-x-1/3"} transform transition duration-1000 w-full h-full object-center object-contain group-hover:opacity-75`}>
            </div>
          </div>
          
          <!-- <div class="grid gap-10 md:grid-cols-2 md:items-center"> 
            <div>
              <div class="prose prose-gray prose-lg text-gray-500 md:max-w-none">
                <h2>I heard NFT's & crypto required large amounts of energy...</h2>
                <p>The Birdables NFT's (digital cards) are minted and distributed on the Polygon blockchain, which validates transactions using the Proof-of-Stake consensus model.  This model <span class="font-black">consumes far less energy</span> than the Proof-of Work model.</p>
                  
                <p>Energy concise considerations were also made when creating this website. Each page is generated one time before uploading the files to the server. This allows for database & external API calls to be made once every "build" instead of on every page load by every user.</p>
              </div>
              <div class="flex space-x-4 mt-8">
                <a href="/about" sveltekit:prefetch class="block w-full py-4 px-6 text-center bg-gray-900 border border-transparent rounded-full shadow-lg text-lg font-semibold text-white transition hover:ring-3 hover:ring-offset-3 hover:ring-offset-gray-blue hover:ring-gray-500 focus:ring-3 focus:ring-offset-3 focus:ring-offset-gray-blue focus:ring-gray-500 sm:inline-block sm:w-auto">
                  Learn More
                </a>
              </div>
            </div>
            
            <div>
              <IntersectionObserver element={element3} bind:intersecting={intersecting3} threshold={0.5} once />
              <img bind:this={element3} src={`${assets}/images/brown-pelican-cutout.png`} alt="Brown Pelican" class={`${intersecting3 ? "motion-safe:opacity-100 motion-safe:translate-x-0" : "opacity-0 translate-x-1/3"} transform transition duration-1000 w-full h-full object-center object-contain group-hover:opacity-75 lg:max-h-[calc(100vh-200px)]`}>
            </div>
          </div> -->
        </div>
      </div>
    </div>
  </div>

  <div class="relative py-16 bg-white">
    <div class="max-w-7xl mx-auto md:px-8">
      <div class="grid md:grid-cols-12">
        
        <div class="relative z-10 mt-12 md:mt-0 md:col-start-1 md:row-start-1 md:col-span-4 md:py-16 md:bg-transparent">
          <div class="max-w-md mx-auto px-4 sm:max-w-3xl sm:px-6 md:max-w-none md:p-0">
            <div class="">
              <IntersectionObserver element={element4} bind:intersecting={intersecting4} threshold={0.5} once />
              <img bind:this={element4} class={`${intersecting4 ? "motion-safe:opacity-100 motion-safe:cale-100" : "motion-safe:opacity-0 motion-safe:scale-90"} transform transition duration-1000 object-cover object-center drop-shadow-card`} src={`${assets}/images/pool-flamingo_01.webp`} alt="">
            </div>
          </div>
        </div>

        <div class="relative row-start-1 bg-gray-blue md:col-start-3 bg-cover md:row-start-1 md:col-span-10 md:rounded-3xl md:grid md:grid-cols-10 md:items-center" style={`background-image: url(${assets}/images/pool-flamingo-bg.jpg);`}>
          <div class="relative max-w-md mx-auto py-12 px-4 space-y-6 sm:max-w-3xl sm:py-16 sm:px-6 md:max-w-none md:p-0 md:col-start-4 md:col-span-6">
            <h2 class="text-3xl font-extrabold text-center sm:text-left">Suggest a bird!</h2>
            <p class="text-lg text-gray-500">Producing each card is time-consuming, so creating cards that spark joy is a priority.  Suggest birds you would like to see made into a Birdables card.</p>
            <a class="opacity-70 cursor-not-allowed block w-full py-4 px-6 text-center bg-gray-900 border border-transparent rounded-full shadow-lg text-lg font-semibold text-white transition hover:ring-3 hover:ring-offset-3 hover:ring-offset-gray-blue hover:ring-gray-500 focus:ring-3 focus:ring-offset-3 focus:ring-offset-gray-blue focus:ring-gray-500 sm:inline-block sm:w-auto" href="/">Coming soon: Suggest a bird</a>
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

  @media (prefers-reduced-motion) {
    :global(.show-animation .home-card) {
      animation: birdFadeIn 0s ease forwards 0;
    }
  }

  .card {
    --cardAdder:0%;
    will-change: transform;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    transform-origin: center;
  }

  .card:hover {
    transform: translateY(-50%) scale(1.05);
    z-index: 4;
  }

  @media (prefers-reduced-motion) {
    .card:hover {
      transform: translateY(-50%) scale(1);
      z-index: 4;
    }
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
  @media (prefers-reduced-motion) {
    :global(.show-animation .bird-1) {
      animation: bird1InFlight 0s ease-in-out forwards 0s;
    } 
  }
  .bird-1 {
    left: 0;
    height: calc(100% + 15px);
  }

  :global(.show-animation .bird-2) {
    transform: translateX(100%);
    animation: bird2InFlight 1s ease-in-out forwards .5s;
  }
  @media (prefers-reduced-motion) {
    :global(.show-animation .bird-2) {
      animation: bird2InFlight 0s ease-in-out forwards 0s;
    } 
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