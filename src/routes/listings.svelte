<script context="module">
  export async function load({page, fetch}) {
    const url = "api/listings";
    const res = await fetch(url)

    if (res) {
      return {
				props: {
					listings: await res.json()
					// listings: {test: 'yes'}
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
  import {offlineListing} from "$lib/offlineListings"
  export let listings;

  const offlineMode = false;
  if (offlineMode) {
    listings = JSON.parse(offlineListing)
  }
  // console.log('listings:', listings)
</script>

<div class="bg-white">
  <div class="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
    <div class="space-y-12">
      <div class="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
        <h2 class="text-3xl font-extrabold tracking-tight sm:text-4xl">Birdables Card</h2>
        <p class="text-xl text-gray-500">Get em!.</p>
      </div>
      <ul class="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8">
        {#each listings.results as listing}
          <li>
            <a class="space-y-4" href={listing.url} target="_blank">
              <img class="object-cover" src={listing.images[0].url_570xN} alt={listing.title}>

              <div class="space-y-2">
                <div class="text-lg leading-6 font-medium space-y-1">
                </div>
              </div>
            </a>
          </li>
        {/each}
      </ul>
    </div>
  </div>
</div>
