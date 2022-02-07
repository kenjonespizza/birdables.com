import Airtable from 'airtable';

import { variables } from '$lib/variables';

import {returnFormattedBirds, returnEtsyListingFromEtsyListingId} from "$lib/utils"

export async function get() {
  const base = new Airtable({apiKey: variables.AIRTABLE_API_KEY}).base(variables.AIRTABLE_BASE);
  const table = base('Birds');
  const records = await table.select({
    view: "Grid view",
    filterByFormula: "{Live On Site} = 1"
  }).firstPage();

  const data = returnFormattedBirds(records);

  data.forEach(async (element, i)  => {
    // if (element && element.etsyId) {
    //   const listing = await returnEtsyListingFromEtsyListingId(element.etsyId);
    //   data[i] = {listing};
    // }
  });

  return {
    status: 200,
    body: data
  }
}