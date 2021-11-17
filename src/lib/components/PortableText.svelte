<script>
  import PortableText from '@portabletext/svelte'

  let className
  export let content = []

  export { className as class };
</script>

<div class={className}>
  <PortableText
    blocks={
      content
    }
  />
</div>