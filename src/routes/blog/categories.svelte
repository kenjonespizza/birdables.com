<script context="module">
  import { base } from '$app/paths';

  export async function load({ fetch }) {
  		const results = await fetch(`${base}/api/blog/category/all`);
  		const categories = await results.json();
  		// console.log('categories:', categories)
  		return { props: {
        categories
      }};
  }
</script>

<script>
  import BlogHero from "$lib/components/Blog/BlogHero.svelte";
  import Breadcrumb from "$lib/components/Breadcrumb.svelte";
  import PortableText from "$lib/components/PortableText.svelte";
  import { urlFor } from "$lib/sanity-image-url";

  export let categories;
</script>

<svelte:head>
  <title>Categories</title>
</svelte:head>

<section class="bg-gray-blue">
  <div class="max-w-7xl mx-auto pt-10 pb-12 px-4 sm:px-6 md:px-8">
    <Breadcrumb current={"Categories"} steps={[{title:"Blog", link:"/blog"}]} />
    <div class="md:flex md:justify-between items-end">
      <div class="max-w-3xl pt-8">
        <h2 class="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tighter lg:text-6xl">Birdables Categories <span class="tracking-tight italic text-gray-300 text-4xl">({categories.length})</span></h2>
        <p class="mt-4 text-xl text-gray-500">Browse the blog by category to help find exactly what you need.</p>
      </div>
    </div>
  </div>
</section>

<!-- <BlogHero>
  <h1 slot="heading"><a class="underline" href="blog" rel=prefetch>Blog</a> / Categories</h1>
</BlogHero> -->

<div class="bg-white">
  <div class="mx-auto py-6 px-4 max-w-screen-xl sm:px-6 lg:px-8 lg:py-10">
    <div class="space-y-12 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0">
      {#each categories as category}
        <a href={`/blog/category/${category.pageInfo.slug.current}`} class="bg-white shadow-lg rounded-lg overflow-hidden">
          <div class="aspect-w-16 aspect-h-9">
            <img loading=lazy class="object-cover h-full w-full" src={urlFor(category.image).width(600)} alt={category.pageInfo.name}>
          </div>
          <h4 class="font-bold text-xl p-4 text-center">{category.pageInfo.name} <span class="span text-gray-500 font-light text-base">({category.count})</span></h4>
        </a>
      {/each}
    </div>
  </div>
</div>
