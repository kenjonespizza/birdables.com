<script>
	import { PortableText } from '@portabletext/svelte';
	import PortableTextLink from '$lib/components/PortableTextLink.svelte';

	let className;
	export let content = [];

	export { className as class };
</script>

<div class={className}>
	<PortableText
		value={content}
		components={{
			marks: {
				link: PortableTextLink
			}
		}}
	/>
</div>
