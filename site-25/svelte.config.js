import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: '200.html',
			precompress: false,
		strict: true
		}),
		// prerender: {
		// 	default: true,
		// },
		//trailingSlash: 'always',
		paths: {
			base: '/emarrs.github.io'
		}
	// base: '/emarrs.github.io',
	}
};

export default config;
