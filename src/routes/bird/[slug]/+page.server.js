import { error } from '@sveltejs/kit';
import { fetchAllBirds } from '#lib/birds.js';
import { returnBirdFromParam } from '#lib/utils.js';

export const prerender = true;

export function entries() {
	const birds = fetchAllBirds();
	return birds.map((bird) => ({ slug: bird.slug }));
}

export async function load({ params }) {
	const birds = fetchAllBirds();
	const bird = returnBirdFromParam(params.slug, 'slug', birds);

	if (bird) {
		return { bird };
	}

	throw error(404, 'Not found');
}
