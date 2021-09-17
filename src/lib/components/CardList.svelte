<script>
  import { assets } from '$app/paths';
  import { slide } from 'svelte/transition';
	import { flip } from 'svelte/animate';

  export let cards
</script>

<ul class="gap-4 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-12 sm:space-y-0 md:grid-cols-3 lg:gap-x-8 2xl:grid-cols-3">
  {#each cards as card (card.id)}
    <li in:slide animate:flip="{{duration: 500}}" class="space-y-4">
      <a href={`/bird/${card.slug}`} sveltekit:prefetch class="group flex flex-col space-y-4 tranform transition duration-300">
        <img class="object-cover filter drop-shadow-card card-img" src={`${assets}/images/cards/${card.friendlyId}.webp`} alt={card.cardName}>
        <!-- <div class="aspect-w-3 aspect-h-4" style={`background-color: #${card.accentColor};`}></div> -->
        <div class="text-lg leading-6 font-medium space-y-2">
          <p class="flex flex-col">
            <span class="text-xl tracking-tighter leading-none group-hover:underline">
              {#if card.smallName}
                {card.smallName}
              {:else}
                <br />
              {/if}
            </span>
            <span class="font-black tracking-tighter leading-none text-4xl group-hover:underline">{card.bigName}</span>
          </p>
          <p class="text-gray-400 italic text-base tracking-tight leading-none">{card.scientificName}</p>
          <div class="flex space-x-2">
            <!-- {#if card.rarity === 5}
              <span class="px-3 py-1.5 bg-gray-100 text-gray-400 rounded-full text-xs font-semibold">Legendary</span>
            {/if} -->
            {#if card.specialty}
              <span class="px-3 py-1.5 bg-gray-100 text-gray-400 rounded-full text-xs font-semibold">Only available in pack</span>
            {/if}
          </div>
        </div>
      </a>
      <a href={`/card/${card.id}`} class="hidden">{card.cardName}`}</a>
    </li>
  {/each}
</ul>