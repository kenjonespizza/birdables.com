<script>
	import BlogFilters from '$lib/components/blog/BlogFilters.svelte';
	import Post from '$lib/components/blog/Post.svelte';
	import Pagination from '$lib/components/Pagination.svelte';

	export let posts = [];
	export let categories = [];
	export let topics = [];
	export let count;
	export let currentPage;
	export let perPage;
	export let currentCategory;
	export let currentTopic;
	export let paginationSlug = 'blog/page';
</script>

{#if posts.length > 0}
	<div class="">
		<BlogFilters {categories} {topics} {currentCategory} {currentTopic} />
		<slot name="topText" />
		<div class="mb-6 grid gap-16 lg:grid-cols-2 lg:col-gap-5 lg:row-gap-12">
			{#each posts as post}
				<Post {post} />
			{/each}
		</div>
		<Pagination totalResults={count} slug={paginationSlug} {currentPage} {perPage} />
	</div>
{:else}
	<div class="">
		<div class="bg-white overflow-hidden shadow rounded-lg">
			<div class="px-4 py-5 sm:p-6">
				<p class="text-sm leading-5 text-gray-500 text-center">
					Sorry, no blog posts to show 😭. <a href="/" class="underline">Go to the Homepage</a>
				</p>
			</div>
		</div>
	</div>
{/if}
