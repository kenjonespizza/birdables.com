<script>
	import { onMount } from 'svelte';
	import { slide, fade } from 'svelte/transition';
	import { flip } from 'svelte/animate';
	import { assets } from '$app/paths';
	import Card from '$lib/components/Card.svelte';

	let ready = false;
	onMount(() => {
		ready = true;
	});

	export let cards;
</script>

<ul
	class="gap-4 grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-12 sm:space-y-0  lg:gap-x-8 2xl:grid-cols-3"
>
	<li in:slide class="space-y-4">
		<a
			href={`/pack/5-card-pack`}
			sveltekit:prefetch
			class={`${ready ? 'opacity-100' : 'opacity-0'} group flex flex-col space-y-4`}
		>
			<img
				class="card-img object-cover drop-shadow-card card-img"
				src={`${assets}/images/packs/5-card-pack.webp`}
				alt="5 Card Pack"
			/>
			<div class="text-lg leading-6 font-medium space-y-2">
				<p class="flex flex-col">
					<span
						class="font-black tracking-tighter leading-none text-2xl md:text-4xl group-hover:underline"
						>5 Card Pack</span
					>
				</p>
			</div>
		</a>
	</li>
	{#each cards as card, i (card)}
		<li transition:fade|local animate:flip={{ duration: 750 }} class="space-y-4">
			<Card {card} {i} />
		</li>
	{/each}
</ul>
