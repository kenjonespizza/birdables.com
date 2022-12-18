import { error } from '@sveltejs/kit';
import Airtable from 'airtable';

import { variables } from '$lib/variables';

import { returnFormattedBirds } from '$lib/utils';

export async function load() {
	const base = new Airtable({ apiKey: variables.AIRTABLE_API_KEY }).base(variables.AIRTABLE_BASE);
	const table = base('Birds');
	const records = await table
		.select({
			view: 'Grid view',
			filterByFormula: '{Live On Site} = 1'
		})
		.firstPage();

	const cards = returnFormattedBirds(records);

	if (cards) {
		return { cards };
	}

	throw error(404, 'Not found');
}
