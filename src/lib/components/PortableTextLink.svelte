<script>
  // import {MarkProps} from '@portabletext/svelte'
  import Link from "$lib/components/Link.svelte"

  export let portableText
  // console.log('portableText:', portableText)

  $: url = portableText.mark.link.link.url
  $: text = portableText.span.text
</script>

<Link class="" href={url}>{text}</Link>