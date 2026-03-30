import { error } from '@sveltejs/kit';
import { fetchLiveBirds } from '$lib/airtable';

export const prerender = true;

export async function load() {
	const cards = await fetchLiveBirds();

	if (cards) {
		return { cards };
	}

	throw error(404, 'Not found');
}
