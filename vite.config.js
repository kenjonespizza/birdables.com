// import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-auto';

// import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [
		tailwindcss(),
		sveltekit({
			preprocess: [
				// preprocess({
				// 	postcss: true
				// })
				vitePreprocess()
			],
			adapter: adapter()
		})
	]
});
