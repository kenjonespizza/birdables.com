<script context="module">
  export async function load({page, fetch}) {
    const res = await fetch( `../api/bird/${page.params.slug}`)

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
  export let bird;
  console.log('bird:', bird)
</script>

<svelte:head>
  <title>{bird.birdName} | Birdables</title>
</svelte:head>

<style>
	.accent-color-bg {
		background-color: var(--bird-color);
	}

	::-moz-selection { background: var(--bird-color); }
	::selection { background: var(--bird-color); }
</style>

<div class="bg-white" style="--bird-color: #{bird.accentColor}">
  <div class="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
    <div class="space-y-12 lg:grid lg:grid-cols-2 lg:gap-8 lg:space-y-0">
      <!-- This example requires Tailwind CSS v2.0+ -->
<nav class="flex" aria-label="Breadcrumb">
  <ol class="flex items-center space-x-4">
    <li>
      <div>
        <a href="/" sveltekit:prefetch class="text-gray-900 hover:text-beak-600">
          <!-- Heroicon name: solid/home -->
          <svg class="flex-shrink-0 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
          </svg>
          <span class="sr-only">Home</span>
        </a>
      </div>
    </li>

    <li>
      <div class="flex items-center">
        <svg class="flex-shrink-0 h-5 w-5 text-gray-300" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
          <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
        </svg>
        <a href="/birds" sveltekit:prefetch class="ml-4 text-sm font-medium text-gray-900 hover:text-beack-600">All Birds</a>
      </div>
    </li>

    <li>
      <div class="flex items-center">
        <svg class="flex-shrink-0 h-5 w-5 text-gray-300" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
          <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
        </svg>
        <span class="ml-4 text-sm font-medium text-gray-500" aria-current="page">{bird.birdName}</span>
      </div>
    </li>
  </ol>
</nav>

      <div class="lg:col-span-2">
        <ul class="space-y-12 sm:divide-y sm:divide-gray-200 sm:space-y-0 sm:-mt-8 lg:gap-x-8 lg:space-y-0">
          <li class="sm:py-8">
            <div class="space-y-4 sm:grid sm:grid-cols-3 sm:items-start sm:gap-6 sm:space-y-0">
              <div class="aspect-w-3 aspect-h-2 sm:aspect-w-3 sm:aspect-h-4">
                <img class="object-cover" src={`/images/cards/${bird.friendlyId}.png`} alt="">
              </div>
              <div class="sm:col-span-2">
                <div class="space-y-4">
                  <div class="text-lg leading-6 font-medium space-y-1">
										<h3 class="flex flex-col">
											<span class="text-5xl">{bird.smallName}</span>
											<span class="font-black text-7xl">{bird.bigName}</span>
										</h3>
                    <p class="text-gray-500 italic text-2xl">{bird.scientificName}</p>
                  </div>
                  <div>
										<button type="button" class="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gray-900 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-beak-500">
											Button text
										</button>
									</div>
                </div>
              </div>
            </div>
          </li>

          <!-- More people... -->
        </ul>
      </div>
    </div>
  </div>
</div>
