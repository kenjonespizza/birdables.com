import Airtable from 'airtable';

import {returnFormattedBirds} from "$lib/utils"

export async function get() {

    const base = new Airtable({apiKey: 'keyA5UymJvBOli0cg'}).base('appOhoNbZ8tYXeb6B');
  
    const table = base('Birds');
    const records = await table.select({
      view: "Grid view",
      filterByFormula: "{Live On Site} = 1"
    }).firstPage();

    if (records) {
      return {
        status: 200,
        body: returnFormattedBirds(records)
      }
    }
}