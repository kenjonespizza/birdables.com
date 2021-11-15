<script>
  import Link from "$lib/components/Link.svelte";
  // import BlockContent from "$lib/components/BlockContent.svelte";
  import { truncate, toPlainText } from "$lib/utils";
  import { urlFor } from '$lib/sanity-image-url'

  export let post;
</script>

<div>
<Link href={`/blog/${post.pageInfo.slug.current}`} class="block">
    {#if post.image}
    <div class="aspect-w-4 aspect-h-3 mb-4 shadow-lg rounded-lg overflow-hidden">
      <img loading=lazy class="object-cover" src={urlFor(post.image.asset).quality(80).width(822)} alt={post.pageInfo.name}>
    </div>
    {/if}
    <p class="text-sm leading-5 text-gray-500">
      <time datetime={new Date(post.publishedAt)}>{new Date(post.publishedAt).toDateString()}</time>
    </p>
    <h3 class="mt-2 text-xl leading-7 font-semibold text-gray-900">
      {post.pageInfo.name}
    </h3> 
      {#if post.excerpt }
        <!-- <BlockContent content={post.excerpt} classes="mt-3 text-base leading-6 text-gray-500" /> -->
      {:else}
        <p class="mt-3 text-base leading-6 text-gray-500">
          {truncate(toPlainText(post.body))}
        </p>
      {/if}
      </Link>
  <div class="mt-3">
    <Link href={`/${post.pageInfo.slug.current}`} class="text-base leading-6 underline font-semibold text-indigo-600 hover:text-indigo-500 transition ease-in-out duration-150">
      Read post
    </Link>
  </div>
</div>