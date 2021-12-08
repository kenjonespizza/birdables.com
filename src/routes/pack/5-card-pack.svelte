<script>
  import SEO from "svelte-seo";

  import { getStores, navigating, page, session } from '$app/stores';
  import { assets } from '$app/paths';
  import site from '$lib/info'
  import Breadcrumb from '$lib/components/Breadcrumb.svelte';
  import Rarity from '$lib/components/Rarity.svelte';
  import Share from '$lib/components/Share.svelte'
  import ExternalLink from "$lib/components/ExternalLink.svelte"

  import Etsy from "$lib/svgs/Etsy.svelte"

  export let isModalOpen;

  let pageUrl = `${site.address}${$page.path}`;
  let comingSoonOveride = false;

  function toggleModal() {
    isModalOpen = !isModalOpen;
  }

  function handleKeydown(e) {
    if (isModalOpen && e.key === "Escape") {
      toggleModal();
    }
  }
</script>

<SEO
  title={`5 Card Pack | ${site.name}`}
  description={`5 Card Pack of Birdables cards.`}
  keywords={`5 Card Pack, Bird Collectable Cards, Bird Trading Cards, ${site.name}, Bird NFTs`}
  openGraph={{
    title: `5 Card Pack | ${site.name}`,
    url: pageUrl,
    type: 'product',
    images: [
      {
        url: `${site.address}/images/opengraph/5-card-pack.webp`,
        width: 1200,
        height: 627, 
        alt: `5 Card Pack of Birdables cards`
      }
     ]
  }}
  twitter={{
    site: `@${site.twitterHandle}`,
    title: `5 Card Pack | ${site.name}`,
    image: `${site.address}/images/opengraph/5-card-pack.webp`,
    imageAlt: `5 Card Pack`,
  }}
  jsonLd={{
    "@type": "product",
    "name": `5 Card Pack`,
    "category": "Cards",
    "image": `${site.address}/images/cards/5-card-pack.webp`,
    "description": ``,
    "logo": "http://www.birdables.com/images/logo.svg"
  }}
/>

<svelte:window on:keydown={handleKeydown}/>

<div class="bg-gray-blue">
  
  <div class="mx-auto pt-10 pb-16 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
    <Breadcrumb steps={[{title:"All Cards", link:"/cards"}]} current="5 Card Pack" />
    <div class="flex-col-reverse md:grid md:grid-rows-1 md:grid-cols-8 md:gap-x-8 md:gap-y-10 md:mt-10 xl:gap-x-16">
      <div class="md:row-end-1 md:col-span-4 space-y-4">
        <img src={`${assets}/images/packs/5-card-pack.webp`} alt={`5 Card Pack`} class="object-center object-cover drop-shadow-card hidden md:block">
        <button on:click={toggleModal} class="md:row-end-1 md:col-span-4 rounded-3xl transition hover:ring-3 hover:ring-offset-3 hover:ring-offset-gray-blue hover:ring-gray-900 focus:outline-none focus:ring-3 focus:ring-offset-3 focus:ring-offset-gray-blue focus:ring-gray-900">
          <img src={`${assets}/images/cards-on-grass.webp`} alt={`Cards on grass`} class="rounded-3xl object-center object-cover drop-shadow-card hidden md:block">
        </button>
      </div>
      <div class="max-w-2xl mx-auto md:max-w-none md:mt-0 md:row-end-2 md:row-span-2 md:col-span-4">
        

        <div class="rounded-3xl bg-white p-6 mt-8 drop-shadow-card">
          <div class="flex flex-col-reverse">
            <h1 class="flex flex-col mt-6 md:mt-0">
              <span class="text-3xl lg:text-5xl font-black tracking-tighter leading-none ">5 Card Pack</span>
            </h1>
            <div class="flex flex-col space-y-4">
              <img src={`${assets}/images/packs/5-card-pack.webp`} alt={`5 Card Pack`} class="object-center object-cover drop-shadow-card md:hidden mt-2">
              <button on:click={toggleModal} class="md:row-end-1 md:col-span-4 rounded-3xl transition hover:ring-3 hover:ring-offset-3 hover:ring-gray-900 focus:outline-none focus:ring-3 focus:ring-offset-3 focus:ring-gray-900">
                <img src={`${assets}/images/cards-on-grass.webp`} alt={`Cards on grass`} class="rounded-3xl object-center object-cover drop-shadow-card md:hidden" />
                <span class="sr-only">Open full-size image</span> 
              </button>
            </div>
          </div>
  
          <div class="mt-6 grid grid-cols-1 gap-x-6 gap-y-4">
            {#if !comingSoonOveride}
            <a href="https://www.etsy.com/listing/1107948145/birdables-5-card-pack" target="_blank" rel="noopener" noreferrer class="w-full bg-gray-900 border border-transparent rounded-full py-4 px-8 flex flex-wrap items-center justify-center text-sm lg:text-base font-semibold text-white transition hover:ring-3 hover:ring-offset-3 hover:ring-gray-500 focus:outline-none focus:ring-3 focus:ring-offset-3 focus:ring-gray-500">
  
                <span>Available on</span>
                <Etsy class="h-6 transform translate-y-0.5 ml-1 text-white" />
              </a>
            {/if}
            {#if comingSoonOveride}
              <button type="button" disabled class="w-full bg-gray-900 cursor-not-allowed opacity-70 border border-transparent rounded-full py-4 px-8 flex flex-wrap items-center justify-center text-sm lg:text-base font-semibold text-white transition hover:ring-3 hover:ring-offset-3 hover:ring-offset-gray-blue hover:ring-gray-500 focus:outline-none focus:ring-3 focus:ring-offset-3 focus:ring-gray-500">
              <span>Coming Soon to</span>
              <Etsy class="h-6 transform translate-y-0.5 ml-1 text-white" />
              </button>
            {/if}
          </div>
          
          <dl class="border-t border-gray-300 mt-6 pt-4 text-sm text-gray-500" aria-labelledby="tab-faq" role="tabpanel" tabindex="0">
          <dt><h2 class="text-xl font-semibold text-gray-900">Description:</h2></dt>
          <dd class="pt-1 prose max-w-none text-gray-500"><p><strong>Some birds only hide in card packs.</strong>  Card Packs is Birdables approach to replicate the real birding experience.  Five Birdables cards (no duplicates) chosen at random. Packs are a great way to start or add to your Birdables collection!</p>
          </dd>
        </dl>
        </div>

        

        <div class="pt-6 text-sm text-gray-500" aria-labelledby="tab-faq" role="tabpanel" tabindex="0">
          <h2 class="text-xl font-semibold text-gray-900">Additional Information:</h2>
          
          <dl>
            <dt class="mt-4 font-semibold text-base text-gray-900">The scoop on the physical cards.</dt>
            <dd class="mt-2 prose max-w-none text-gray-500">
              <p>Sure thing! The physical cards are 6.4cm (2.5 in) x 8.9cm (3.5 in), printed on high quality 100% recycled paper. These cards are just the right thickness to feel satisfyingly sturdy, yet have a slight bend. They also have a cross-hatch texture, giving it a crisp look and hand feel.</p>
            </dd>
            
            <dt class="mt-4 font-semibold text-base text-gray-900">Can my collection make a difference?</dt>
            <dd class="mt-2 prose max-w-none text-gray-500">
              <p>Great question, and YES! <strong>We donate a portion of profits</strong> to a bird conservation organizations like the <ExternalLink href="https://www.birds.cornell.edu/">Cornell Lab of Ornithology</ExternalLink>, <ExternalLink href="https://ebird.org/">eBird</ExternalLink>, <ExternalLink href="https://www.audubon.org/">Audubon</ExternalLink>, and other. As the business gets off the ground (pun intended), we'll share more details on our site, including donation amounts and recipients.</p>
          
              <p>To ensure Birdables is not contributing to the destruction of bird habitats, we only use <strong>100% recycled paper</strong> for all physical cards. No trees are cut down for the creation of Birdables.</p>

              <p>The Birdables NFT's (digital cards) are minted and distributed on the Polygon blockchain, which validates transactions using the Proof-of-Stake consensus model.  This model <strong>consumes far less energy</strong> than the Proof-of Work model.</p>
                    
              <p>Energy concise considerations were also made when creating this website. Each page is generated one time before uploading the files to the server. This allows for database & external API calls to be made once every “build” instead of on every page load by every user.</p>
          </dl>
        </div>

        <a href="/about" sveltekit:prefetch class="mt-8 w-full bg-gray-900 border border-transparent rounded-full py-4 px-8 flex flex-wrap items-center justify-center text-sm lg:text-base font-semibold text-white transition hover:ring-3 hover:ring-offset-3 hover:ring-offset-gray-blue hover:ring-gray-500 focus:outline-none focus:ring-3 focus:ring-offset-3 focus:ring-offset-gray-blue focus:ring-gray-500">Learn more about Birdables</a>

        <div class="border-t border-gray-300 mt-10 pt-10">
          <h3 class="text-lg font-semibold text-gray-900">Share:</h3>
          <Share
            text={`Check out this 5 Card Pack of Birdables cards!`}
            image={`https://birdables.com${assets}/images/packs/5-card-pack.webp`} alt={`5 Card Pack`}
            url={`https://birdables.com${$page.path}`}
            via={site.twitterHandle}
          />
        </div>
      </div>
    </div>
  </div>
</div>

<!-- Modal -->
<div class={`${isModalOpen ? "opacity-100 pointer-events-auto" : "opacity-0 delay-300 pointer-events-none"} fixed z-20 inset-0 overflow-y-auto transition`} aria-labelledby="modal-rarity-description" role="dialog" aria-modal="true">
  <div class={`flex items-center justify-center min-h-screen text-center sm:block sm:p-0`}>
    <div on:click={toggleModal} class={`${isModalOpen ? "opacity-100" : "opacity-0"} fixed inset-0 bg-gray-900 bg-opacity-75 transition-opacity duration-300 ease-in-out`} aria-hidden="true"></div>
    <!-- This element is to trick the browser into centering the modal contents. -->

    <div class={`${isModalOpen ? "opacity-100 translate-y-0 sm:scale-100" : "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"} h-screen w-screen pointer-events-none flex justify-center items-center transform transition-all duration-300 ease-in-out px-2 py-12`}>
        <img src={`${assets}/images/cards-on-grass.webp`} alt={`Cards on grass`} class={`${isModalOpen ? "pointer-events-auto" : "pointer-events-none"} object-center object-cover drop-shadow-card max-h-[calc(100vh-6rem)]`}>
    </div>
    <button on:click={toggleModal} class="fixed top-4 right-4 text-white cursor-pointer z-10">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36" class=""><path fill="none" d="M0 0h24v24H0z"/><path fill="currentColor" d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z"/></svg>
      <span class="sr-only">Close Modal</span>
    </button>
  </div>
</div>