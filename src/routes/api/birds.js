import Airtable from 'airtable';

import { variables } from '$lib/variables';
console.log('variables:', variables)

import {returnFormattedBirds} from "$lib/utils"

export async function get() {

    const base = new Airtable({apiKey: variables.AIRTABLE_API_KEY}).base(variables.AIRTABLE_BASE);
  
    const table = base('Birds');
    const records = await table.select({
      view: "Grid view",
      filterByFormula: "{Live On Site} = 1"
    }).firstPage();

    const data = returnFormattedBirds(records);

    data.sort((a,b) => {
      const sortBy = 'rarity';
      if (a[sortBy] > b[sortBy]) {return 1}
      if (a[sortBy] < b[sortBy]) {return -1}
      return 0;
    });

    if (records) {
      return {
        status: 200,
        body: data
      }
    }
}