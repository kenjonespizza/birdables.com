<script context="module">
  export const load = async ({ page }) => ({
      props: {
          key: page.path,
      },
  });
</script>

<script>
  import "../app.postcss";
  import Transition from "../lib/components/Transition.svelte"
  import Nav from "../lib/components/Nav.svelte"
  import Footer from "../lib/components/Footer.svelte"

  import {ShowHeaderFooter} from "../stores/store"
  ShowHeaderFooter.set(true);

  export let key;
</script>

<svelte:head>
  <link rel="icon" href="/favicon.svg" />
  <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
  <link rel="manifest" href="/manifest.json">
  <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5">
  <meta name="msapplication-TileColor" content="#ffffff">
  <meta name="theme-color" content="#ffffff">
  <meta content='width=device-width, initial-scale=1, minimum-scale=1' name='viewport'/>
</svelte:head>

<Transition key={key}>
<div class="text-gray-900 absolute w-screen">
  {#if $ShowHeaderFooter}
  <Nav />
  {/if}
  <slot></slot>
  {#if $ShowHeaderFooter}
  <Footer />
  {/if}
</div>
</Transition>