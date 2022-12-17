<script context="module">
	import { base } from '$app/paths';

	export async function load({ params, fetch }) {
		const res = await fetch(`${base}/data/blog/author/${params.author}`);
		const { authorData, posts, count, currentPage, perPage } = await res.json();
		const author = authorData;

		if (!authorData.posts || (authorData.posts.length === 0 && page > 1)) {
			return { status: 404 };
		}

		if (res) {
			return {
				props: { author, posts, count, currentPage, perPage }
			};
		}

		return {
			status: res.status,
			error: new Error().message
		};
	}
</script>

<script>
	import SEO from 'svelte-seo';

	import site from '$lib/info';
	import Posts from '$lib/components/blog/Posts.svelte';
	import PortableText from '$lib/components/PortableText.svelte';
	import Breadcrumb from '$lib/components/Breadcrumb.svelte';
	import { toPlainText, truncate } from '$lib/utils';
	import { urlFor } from '$lib/sanity-image-url';

	export let author;
	export let currentPage;
	export let perPage;
	export let posts;
	export let count;
</script>

<SEO
	title={`${author.pageInfo.name} | ${author.position}`}
	description={`${truncate(toPlainText(author.bio, 160))}`}
	keywords={author.pageInfo.name}
	openGraph={{
		title: `${author.pageInfo.name} | ${author.position}`,
		description: truncate(toPlainText(author.bio, 160)),
		url: `${site.address}/blog/author/${author.pageInfo.slug.current}`,
		type: 'website',
		images: [
			{
				url: `${urlFor(author.image.asset).quality(80).width(1200)}`,
				width: 1200,
				height: 627,
				alt: `${author.pageInfo.name}`
			}
		]
	}}
	twitter={{
		site: `@${site.twitterHandle}`,
		title: `${author.pageInfo.name} | ${author.position}`,
		description: truncate(toPlainText(author.bio, 160)),
		image: `${urlFor(author.image.asset).quality(80).width(1200)}`,
		imageAlt: `${author.pageInfo.name}!`
	}}
	jsonLd={{
		logo: `${site.address}/images/logo.svg`,
		'@context': `http://schema.org`,
		'@type': `WebSite`,
		name: `${author.pageInfo.name} | ${author.position}`,
		url: `${site.address}/blog/author/${author.pageInfo.name}`
	}}
/>

<section class="bg-gray-blue">
	<div class="max-w-7xl mx-auto pt-10 pb-12 px-4 sm:px-6 md:px-8">
		<Breadcrumb
			current={author.pageInfo.name}
			steps={[
				{ title: 'Blog', link: '/blog' },
				{ title: 'Authors', link: '/blog/authors' }
			]}
		/>
		<div class="md:flex md:justify-between items-end">
			<div class="flex space-x-10 pt-8">
				<img
					loading="lazy"
					class="w-96 drop-shadow-card rounded-lg"
					src={urlFor(author.image).quality(80).size(400, 500)}
					alt={author.pageInfo.name}
				/>

				<div>
					<h2
						class="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tighter lg:text-6xl"
					>
						{author.pageInfo.name}
						<span class="tracking-tight italic text-gray-500 text-4xl">{author.position}</span>
					</h2>
					<PortableText content={author.bio} class="mt-4 prose-xl text-gray-500" />
				</div>
			</div>
		</div>
	</div>
</section>

<div class="bg-white">
	<div class="mx-auto py-6 px-4 max-w-screen-xl sm:px-6 lg:px-8 lg:py-10">
		<Posts {posts} {count} {currentPage} {perPage}>
			<h2
				slot="topText"
				class="pb-6 text-lg leading-9 tracking-tight font-medium text-gray-900 sm:text-xl sm:leading-10"
			>
				Posts by: <span class="text-gray-500 italic">{author.pageInfo.name} ({count})</span>
			</h2>
		</Posts>
	</div>
</div>
