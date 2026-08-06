import js from '@eslint/js';
import svelte from 'eslint-plugin-svelte';
import prettier from 'eslint-config-prettier';
import svelteParser from 'svelte-eslint-parser';
import globals from 'globals';

export default [
	js.configs.recommended,
	...svelte.configs.recommended,
	prettier,
	{
		languageOptions: {
			ecmaVersion: 2023,
			sourceType: 'module',
			globals: {
				...globals.browser,
				...globals.node,
				...globals.es2021
			}
		}
	},
	{
		files: ['**/*.svelte'],
		languageOptions: {
			parser: svelteParser,
			parserOptions: {
				parser: js,
				extraFileExtensions: ['.svelte']
			}
		}
	},
	{
		ignores: [
			'.DS_Store',
			'node_modules/**',
			'.svelte-kit/**',
			'package/**',
			'build/**',
			'functions/**',
			'static/secret/**',
			'.env*',
			'etsy_shop_json.txt',
			'.netlify/**',
			'.vercel_build_output/**',
			'.vercel/**',
			'.claude/settings.local.json',
			'pnpm-lock.yaml'
		]
	}
];
