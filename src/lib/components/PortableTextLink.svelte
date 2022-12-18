<script>
	import Link from '$lib/components/Link.svelte';

	export let portableText;

	$: url = portableText.value.link.link.url;
	$: text = portableText.value.link.title;
</script>

<Link class="" href={url}>{text}</Link>
