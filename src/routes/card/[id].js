import Airtable from 'airtable';

import {returnBirdFromId, returnFormattedBirds} from "$lib/utils"

export async function get({ params }) {
  const { id } = params;
  console.log('params:', params)
  const base = new Airtable({apiKey: 'keyA5UymJvBOli0cg'}).base('appOhoNbZ8tYXeb6B');
  const records = await base('Birds').select().firstPage();
  const data = returnBirdFromId(id, returnFormattedBirds(records));
  console.log('data:', data)

  if (records) {
    return {
			status: 302,
			headers: { Location:  `/bird/${data.slug}`},
		};
  }
}