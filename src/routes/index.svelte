<script>
  import { browser } from '$app/env';
  import IntersectionObserver from "svelte-intersection-observer";
  import {assets} from '$app/paths'
  import GetNotified from '$lib/components/GetNotified.svelte';
  import {ShowHeaderFooter} from "../stores/store"

  const checkIfShownAnimationsCookieIsTrue = () => {
    if (document.cookie.split(';').some((item) => item.includes('shown_animations=true'))) {
      return true
    }
    return false
  }

  if (browser && !checkIfShownAnimationsCookieIsTrue()) {
      document.body.classList.add("show-animation")
      document.cookie = `shown_animations=true; SameSite=None; Secure;`;
  }

  let element;
  let intersecting;
  let element2;
  let intersecting2;
  let element3;
  let intersecting3;
  let element4;
  let intersecting4;

  ShowHeaderFooter.set(false);
</script>

<svelte:head>
  <title>Birdables | Physical & NFT Bird Trading Cards</title>
</svelte:head>

<!-- This example requires Tailwind CSS v2.0+ -->
<div class="min-h-screen pt-16 pb-12 flex flex-col bg-white">
  <main class="flex-grow flex flex-col justify-center max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex-shrink-0 flex justify-center">
      <a href="/" class="inline-flex">
        <span class="sr-only">Birdables</span>
        <img class="h-12 md:h-16 w-auto" src={`${assets}/images/BirdablesLogoDark.svg`} alt="Birdables logo">
      </a>
    </div>
    <div class="py-16">
      <div class="text-center">
        <h1 class="mt-2 text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">Coming Soon!</h1>
        <p class="mt-2 text-base text-gray-500">Go grab your binoculars and see if you can spot us.</p>
      </div>
    </div>
  </main>
</div>
