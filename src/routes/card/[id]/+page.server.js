import { error } from '@sveltejs/kit';
import Airtable from 'airtable';
import { variables } from '$lib/variables';
import { returnBirdFromParam, returnFormattedBirds } from '$lib/utils';

export async function load({ params }) {
	const { id } = params;
	const base = new Airtable({ apiKey: variables.AIRTABLE_API_KEY }).base(variables.AIRTABLE_BASE);
	const records = await base('Birds').select().firstPage();
	const data = returnBirdFromParam(id, 'id', returnFormattedBirds(records));

	base('Birds').update(
		[
			{
				id: data._id,
				fields: {
					'QR Scans': data.scans + 1
				}
			}
		],
		function (err) {
			if (err) {
				console.error(err);
				return;
			}
		}
	);

	if (bird && record) {
		return bird;
	} else {
		throw error(400, 'not found');
	}
}
