<script>
  export let stars;
  export let space = 1;
  export let size;
  export let hideEmpty = false;

  let fullStars = [];
  let hollowlStars = [];
  
  for (let i = 0; i < 5; i++) {
    i < stars ? fullStars.push('★') : hollowlStars.push('☆');
  }

  let starSize

  if (size === 'xs') {
    starSize = "h-3 w-3";
  } else if (size === 'sm') {
    starSize = "h-4 w-4";
  } else {
    starSize = "h-5 w-5";
  }
</script>

<div class={`flex items-center space-x-${space}`}>
  {#each fullStars as star}
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" class={`${starSize} flex-shrink-0 text-gray-600`}><path fill="none" d="M0 0h24v24H0z"/><path fill="currentColor" d="M12 18.26l-7.053 3.948 1.575-7.928L.587 8.792l8.027-.952L12 .5l3.386 7.34 8.027.952-5.935 5.488 1.575 7.928z"/></svg>
    
  {/each}
  
  {#if !hideEmpty}
    {#each hollowlStars as star}
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" th="16" height="16" class={`${starSize} flex-shrink-0 text-gray-600`}><path fill="none" d="M0 0h24v24H0z"/><path fill="currentColor" d="M12 18.26l-7.053 3.948 1.575-7.928L.587 8.792l8.027-.952L12 .5l3.386 7.34 8.027.952-5.935 5.488 1.575 7.928L12 18.26zm0-2.292l4.247 2.377-.949-4.773 3.573-3.305-4.833-.573L12 5.275l-2.038 4.42-4.833.572 3.573 3.305-.949 4.773L12 15.968z"/></svg>
    {/each}
  {/if}
</div>