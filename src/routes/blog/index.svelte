<script context="module">
  import { base } from '$app/paths';
  
  export async function load({page, fetch}) {
    const url = `${base}/api/blog/all`;
    const res = await fetch(url)
    const {
			posts, currentPage, perPage, count, blogInfo, categories, topics,
		} = await res.json();

    if (res) {
			return {
				props: {
          posts,
          currentPage,
          perPage,
          count,
          blogInfo,
          categories,
          topics,
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
  import SEO from 'svelte-seo';

  import site from '$lib/info';
  import Posts from "$lib/components/Blog/Posts.svelte";
  import PortableText from "$lib/components/PortableText.svelte";
  import Breadcrumb from "$lib/components/Breadcrumb.svelte"
  import { toPlainText } from "$lib/utils";
  import { urlFor } from "$lib/sanity-image-url"

  export let posts;
  export let currentPage;
  export let perPage;
  export let count;
  export let blogInfo;
  export let categories;
  export let topics;

</script>

<svelte:head>
	<title>{blogInfo.pageInfo.name}</title>
</svelte:head>

<SEO
  title={`${blogInfo.pageInfo.name}`}
  description={`${toPlainText(blogInfo.content)}`}
  keywords={`Blog, ${site.name}`}
  openGraph={{
    title: `${blogInfo.pageInfo.name}`,
    description: toPlainText(blogInfo.content),
    url: `${site.address}/blog`,
    type: 'website',
    images: [
      {
        url: `${site.address}/images/opengraph/index.webp`,
        width: 1200,
        height: 627, 
        alt: `${blogInfo.pageInfo.name}`
      }
     ]
  }}
  twitter={{
    site: `@${site.twitterHandle}`,
    title: `${blogInfo.pageInfo.name}`,
    description: toPlainText(blogInfo.content),
    image: `${site.address}/images/opengraph/index.webp`,
    imageAlt: `${blogInfo.pageInfo.name}!`,
  }}
  jsonLd={{
    "logo": `${site.address}/images/logo.svg`,
    "@context": `http://schema.org`,
    "@type": `WebSite`,
    "name": `${blogInfo.pageInfo.name}`,
    "url": `${site.address}/blog`,
  }}
/>

<section class="bg-gray-blue">
    
  <div class="max-w-7xl mx-auto pt-10 pb-12 px-4 sm:px-6 md:px-8">
    <Breadcrumb current={"Blog"} />
    <div class="md:flex md:justify-between items-end">
    <div class="max-w-3xl pt-8">
        <h2 class="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tighter lg:text-6xl">Birdables Blog <span class="tracking-tight italic text-gray-300 text-4xl">({count} posts)</span></h2>
        <PortableText content={blogInfo.content} class="mt-4 prose-xl text-gray-500" />
        <!-- <div class="mt-5 max-w-md sm:flex sm:justify-center md:mt-8">
          <div class="rounded-md shadow">
            <a href="/blog/categories" rel=prefetch class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md bg-gray-900 text-white hover:bg-beak-600 hover:text-white focus:outline-none focus:border-beak-300 focus:shadow-outline-beak transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10">
              Categories
            </a>
          </div>
          <div class="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
            <a href="/blog/topics" rel=prefetch class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md bg-gray-900 text-white hover:bg-beak-600 hover:text-white focus:outline-none focus:border-beak-300 focus:shadow-outline-beak transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10">
              Topics
            </a>
          </div>
          <div class="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
            <a href="/blog/authors" rel=prefetch class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md bg-gray-900 text-white hover:bg-beak-600 hover:text-white focus:outline-none focus:border-beak-300 focus:shadow-outline-beak transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10">
              Authors
            </a>
          </div>
        </div> -->
    </div>
  </div>
  </div>
</section>

<!-- <BlogHero>
  <h1 slot="heading">{blogInfo.pageInfo.name}</h1>
  <div slot="content">
    <PortableText content={blogInfo.content} class="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl" />
    <div class="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
      <div class="rounded-md shadow">
        <a href="blog/categories" rel=prefetch class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md bg-gray-900 text-white hover:bg-beak-600 hover:text-white focus:outline-none focus:border-beak-300 focus:shadow-outline-beak transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10">
          Categories
        </a>
      </div>
      <div class="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
        <a href="blog/topics" rel=prefetch class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md bg-gray-900 text-white hover:bg-beak-600 hover:text-white focus:outline-none focus:border-beak-300 focus:shadow-outline-beak transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10">
          Topics
        </a>
      </div>
      <div class="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
        <a href="authors" rel=prefetch class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md bg-gray-900 text-white hover:bg-beak-600 hover:text-white focus:outline-none focus:border-beak-300 focus:shadow-outline-beak transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10">
          Authors
        </a>
      </div>
    </div>
  </div>
</BlogHero> -->

<div class="bg-white">
  <section>
    <div class="max-w-7xl mx-auto pt-10 pb-12 px-4 sm:px-6 md:px-8">
      <Posts {posts} {categories} {topics} {count} {currentPage} {perPage} />
    </div>
  </section>
</div>