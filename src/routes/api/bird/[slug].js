import Airtable from 'airtable';

import { variables } from '$lib/variables';
// console.log('variables:', variables)

import {returnBirdFromParam, returnFormattedBirds} from "$lib/utils"

export async function get({ params }) {
  const { slug } = params;
  const base = new Airtable({apiKey: variables.AIRTABLE_API_KEY}).base(variables.AIRTABLE_BASE);
  const records = await base('Birds').select().firstPage();
  const data = returnBirdFromParam(slug, 'slug' ,returnFormattedBirds(records));

  if (data) {
    // const listing = await returnEtsyListingFromEtsyListingId(data.etsyId);
    // Object.assign(data, {listing});
  
    if (records) {
      return {
        status: 200,
        body: data,
      }
    }
  }

  return {
    status: 302,
    headers: { Location:  `/404`},
  };
}