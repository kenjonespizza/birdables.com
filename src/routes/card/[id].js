import Airtable from 'airtable';

import { variables } from '$lib/variables'

import {returnBirdFromId, returnFormattedBirds} from "$lib/utils"

export async function get({ params }) {
  const { id } = params;
  const base = new Airtable({apiKey: variables.AIRTABLE_API_KEY}).base(variables.AIRTABLE_BASE);
  const records = await base('Birds').select().firstPage();
  const data = returnBirdFromId(id, returnFormattedBirds(records));
  console.log(`Redirecting to: /bird/${data.slug}`);

  if (records) {
    return {
			status: 302,
			headers: { Location:  `/bird/${data.slug}`},
		};
  }
}