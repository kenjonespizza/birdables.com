<script>
  import {checkIfInternalURL, returnEntireSlug} from '$lib/utils';
  import ExternalLink from '$lib/components/ExternalLink.svelte';

  let { class: className, href = null, title = '', text = '', noscroll = undefined, children } = $props();

  const isInternal = checkIfInternalURL(href)
</script>

{#if isInternal}
  <a class={className} href={`${returnEntireSlug(href)}`} title={title || ""} data-sveltekit-preload-data data-sveltekit-noscroll={noscroll}>
    {#if children}{@render children()}{:else}{text !== '' ? text : href}{/if}
  </a>
{:else}
  <ExternalLink class={className ? className : undefined} href={href} title={title}>
    {#if children}{@render children()}{:else}{text !== '' ? text : href}{/if}
  </ExternalLink>
{/if}