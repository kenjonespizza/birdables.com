<script>
	import { goto } from '$app/navigation';
	import { browser } from '$app/environment';

	export let data;
	let { bird } = data;

	if (browser) {
		const navigateToBirdPage = async () => {
			if (bird?.slug) {
				await goto(`/bird/${bird.slug}`);
			} else {
				await goto(`/`);
			}
		};

		navigateToBirdPage();
	}
</script>

<!-- ToDo: Add a QR Code scanned simple template with not header or footer -->
<svelte:head>
	<meta name="robots" content="noindex, nofollow, noimageindex, noarchive, nosnippet" />
</svelte:head>
