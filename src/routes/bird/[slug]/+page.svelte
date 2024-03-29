<script>
	import SEO from 'svelte-seo';

	import { page } from '$app/stores';
	import { assets } from '$app/paths';
	import site from '$lib/info';
	import Breadcrumb from '$lib/components/Breadcrumb.svelte';
	import Rarity from '$lib/components/Rarity.svelte';
	import Share from '$lib/components/Share.svelte';
	import ExternalLink from '$lib/components/ExternalLink.svelte';

	import Etsy from '$lib/svgs/Etsy.svelte';
	import OpenSea from '$lib/svgs/OpenSea.svelte';
	import EBird from '$lib/svgs/EBird.svelte';
	import Audubon from '$lib/svgs/Audubon.svelte';
	import BOW from '$lib/svgs/BOW.svelte';

	export let data;
	let { bird } = data;
	export let isModalOpen;

	let pageUrl = `${site.address}${$page.url.pathname}`;
	let comingSoonOveride = false;
	let comingSoonOverideDigital = false;

	function toggleModal() {
		isModalOpen = !isModalOpen;
	}

	function handleKeydown(e) {
		if (isModalOpen && e.key === 'Escape') {
			toggleModal();
		}
	}
</script>

<SEO
	title={`${bird.birdName} card | ${site.name}`}
	description={`${bird.birdName} card available ${
		bird.specialty ? 'randomly in a card pack' : 'as physical card'
	} and digitally as an NFT.`}
	keywords={`${bird.birdName}, ${bird.birdName} card, Bird Collectable Cards, Bird Trading Cards, ${site.name}, Bird NFTs`}
	openGraph={{
		title: `${bird.birdName} card | ${site.name}`,
		description: `Check out this ${bird.birdName} ${site.name} card!`,
		url: pageUrl,
		type: 'product',
		images: [
			{
				url: `${site.address}/images/opengraph/${bird.friendlyId}.webp`,
				width: 1200,
				height: 627,
				alt: `${bird.birdName} card`
			}
		]
	}}
	twitter={{
		site: `@${site.twitterHandle}`,
		title: `${bird.birdName} card | ${site.name}`,
		description: `Check out this ${bird.birdName} ${site.name} card!`,
		image: `${site.address}/images/opengraph/${bird.friendlyId}.webp`,
		imageAlt: `${bird.birdName} card`
	}}
	jsonLd={{
		'@type': 'product',
		name: `${bird.birdName} card`,
		category: 'Cards',
		image: `${site.address}/images/cards/${bird.friendlyId}.webp`,
		description: ``,
		logo: 'http://www.birdables.com/images/logo.svg'
	}}
/>

<svelte:window on:keydown={handleKeydown} />

<div class="bg-gray-blue">
	<div class="mx-auto pt-10 pb-16 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
		<Breadcrumb steps={[{ title: 'All Cards', link: '/cards' }]} current={bird.birdName} />
		<div
			class="flex-col-reverse md:grid md:grid-rows-1 md:grid-cols-8 md:gap-x-8 md:gap-y-10 md:mt-10 xl:gap-x-16"
		>
			<button
				on:click={toggleModal}
				class="md:row-end-1 md:col-span-4 rounded-3xl transition hover:ring-3 hover:ring-offset-3 hover:ring-offset-gray-blue hover:ring-gray-900 focus:outline-none focus:ring-3 focus:ring-offset-3 focus:ring-offset-gray-blue focus:ring-gray-900"
			>
				<img
					src={`${assets}/images/cards/${bird.friendlyId}.webp`}
					alt={`${bird.birdName} card`}
					class="object-center object-cover drop-shadow-card hidden md:block"
				/>
			</button>

			<div class="max-w-2xl mx-auto md:max-w-none md:mt-0 md:row-end-2 md:row-span-2 md:col-span-4">
				<div class="flex flex-col-reverse">
					<div class="flex flex-col">
						<div class="mt-4">
							<div class="text-lg leading-6 font-medium flex flex-col space-y-2 items-start">
								<h1 class="flex flex-col">
									{#if bird.smallName}<span
											class="text-5xl md:text-3xl lg:text-5xl tracking-tighter leading-none"
											>{bird.smallName}</span
										>{/if}
									<span
										class="text-5xl md:text-5xl lg:text-7xl font-black tracking-tighter leading-none "
										>{bird.bigName}</span
									>
								</h1>
								<p class="text-xl text-gray-600 italic md:text-xl tracking-tight leading-none">
									{bird.scientificName}
								</p>
							</div>
						</div>
						<div class="mt-4 flex flex-col items-start">
							<div class="bg-white rounded-full px-6 py-4 flex space-x-2 items-center">
								<span class="text-gray-600 font-semibold">Rarity: </span>
								<Rarity stars={bird.rarity} />
							</div>
							{#if bird.specialty}
								<div class="flex space-x-2 mt-4">
									<span class=" text-gray-600 text-xs font-semibold">Only available in pack</span>
									<a
										sveltekit:prefetch
										href="/about#card-packs"
										class="text-xs ml-4 underline text-gray-600">(What's this?)</a
									>
								</div>
							{/if}
						</div>
					</div>

					<button
						on:click={toggleModal}
						class="focus:ring-3 focus:ring-offset-3 focus:ring-offset-gray-blue focus:ring-gray-500"
					>
						<img
							src={`${assets}/images/cards/${bird.friendlyId}.webp`}
							alt={`${bird.birdName} card`}
							class="object-center object-cover drop-shadow-card md:hidden mt-2"
						/>
						<span class="sr-only">Open full-size image</span>
					</button>
				</div>

				<div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-4">
					{#if bird?.etsyUrl && !bird.specialty && !comingSoonOveride}
						<a
							href={bird.etsyUrl}
							target="_blank"
							rel="noopener noreferrer"
							class="w-full bg-gray-900 border border-transparent rounded-full py-4 px-8 flex flex-wrap items-center justify-center text-sm lg:text-base font-semibold text-white transition hover:ring-3 hover:ring-offset-3 hover:ring-offset-gray-blue hover:ring-gray-500 focus:outline-none focus:ring-3 focus:ring-offset-3 focus:ring-offset-gray-blue focus:ring-gray-500"
						>
							<span>Buy <span class="font-black">Physical Card</span> on</span>
							<Etsy class="h-6 translate-y-0.5 ml-1 text-white" />
						</a>
					{/if}
					{#if bird.specialty && !comingSoonOveride}
						<a
							href="https://www.etsy.com/listing/1107948145/birdables-5-card-pack"
							target="_blank"
							rel="noopener noreferrer"
							class="w-full bg-gray-900 border border-transparent rounded-full py-4 px-8 flex flex-wrap items-center justify-center text-sm lg:text-base font-semibold text-white transition hover:ring-3 hover:ring-offset-3 hover:ring-offset-gray-blue hover:ring-gray-500 focus:outline-none focus:ring-3 focus:ring-offset-3 focus:ring-offset-gray-blue focus:ring-gray-500"
						>
							<span><span class="font-black">Physical Card</span> possible in a Card Pack</span>
							<Etsy class="h-6 translate-y-0.5 ml-1 text-white" />
						</a>
					{/if}
					{#if (!bird?.etsyUrl && !bird.specialty) || comingSoonOveride}
						<button
							type="button"
							disabled
							class="w-full bg-gray-900 cursor-not-allowed opacity-70 border border-transparent rounded-full py-4 px-8 flex flex-wrap items-center justify-center text-sm lg:text-base font-semibold text-white transition hover:ring-3 hover:ring-offset-3 hover:ring-offset-gray-blue hover:ring-gray-500 focus:outline-none focus:ring-3 focus:ring-offset-3 focus:ring-offset-gray-blue focus:ring-gray-500"
						>
							<span><span class="font-black">Physical Card </span>Coming Soon to</span>
							<Etsy class="h-6 translate-y-0.5 ml-1 text-white" />
						</button>
					{/if}

					{#if bird.openseaUrl && !comingSoonOverideDigital}
						<a
							href={bird.openseaUrl}
							target="_blank"
							rel="noopener noreferrer"
							class="w-full bg-gray-900 border border-transparent rounded-full py-4 px-8 flex flex-wrap items-center justify-center text-sm lg:text-base font-semibold text-white transition hover:ring-3 hover:ring-offset-3 hover:ring-offset-gray-blue hover:ring-gray-500 focus:outline-none focus:ring-3 focus:ring-offset-3 focus:ring-offset-gray-blue focus:ring-gray-500"
						>
							<span>Buy <span class="font-black">Digital Card</span> on</span>
							<OpenSea class="h-6 translate-y-0. ml-2 text-white" />
						</a>
					{:else}
						<button
							type="button"
							disabled
							class="w-full bg-gray-900 cursor-not-allowed opacity-70 border border-transparent rounded-full py-4 px-8 flex flex-wrap items-center justify-center text-sm lg:text-base font-semibold text-white transition hover:ring-3 hover:ring-offset-3 hover:ring-offset-gray-blue hover:ring-gray-500 focus:outline-none focus:ring-3 focus:ring-offset-3 focus:ring-offset-gray-blue focus:ring-gray-500"
						>
							<span><span class="font-black">Digital Card</span> Coming Soon to</span>
							<OpenSea class="h-6 translate-y-0. ml-2 text-white" />
						</button>
					{/if}
				</div>

				{#if bird.eBird || bird.audubon}
					<div class="border-t border-gray-300 mt-10 pt-10 text-sm text-gray-500">
						<h2 class="text-xl text-center font-semibold text-gray-900 md:text-left">
							Learn about the <strong class="font-black">{bird.birdName}</strong> from:
						</h2>

						<div class="flex space-x-6 justify-around mt-8">
							{#if bird.eBird}
								<a
									class="flex justify-center items-center py-2 transition border-b-2 border-transparent hover:border-gray-900 focus:border-gray-900"
									href={`https://ebird.org/species/${bird.eBird}`}
									target="_blank"
									rel="noopener noreferrer"
								>
									<EBird class="w-full max-h-6" />
									<span class="sr-only">eBird</span>
								</a>
							{/if}
							{#if bird.audubon}
								<a
									class="flex justify-center items-center py-2 transition border-b-2 border-transparent hover:border-gray-900 focus:border-gray-900"
									href={`https://www.audubon.org/field-guide/bird/${bird.audubon}`}
									target="_blank"
									rel="noopener noreferrer"
								>
									<Audubon class="h-10 translate-y-[-0.55rem] text-black w-full" />
									<span class="sr-only">Audubon</span>
								</a>
							{/if}
							{#if bird.eBird}
								<a
									class="flex justify-center items-center py-2 transition border-b-2 border-transparent hover:border-gray-900 focus:border-gray-900"
									href={`https://birdsoftheworld.org/bow/species/${bird.eBird}`}
									target="_blank"
									rel="noopener noreferrer"
								>
									<BOW class="h-10 translate-y-[-0.5rem] text-black w-full" />
									<span class="sr-only">Audubon</span>
								</a>
							{/if}
						</div>
					</div>
				{/if}

				<div
					id="tab-panel-faq"
					class="border-t border-gray-300 mt-10 py-10 text-sm text-gray-500"
					aria-labelledby="tab-faq"
					role="tabpanel"
					tabindex="0"
				>
					<h2 class="text-xl font-semibold text-gray-900">Additional Information:</h2>

					<dl>
						<dt class="mt-6 font-semibold text-base text-gray-900">
							The scoop on the physical cards.
						</dt>
						<dd class="mt-2 prose max-w-none text-gray-500">
							<p>
								Sure thing! The physical cards are 6.4cm (2.5 in) x 8.9cm (3.5 in), printed on high
								quality 100% recycled paper. These cards are just the right thickness to feel
								satisfyingly sturdy, yet have a slight bend. They also have a cross-hatch texture,
								giving it a crisp look and hand feel.
							</p>
						</dd>

						<dt class="mt-6 font-semibold text-base text-gray-900">
							What's the digital version (NFT) of a card?
						</dt>
						<dd class="mt-2 prose max-w-none text-gray-500">
							<p>
								The NFT version of Birdables cards is a digital version that you keep in your crypto
								wallet. This NFT is proof of your ownership and is verifiable on the immutable <ExternalLink
									href="https://polygon.technology/">Polygon</ExternalLink
								> blockchain. Purchases of the NFT will come with access to the hi-res artwork, not available
								anywhere else. NFT's of Birdables cards are also more scarce than physical cards.
								<a href={`/about#rarity`}>Learn more about the rarity.</a>
							</p>
						</dd>

						<dt class="mt-6 font-semibold text-base text-gray-900">How do Birdables help birds?</dt>
						<dd class="mt-2 prose max-w-none text-gray-500">
							<p>
								Great question! <strong>We donate a portion of profits</strong> to a bird
								conservation organization like the <ExternalLink
									href="https://www.birds.cornell.edu/">Cornell Lab of Ornithology</ExternalLink
								>, <ExternalLink href="https://ebird.org/">eBird</ExternalLink>, <ExternalLink
									href="https://www.audubon.org/">Audubon</ExternalLink
								>, etc. More details on this are still to come, as it is still unclear the cost of
								running this operation. All donation amounts & recipients will be available on this
								website, here, in the future.
							</p>

							<p>
								To make sure Birdables is not contributing to the destruction of bird habitats, <strong
									>100% recycled paper</strong
								> is used for all physical cards. No trees are cut down for the creation of the cards.
							</p>

							<p>
								The Birdables NFT's (digital cards) are minted and distributed on the Polygon
								blockchain, which validates transactions using the Proof-of-Stake consensus model.
								This model <strong>consumes far less energy</strong> than the Proof-of Work model.
							</p>

							<p>
								Energy concise considerations were also made when creating this website. Each page
								is generated one time before uploading the files to the server. This allows for
								database & external API calls to be made once every “build” instead of on every page
								load by every user.
							</p>
						</dd>
					</dl>
				</div>

				<a
					href="/about"
					sveltekit:prefetch
					class="w-full bg-gray-900 border border-transparent rounded-full py-4 px-8 flex flex-wrap items-center justify-center text-sm lg:text-base font-semibold text-white transition hover:ring-3 hover:ring-offset-3 hover:ring-offset-gray-blue hover:ring-gray-500 focus:outline-none focus:ring-3 focus:ring-offset-3 focus:ring-offset-gray-blue focus:ring-gray-500"
					>Learn more about Birdables</a
				>

				<div class="border-t border-gray-300 mt-10 pt-10">
					<h3 class="text-lg font-semibold text-gray-900">Share:</h3>
					<Share
						text={`Check out this ${bird.birdName} Birdables card!`}
						image={`https://birdables.com${assets}/images/cards/${bird.friendlyId}.webp`}
						alt={`${bird.birdName} card`}
						url={`https://birdables.com${$page.url.pathname}`}
						via={site.twitterHandle}
					/>
				</div>
			</div>
		</div>
	</div>
</div>

<!-- Modal -->
<div
	class={`${
		isModalOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 delay-300 pointer-events-none'
	} fixed z-20 inset-0 overflow-y-auto transition`}
	aria-labelledby="modal-rarity-description"
	role="dialog"
	aria-modal="true"
>
	<div class={`flex items-center justify-center min-h-screen text-center sm:block sm:p-0`}>
		<div
			on:click={toggleModal}
			class={`${
				isModalOpen ? 'opacity-100' : 'opacity-0'
			} fixed inset-0 bg-gray-900 bg-opacity-75 transition-opacity duration-300 ease-in-out`}
			aria-hidden="true"
		/>
		<!-- This element is to trick the browser into centering the modal contents. -->

		<div
			class={`${
				isModalOpen
					? 'opacity-100 translate-y-0 sm:scale-100'
					: 'opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
			} h-screen w-screen pointer-events-none flex justify-center items-center transition-all duration-300 ease-in-out px-2 py-12`}
		>
			<img
				src={`${assets}/images/cards/${bird.friendlyId}.webp`}
				alt={`${bird.birdName} card`}
				class={`${
					isModalOpen ? 'pointer-events-auto' : 'pointer-events-none'
				} object-center object-cover drop-shadow-card max-h-[calc(100vh-6rem)]`}
			/>
		</div>
		<button on:click={toggleModal} class="fixed top-4 right-4 text-white cursor-pointer z-10">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36" class=""
				><path fill="none" d="M0 0h24v24H0z" /><path
					fill="currentColor"
					d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z"
				/></svg
			>
			<span class="sr-only">Close Modal</span>
		</button>
	</div>
</div>
