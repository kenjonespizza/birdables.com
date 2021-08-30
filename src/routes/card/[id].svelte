<script context="module">
  export async function load({page, fetch}) {
    const res = await fetch( `../api/card/${page.params.id}`)

    if (res) {
			return {
				props: {
					bird: await res.json()
				}
			};
		}

    return {
			status: res.status,
			error: new Error().message,
		};
  }

</script>
<script>
	import { goto, invalidate, prefetch, prefetchRoutes } from '$app/navigation';
	import { browser } from '$app/env'
	
	export let bird;

	if(browser) {
		const navigateToBirdPage = async () => {
			if (bird?.slug) {
				await goto(`/bird/${bird.slug}`);
			} else {
				await goto(`/`);
			}
		}

		navigateToBirdPage();
	}
	
</script>

<!-- ToDo: Add a QR Code scanned simple template with not header or footer -->
<svelte:head>
	<meta name="robots" content="noindex, nofollow, noimageindex, noarchive, nosnippet" />
</svelte:head>