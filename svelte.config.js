import preprocess from 'svelte-preprocess';
// import adapter from '@sveltejs/adapter-static';
import vercel from '@sveltejs/adapter-vercel';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// adapter: adapter({
		// 	pages: 'build',
		// 	assets: 'build',
		// 	fallback: null,
		//   precompress: true,
		// })
		adapter: vercel()
	},

	preprocess: [
		preprocess({
			postcss: true
		})
	]
};

export default config;
