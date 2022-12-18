import { error } from '@sveltejs/kit';
import Airtable from 'airtable';
import { variables } from '$lib/variables';
import { returnBirdFromParam, returnFormattedBirds } from '$lib/utils';

export async function load({ params }) {
	const { slug } = params;
	const base = new Airtable({ apiKey: variables.AIRTABLE_API_KEY }).base(variables.AIRTABLE_BASE);
	const records = await base('Birds').select().firstPage();
	const bird = returnBirdFromParam(slug, 'slug', returnFormattedBirds(records));
	// console.log('bird:', bird);

	if (bird && records) {
		return { bird };
	} else {
		throw error(400, 'not found');
	}
}
