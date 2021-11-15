<script context="module">
  import { base } from '$app/paths';

  export async function load({page, fetch}) {
    const url = `${base}/api/author/all`;
    const res = await fetch(url)
    const authors = await res.json()
    if (res) {
			return {
				props: {
					authors: authors.authors
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
  import {assets} from '$app/paths'
  import BlogHero from '$lib/components/Blog/BlogHero.svelte'
  import Link from '$lib/components/Link.svelte'
  import { urlFor } from '$lib/sanity-image-url'

  export let authors
  console.log('authors:', authors)
  // export let blogInfo
</script>

<svelte:head>
  <title>Authors</title>
</svelte:head>

<BlogHero>
  <h1 slot="heading"><a class="underline" href="blog" rel=prefetch>Blog</a> / Authors</h1>
</BlogHero>

<div class="bg-white">
  <div class="mx-auto py-12 px-4 max-w-screen-xl sm:px-6 lg:px-8 lg:py-24">
    <div class="space-y-12">
      <ul class="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8">
        {#each authors as author}
        <li>
          <Link href={`/author/${author.pageInfo.slug.current}`} class="space-y-4">
            <div class="aspect-w-1 aspect-h-1">
              <img loading=lazy class="object-cover shadow-lg rounded-lg" src={author.image ? urlFor(author.image.asset).width(600).quality(80) : `${assets}/images/userImageNotFound.png`} alt={author.pageInfo.name}>
            </div>

            <div class="space-y-2">
              <div class="text-lg leading-6 font-medium space-y-1">
                <h4>{author.pageInfo.name}</h4>
                {#if author.position}
                  <p class="text-gray-600">{author.position}</p>
                {/if}
              </div>
            </div>
          </Link>
        </li>
        {/each}
      </ul>
    </div>
  </div>
</div>
