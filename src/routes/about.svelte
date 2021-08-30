<script>
  import {assets} from '$app/paths'
  import FAQ from '$lib/components/FAQ.svelte'
  import CardAnatomy from '$lib/components/CardAnatomy.svelte'
  import { browser } from '$app/env';
  import Rarity from '$lib/components/Rarity.svelte';
  import ExternalLink from '$lib/components/ExternalLink.svelte';
  // import IntersectionObserver from "svelte-intersection-observer";

  function scrollToSection(id, e) {
    if (browser) {
      e.preventDefault();
      document.getElementById(id).scrollIntoView({behavior: 'smooth'});
      setTimeout(() => {window.location.hash = encodeURIComponent(id)}, 1000)
    }
  }

  let sections = [
    {
      link: 'anatomy-of-card',
      title: 'The Anatomy of a Card',
    },
    {
      link: 'rarity',
      title: 'The Card Rarity Scale',
    },
    {
      link: 'physical-vs-digital-cards',
      title: 'Physical -vs- Digital cards',
    },
    {
      link: 'faq',
      title: 'Frequently Asked Questions',
    },
  ];

  // ToDo: Setup intersection observers
  // let element1;
  // let intersecting1;
  // let element2;
  // let intersecting2;
  // let element3;
  // let intersecting3;
  // let element4;
  // let intersecting4;
</script>

<nav class="hidden sm:block z-10 fixed right-0 bottom-4 rounded-tl-2xl rounded-bl-2xl bg-white drop-shadow-card overflow-hidden">
  <span class="text-base font-black text-gray-600 flex items-center space-x-2 border-b py-3 px-6">Navigate to:</span>
  {#each sections as section}
      <a on:click={(e) => {scrollToSection(section.link, e)}} href={`#${section.link}`} class="text-xs font-semibold text-gray-600 flex items-center space-x-2 border-b py-3 px-6 transition hover:bg-gray-100"><svg xmlns="http://www.w3.org/2000/svg" class="" viewBox="0 0 24 24" width="20" height="20"><path fill="none" d="M0 0h24v24H0z"/><path fill="currentColor" d="M12.172 12L9.343 9.172l1.414-1.415L15 12l-4.243 4.243-1.414-1.415z"/></svg><span>{section["title"]}</span></a>
    {/each}
</nav>

<div class="pb-16 pt-8 sm:pb-24 sm:pt-12 px-4 sm:px-6 lg:px-16">
  <div class="grid grid-cols-1 gap-20 lg:mx-auto lg:max-w-7xl lg:grid-cols-2 lg:gap-8 lg:items-start">
    

    <div class="flex flex-col justify-start">
      <!-- Content area -->
      <div class="">
        <h1 class="text-3xl text-gray-900 font-extrabold tracking-tight sm:text-6xl">
          About Birdables
        </h1>
        <div class="mt-6 text-gray-500 space-y-6">
          <p class="prose prose-xl text-gray-500">
            The Birdables mission is to increase bird awareness, donate to bird saving organizations, and make some pretty cool bird cards while we're at it!
          </p>
        </div>
      </div>
      <div>
        {#each sections as section}
          <div class="mt-6">
            <a on:click={(e) => {scrollToSection(section.link, e)}} href={`#${section.link}`} class="text-xl font-semibold text-gray-600 border-b-2 pb-2 transition hover:border-gray-900">{section["title"]} <span aria-hidden="true">&rarr;</span> </a>
          </div>
        {/each}
      </div>
    </div>

    <img class="h-full w-full object-contain" src={`${assets}/images/Featured-Image.png`} alt="">

  </div>
</div>


<div class="bg-white py-16 px-4 sm:px-6 lg:px-16 pt-8 border-t border-t-gray-100 sm:py-24" id={sections[0].link}>
  <div class="lg:mx-auto lg:max-w-7xl">
    <h2 class="text-3xl text-gray-900 font-extrabold tracking-tight sm:text-5xl">
      {sections[0].title}
    </h2>
    <div class="mt-6 text-gray-500 space-y-6">
      <p class="prose prose-xl text-gray-500">
        Each Birdables card contains elements that reveal information about the bird or card.
      </p>
      <CardAnatomy />
    </div>
  </div>
</div>

<div class="bg-white py-16 px-4 sm:px-6 lg:px-16 pt-8 border-t border-t-gray-100 sm:py-24" id={sections[1].link}>
  <div class="lg:mx-auto lg:max-w-7xl lg:px-8">
    <h2 class="text-3xl text-gray-900 font-extrabold tracking-tight sm:text-5xl">
      {sections[1].title}
    </h2>
    <div class="mt-8 lg:grid lg:grid-cols-5 lg:gap-12">
      <div class="col-span-3">
        <div class="prose text-gray-500 lg:max-w-none">
          <p>Each Birdables card has a rarity rating ranging from 
            <span class="inline-flex px-1 space-x-2 items-baseline">
            <Rarity stars=1 hideExplainer={true} /><span> to </span><Rarity stars=5 hideExplainer={true} /></span>.  The rarity of cards will dictate how many physical cards are ever printed and how many digital cards are minted.  For example, no more than 50 1st edition California Condor cards will ever be printed.  Determining the rarity is based on a secret blend of three properties:
          </p>
          <ol>
            <li>
              <span>
                The bird's <ExternalLink href="https://en.wikipedia.org/wiki/Conservation_status">conservation status</ExternalLink>
              </span>
            </li>
            <li>The bird's  Likeliness of being spotted in the wild</li>
            <li>The "Birdables Scale of Majesticness"</li>
          </ol>
          <h2 id="rarity-table">Quantity of cards released per rarity:</h2>
        </div>
        <div class="overflow-hidden mt-8 border border-gray-blue rounded-lg sm:rounded-2xl">
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
              <tr>
                <th scope="col" class="px-6 py-3 text-center text-base font-extrabold tracking-tight text-gray-500">
                  Rarity
                </th>
                <th scope="col" class="px-6 py-3 text-center text-base font-extrabold tracking-tight text-gray-500">
                  Digital copies
                </th>
                <th scope="col" class="px-6 py-3 text-center text-base font-extrabold tracking-tight text-gray-500">
                  Physical copies
                </th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white">
                <td class="text-center px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  <div class="flex justify-center"><Rarity stars=1 hideExplainer={true} /></div>
                </td>
                <td class="text-center px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  50
                </td>
                <td class="text-center px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  2000
                </td>
              </tr>
              <tr class="bg-gray-50">
                <td class="text-center px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  <div class="flex justify-center"><Rarity stars=2 hideExplainer={true} /></div>
                </td>
                <td class="text-center px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  25
                </td>
                <td class="text-center px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  1500
                </td>
              </tr>
              <tr class="bg-white">
                <td class="text-center px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  <div class="flex justify-center"><Rarity stars=3 hideExplainer={true} /></div>
                </td>
                <td class="text-center px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  10
                </td>
                <td class="text-center px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  800
                </td>
              </tr>
              <tr class="bg-gray-50">
                <td class="text-center px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  <div class="flex justify-center"><Rarity stars=4 hideExplainer={true} /></div>
                </td>
                <td class="text-center px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  5
                </td>
                <td class="text-center px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  200
                </td>
              </tr>
              <tr class="bg-white">
                <td class="text-center px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  <div class="flex justify-center"><Rarity stars=5 hideExplainer={true} /></div>
                </td>
                <td class="text-center px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  1
                </td>
                <td class="text-center px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  50
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="col-span-2">
        <img src={`${assets}/images/rarity.png`} alt="Roseate Spoonbill" class="w-full h-full object-center object-contain group-hover:opacity-75">
      </div>
    </div>
  </div>
</div>

<div class="bg-white py-16 px-4 sm:px-6 lg:px-16  pt-8 border-t border-t-gray-100 sm:py-24" id={sections[2].link}>
  <div class="lg:mx-auto lg:max-w-7xl lg:px-8">
    <h2 class="text-3xl text-gray-900 font-extrabold tracking-tight sm:text-5xl">
      {sections[2].title}
    </h2>
    <div class="mt-6 text-gray-500 space-y-6">
      <p class="prose prose-xl text-gray-500">
        Each Birdables card has a physical and digital version. The <strong>physical card</strong> is just like your typical sports collectable or Pokemon card.  The <strong>digital card</strong> is an NFT.
      </p>
    </div>
    <div class="mt-8 lg:grid lg:grid-cols-2 lg:gap-6">
      <div>
        <div class="prose text-gray-500 lg:max-w-none">
          <h3>Physical Cards</h3>
          <p>So they will fit in your existing card sleeves or covers, each card is the standard trading/collectable card size of 6.4cm (2.5 in) x 8.9cm (3.5 in).</p>
          <p>The cards are printed on 100% recycled paper right down the road from where they are designed and shipped from, in Charleston SC, USA. We keep everything as local as possible to reduce the emissions emitted.</p>
          <p>Physical cards can be purchased securely from <ExternalLink href="https://www.etsy.com/shop/Birdables">Birdables' Etsy Storefront</ExternalLink></p>
          <!-- <ol role="list">
            <li>Integer varius imperdiet sed interdum felis cras in nec nunc.</li>
            <li>Quam malesuada odio ut sit egestas. Elementum at porta vitae.</li>
          </ol> -->
          
        </div>
        
      </div>
      <div>
        <div class="mt-6 prose text-gray-500 lg:mt-0">
          <h3>Digital Cards (NFT)</h3>
          <p>If you aren't familiar with digital assets or NFT's (<ExternalLink href="https://www.theverge.com/22310188/nft-explainer-what-is-blockchain-crypto-art-faq">Non-Fungible Tokens</ExternalLink>), you may not understand the point or purpose of a digital cards, but you're in for a treat.</p>
          <p>Digital cards have an indefinite lifespan in your digital wallet, so you'll never need to worry about losing or getting your digital card dirty. The possibilities of how your digital card could be displayed or used in games/applications now and in the future are endless.</p>
          <p>Physical cards can be purchased securely from <ExternalLink href="https://opensea.io/collection/birdables">Birdables' OpenSea Storefront</ExternalLink></p>
        </div>
      </div>
    </div>
  </div>
</div>

<FAQ title={sections[3].title} id={sections[3].link} />
