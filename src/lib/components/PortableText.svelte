<script>
  import PortableText from '@portabletext/svelte'

  let className

  export { className as class };
</script>

<div class={className}>
  <PortableText
    blocks={[
      // Portable Text array ...
    ]}
  />
</div>