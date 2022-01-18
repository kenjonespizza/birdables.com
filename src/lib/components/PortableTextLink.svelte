<script>
  import Link from "$lib/components/Link.svelte"

  export let portableText

  $: url = portableText.mark.link.link.url
  $: text = portableText.span.text
</script>

<Link class="" href={url}>{text}</Link>