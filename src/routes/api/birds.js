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
      if (element && element.etsyId) {
        const listing = await returnEtsyListingFromEtsyListingId(element.etsyId);
        // console.log('listing:', listing)
        // Object.assign(element, {listing});
        // console.log('element:', element)
        data[i] = {listing};
        // console.log('dataHERE:', data)
      }
    });

    data.sort((a,b) => {
      const sortBy = 'rarity';
      if (a[sortBy] > b[sortBy]) {return 1}
      if (a[sortBy] < b[sortBy]) {return -1}
      return 0;
    });


      return {
        status: 200,
        body: data
      }

}