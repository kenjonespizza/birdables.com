import { error } from '@sveltejs/kit';
import { fetchAllBirds } from '$lib/airtable';
import { returnBirdFromParam } from '$lib/utils';

export const prerender = true;

export async function entries() {
	const birds = await fetchAllBirds();
	return birds.map((bird) => ({ slug: bird.slug }));
}

export async function load({ params }) {
	const birds = await fetchAllBirds();
	const bird = returnBirdFromParam(params.slug, 'slug', birds);

	if (bird) {
		return { bird };
	}

	throw error(404, 'Not found');
}
