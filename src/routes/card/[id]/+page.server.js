import { error } from '@sveltejs/kit';
import { fetchAllBirds } from '$lib/birds';
import { returnBirdFromParam } from '$lib/utils';

export async function load({ params }) {
	const bird = returnBirdFromParam(params.id, 'id', fetchAllBirds());

	if (bird) {
		return { bird };
	}

	throw error(400, 'not found');
}
