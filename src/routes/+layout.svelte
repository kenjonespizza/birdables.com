<script>
	import '../app.postcss';
	import Nav from '$lib/components/Nav.svelte';
	import Footer from '$lib/components/Footer.svelte';

	import { ShowHeaderFooter } from '../stores/store';
	ShowHeaderFooter.set(true);
</script>

<svelte:head>
	<link rel="icon" href="/favicon.svg" />
	<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
	<link rel="manifest" href="/manifest.json" />
	<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
	<meta name="msapplication-TileColor" content="#ffffff" />
	<meta name="theme-color" content="#ffffff" />
	<meta content="width=device-width, initial-scale=1, minimum-scale=1" name="viewport" />

	<!-- <link
		rel="preload"
		as="font"
		href="/fonts/GreycliffCF-Medium.woff2"
		type="font/woff2"
		crossorigin="anonymous"
	/>
	<link
		rel="preload"
		as="font"
		href="/fonts/GreycliffCF-Medium.woff"
		type="font/woff"
		crossorigin="anonymous"
	/>
	<link
		rel="preload"
		as="font"
		href="/fonts/GreycliffCF-DemiBold.woff2"
		type="font/woff2"
		crossorigin="anonymous"
	/>
	<link
		rel="preload"
		as="font"
		href="/fonts/GreycliffCF-DemiBold.woff"
		type="font/woff"
		crossorigin="anonymous"
	/>
	<link
		rel="preload"
		as="font"
		href="/fonts/GreycliffCF-DemiBoldOblique.woff2"
		type="font/woff2"
		crossorigin="anonymous"
	/>
	<link
		rel="preload"
		as="font"
		href="/fonts/GreycliffCF-DemiBoldOblique.woff"
		type="font/woff"
		crossorigin="anonymous"
	/>
	<link
		rel="preload"
		as="font"
		href="/fonts/GreycliffCF-Heavy.woff2"
		type="font/woff2"
		crossorigin="anonymous"
	/>
	<link
		rel="preload"
		as="font"
		href="/fonts/GreycliffCF-Heavy.woff"
		type="font/woff"
		crossorigin="anonymous"
	/> -->
</svelte:head>

<div class="text-gray-900 relative w-screen selection:bg-gray-900 selection:text-white">
	{#if $ShowHeaderFooter}
		<Nav />
	{/if}
	<slot />
	{#if $ShowHeaderFooter}
		<Footer />
	{/if}
</div>
