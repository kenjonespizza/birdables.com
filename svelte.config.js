// import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-auto';
// import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter()
	},

	preprocess: [
		// preprocess({
		// 	postcss: true
		// })
		vitePreprocess()
	]
};

export default config;
