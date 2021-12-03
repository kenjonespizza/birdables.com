<script context="module">
  import { base } from '$app/paths';
  export async function load({page, fetch}) {
    const url = `${base}/api/blog/${page.params.post}`;
    const res = await fetch(url)
    const post = await res.json();

    if (res) {
			return {
				props: {
          post
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
// import BlockContent from "../../components/BlockContent.svelte";
import Link from "$lib/components/Link.svelte";
import { slugify } from "$lib/utils";
import { urlFor } from "$lib/sanity-image-url"
import PortableText from '$lib/components/PortableText.svelte';
import Breadcrumb from '$lib/components/Breadcrumb.svelte';

export let post;
const { authors } = post;
const layout = "A";
let y;
let outerHeight;
let outerWidth;
let scrollGeneratedClasses;

function scrolling(e) {
	const percentScrolled = y / outerHeight * 100;

	if (percentScrolled > 70) {
		scrollGeneratedClasses = "pointer-events-none";
	} else {
		scrollGeneratedClasses = "pointer-events-auto";
	}
}
</script>

<svelte:head>
  <title>{post.pageInfo.name}</title>
</svelte:head>

<svelte:window bind:scrollY={y} bind:outerHeight={outerHeight} bind:outerWidth={outerWidth}  on:scroll={scrolling}/>

{#if layout === "A"}
<section class="bg-gray-blue">
  <div class="relative px-4 sm:px-6 lg:px-8">
    <div class="max-w-7xl mx-auto pt-10 pb-[calc(80rem/(16/9)/2)] px-4 sm:px-6 md:px-8">
      <Breadcrumb current={post.pageInfo.name} steps={[{title:"Blog", link:"/blog"}]} />
      <div class="md:flex md:justify-between items-end">
        <div class="max-w-3xl pt-8">
          <h1 class="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tighter lg:text-6xl">{post.pageInfo.name}</h1>

          <PortableText class="my-4 prose-xl text-gray-500 " content={post.shortText} />

          <div class="">
            <div class="flex items-center space-x-3">
              <div class="flex flex-shrink-0 -space-x-1">


                {#each authors as author, i }
                  {#if author.image}
                  <a class={`overflow-hidden max-w-none h-12 w-12 rounded-full text-white border-3 border-gray-blue ${i > 0 && "-translate-x-2"}`} href={`/blog/author/${author.pageInfo.slug.current}`} title={author.pageInfo.name} >
                    <img class={``} src={author.image ? urlFor(author.image).quality(80).size(80, 80) : "/images/userImageNotFound.png"} alt={author.pageInfo.name}>
                  </a>
                  {/if}
                {/each}
              </div>
              <div class="w-auto">
                <p class="text-sm leading-5 font-medium text-gray-700">
                  By: 
                  {#each authors as author, i }
                    <a href={`/blog/author/${author.pageInfo.slug.current}`} class="text-gray-900 underline">{author.pageInfo.name}</a>{ i + 2 === authors.length && authors.length > 1 ? " and " : i + 1 !== authors.length && authors.length > 1 ? ", " : ""}
                  {/each}
                  {#if post.categories && post.categories.length > 0}
                    In: 
                    {#each post.categories as category, i }
                      <a href={`/blog/category/${category.pageInfo.slug.current}`} class="text-gray-900 underline">{category.pageInfo.name}</a>{ i + 2 === post.categories.length && post.categories.length > 1 ? " and " : i + 1 !== post.categories.length && post.categories.length > 1 ? ", " : ""}
                    {/each}
                  {/if}
                  {#if post.readTime}
                    · {post.readTime} minute read
                  {/if}
                </p>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
      </section>
      <div class="max-w-7xl mx-auto  pb-12 px-4 sm:px-6 md:px-8 transform mt-[calc(-80rem/(16/9)/2)]">
        {#if post.image}
        <div class="aspect-w-16 aspect-h-9 my-10 drop-shadow-card rounded-2xl overflow-hidden">
          <img loading=lazy class="object-cover h-full w-full" src={urlFor(post.image.asset).quality(80).width(2000)} alt={post.pageInfo.name}>
        </div>
        {/if}

        <PortableText class="prose text-gray-500 mx-auto prose-sm sm:prose md:prose-m sm:text-gray-500 md:text-gray-500 lg:text-gray-500 lg:prose-lg xl:text-gray-500 xl:prose-xl" content={post.body} />
    
        <div class=" container max-w-[65ch] mx-auto px-0 mt-8 sm:text-md md:text-md lg:text-lg xl:text-xl ">

          {#if post.topics}
            <div class="flex items-start justify-start flex-col space-y-4 sm:space-y-0 sm:flex-row sm:space-x-4">
              {#each post.topics as topic }
                <a href={`/blog/topic/${slugify(topic)}`} sveltekit:prefetch class="capitalize inline-flex items-center px-2.5 py-2 rounded-md text-sm md:text-md lg:text-lg xl:text-xl font-medium leading-5 bg-gray-600 text-white">
                  <svg class="-ml-0.5 mr-1.5 h-3 w-3 text-gray-100" fill="currentColor" viewBox="0 0 20 20">
                    <path fill="none" d="M0 0h24v24H0z"/><path d="M7.784 14l.42-4H4V8h4.415l.525-5h2.011l-.525 5h3.989l.525-5h2.011l-.525 5H20v2h-3.784l-.42 4H20v2h-4.415l-.525 5h-2.011l.525-5H9.585l-.525 5H7.049l.525-5H4v-2h3.784zm2.011 0h3.99l.42-4h-3.99l-.42 4z"/>
                  </svg>

                  {topic}
                </a>
              {/each}
            </div>
          {/if}
        </div>
      </div>
{:else}
  <div class="relative py-16 bg-white overflow-hidden">
    <div class="absolute h-2/6 bg-gray-blue -inset-0"></div>
      <div class="w-screen h-screen flex"></div>
      <div class={`${scrollGeneratedClasses} fixed top-0 left-0 w-screen h-screen flex`}>
        <div class="postImage w-1/2 h-screen bg-white shadow-2xl" style="transform: translateX(-{y / (outerHeight * 0.7) * 100}%);">
          {#if post.image && post.image}
            <img loading=lazy class="h-full w-full object-cover object-center" src={urlFor(post.image).quality(80).width(2000)} alt={post.image.alt}>
          {/if}
        </div>
        <div class="postTitle w-1/2 h-full bg-gray-600 flex flex-col justify-center p-20 shadow-2xl" style="transform: translateX({y / (outerHeight * 0.7) * 100}%);">
          <h1 class="w-full mt-2 mb-8 text-3xl leading-tight font-extrabold tracking-tight text-white sm:text-5xl lg:w-2/3">{post.pageInfo.name}</h1>

          <PortableText class="text-xl text-white opacity-75 leading-8 " content={post.shortText} />

          <div class="my-8">
            <p class="text-sm leading-5 font-medium text-white">
              By: 
              {#each authors as author, i }
                <Link ref={author._id} classes="text-white underline">{author.pageInfo.name}</Link>{ i + 2 === authors.length && authors.length > 1 ? " and " : i + 1 !== authors.length && authors.length > 1 ? ", " : ""}
              {/each}
            </p>
          </div>

          <div class="flex-shrink-0 group block focus:outline-none">
            <div class="flex items-center flex-wrap">
              <div class="flex relative z-0 overflow-hidden">
                {#each authors as author, i }
                  <Link classes={`${i > 0 ? "-ml-3" : ""} inline-block`} ref={author._id} title={author.pageInfo.name} >
                    <img class={"relative h-12 w-12 rounded-full text-white border-3 border-white object-cover object-center"} src={author.image ? urlFor(author.image).quality(80).size(80, 80) : "/images/userImageNotFound.png"} alt={author.pageInfo.name}>
                  </Link>
                {/each}
              </div>
            </div>
          </div>


        </div>
      </div>
    </div>
    {/if}

    
