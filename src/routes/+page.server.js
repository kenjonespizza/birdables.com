import { error } from '@sveltejs/kit';
import { fetchLiveBirds } from '$lib/birds';

export const prerender = true;

export async function load() {
	const cards = fetchLiveBirds();

	if (cards) {
		return { cards };
	}

	throw error(404, 'Not found');
}
