<script>
  import "../app.postcss";
  import Nav from "../lib/components/Nav.svelte"
  import Footer from "../lib/components/Footer.svelte"
</script>

<svelte:head>
  <link rel="icon" href="/favicon.svg" />
</svelte:head>

<Nav />
<slot></slot>
<Footer />