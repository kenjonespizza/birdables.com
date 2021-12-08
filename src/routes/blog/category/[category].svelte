<script context="module">
  import  { base } from '$app/paths'

  export async function load({ page, fetch }) {
    let [category, currentPageParam] = page.params.category
    // if (currentPageParam == 1) {
    //   return this.redirect(302, `blog/category/${category}`);
    // }
      const res = await fetch(`${base}/api/blog/category/${page.params.category}`);
      const { posts, categoryInfo, currentPage, perPage, count, blogInfo, categories } = await res.json();

      if (res) {
        return {
          props: {
            posts, categoryInfo, currentPage, perPage, count, blogInfo, categories
          }
        }
      }

      return {
        status: res.status,
        error: new Error().message,
      };
  };
</script>


<script>
  import SEO from 'svelte-seo';

  import site from '$lib/info';
  import { urlFor } from "$lib/sanity-image-url"
  import Posts from '$lib/components/Blog/Posts.svelte'
  import PortableText from '$lib/components/PortableText.svelte'
  import Breadcrumb from '$lib/components/Breadcrumb.svelte'
  import { toPlainText, truncate } from '$lib/utils'

  export let posts;
  export let currentPage;
  export let perPage;
  export let count;
  export let categoryInfo;
  export let categories;
</script>

<style>
	
</style>

<svelte:head>
	<title>{categoryInfo.pageInfo.name}</title>
</svelte:head>

<SEO
  title={`${categoryInfo.pageInfo.name} | ${site.name} Blog`}
  description={`${truncate(toPlainText(categoryInfo.description), 160)}`}
  keywords={categoryInfo.pageInfo.name}
  openGraph={{
    title: `${categoryInfo.pageInfo.name} | ${site.name} Blog`,
    description: truncate(toPlainText(categoryInfo.description), 160),
    url: `${site.address}/blog/category/${categoryInfo.pageInfo.slug.current}`,
    type: 'website',
    images: [
      {
        url: `${urlFor(categoryInfo.image.asset).quality(80).size(1200,627)}`,
        width: 1200,
        height: 627, 
        alt: `${categoryInfo.pageInfo.name}`
      }
     ]
  }}
  twitter={{
    site: `@${site.twitterHandle}`,
    title: `"${categoryInfo.pageInfo.name}" blog posts | ${site.name} Blog`,
    description: truncate(toPlainText(categoryInfo.description), 160),
    image: `${urlFor(categoryInfo.image.asset).quality(80).size(1200,627)}`,
    imageAlt: `${categoryInfo.pageInfo.name}!`,
  }}
  jsonLd={{
    "logo": `${site.address}/images/logo.svg`,
    "@context": `http://schema.org`,
    "@type": `WebSite`,
    "name": `${categoryInfo.pageInfo.name} blog posts | ${site.name}`,
    "url": `${site.address}/blog/category/${categoryInfo.pageInfo.name}`,
  }}
/>

<section class="bg-gray-blue">
  <div class="max-w-7xl mx-auto pt-10 pb-12 px-4 sm:px-6 md:px-8">
    <Breadcrumb current={categoryInfo.pageInfo.name} steps={[{title:"Blog", link:"/blog"},{title:"Categories", link:"/blog/categories"}]} />
    <div class="md:flex md:justify-between items-end">
      <div class="max-w-3xl pt-8">
        <h2 class="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tighter lg:text-6xl">{categoryInfo.pageInfo.name} <span class="tracking-tight italic text-gray-300 text-4xl">({count})</span></h2>
        <PortableText content={categoryInfo.description} class="mt-4 prose-xl text-gray-500" />
      </div>
    </div>
  </div>
</section>

<!-- <BlogHero>
  <h1 slot="heading"><a class="underline" href="/blog" rel=prefetch>Blog</a> / Category: {categoryInfo.pageInfo.name}</h1>
  <div slot="content">
    <PortableText content={categoryInfo.description} class="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl" />
  </div>
</BlogHero> -->

<div class="bg-white">
  <div class="mx-auto py-6 px-4 max-w-screen-xl sm:px-6 lg:px-8 lg:py-10">
    <Posts {posts} {categories} {count} {currentPage} {perPage}  paginationSlug={`blog/category/${categoryInfo.pageInfo.slug.current}`} currentCategory={categoryInfo._id} />
  </div>
</div>