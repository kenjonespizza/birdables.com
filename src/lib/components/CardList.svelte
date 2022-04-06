<script>
  import { assets } from '$app/paths';
  import { slide } from 'svelte/transition';
	import { flip } from 'svelte/animate';
  import Card from '$lib/components/Card.svelte'

  export let cards
</script>

<ul class="gap-4 grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-12 sm:space-y-0 md:grid-cols-3 lg:gap-x-8 2xl:grid-cols-3">
  <li in:slide class="space-y-4">
    <a href={`/pack/5-card-pack`} sveltekit:prefetch class="group flex flex-col space-y-4 tranform transition duration-300">
      <img class="card-img object-cover drop-shadow-card card-img" src={`${assets}/images/packs/5-card-pack.webp`} alt="5 Card Pack">
      <!-- <div class="aspect-w-3 aspect-h-4" style={`background-color: #${card.accentColor};`}></div> -->
      <div class="text-lg leading-6 font-medium space-y-2">
        <p class="flex flex-col">
          <span class="font-black tracking-tighter leading-none text-2xl md:text-4xl group-hover:underline">5 Card Pack</span>
        </p>
      </div>
    </a>
  </li>
  {#each cards as card (card.id)}
    <li in:slide animate:flip="{{duration: 500}}" class="space-y-4">
      <Card {card} />
    </li>
  {/each}
</ul>