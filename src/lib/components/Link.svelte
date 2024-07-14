<script>
	import { checkIfInternalURL, returnEntireSlug } from '$lib/utils';
	import ExternalLink from '$lib/components/ExternalLink.svelte';

	let className;

	export { className as class };

	export let href = null;
	export let title = '';
	export let text = '';
	export let noscroll = undefined;

	const isInternal = checkIfInternalURL(href);
</script>

{#if isInternal}
	<a
		class={className}
		href={`${returnEntireSlug(href)}`}
		title={title || ''}
		data-sveltekit-preload-data="hover"
		sveltekit:noscroll={noscroll}
	>
		<slot>{text !== '' ? text : href}</slot>
	</a>
{:else}
	<ExternalLink class={className ? className : undefined} {href} {title}>
		<slot>{text !== '' ? text : href}</slot>
	</ExternalLink>
{/if}
