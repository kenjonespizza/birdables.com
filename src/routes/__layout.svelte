<script>
  import "../app.postcss";
  import Nav from "../lib/components/Nav.svelte"
  import Footer from "../lib/components/Footer.svelte"

  import {ShowHeaderFooter} from "../stores/store"
  ShowHeaderFooter.set(true);
  console.log('ShowHeaderFooter:', $ShowHeaderFooter)
</script>

<svelte:head>
  <link rel="icon" href="/favicon.svg" />
</svelte:head>

<div class="text-gray-900 absolute w-screen">
  {#if $ShowHeaderFooter}
  <Nav />
  {/if}
  <slot></slot>
  {#if $ShowHeaderFooter}
    <Footer />
  {/if}
</div>