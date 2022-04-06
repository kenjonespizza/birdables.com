import Airtable from 'airtable';
import { variables } from '$lib/variables';
import {returnBirdFromParam, returnFormattedBirds} from "$lib/utils"

export async function get({ params }) {
  const { id } = params;
  const base = new Airtable({apiKey: variables.AIRTABLE_API_KEY}).base(variables.AIRTABLE_BASE);
  const records = await base('Birds').select().firstPage();
  const data = returnBirdFromParam(id, 'id', returnFormattedBirds(records));
  console.log('data:', data)

  base('Birds').update(
		[
			{
				id: data._id,
				fields: {
					'QR Scans': data.scans + 1
				}
			}
		],
		function (err, records) {
			if (err) {
				console.error(err);
				return;
			}
			records.forEach(function (record) {
				console.log(
					`${record.get('Bird Name')} QR scanned and updated from ${data.scans} to ${record.get('QR Scans')}`
				);
			});
		}
	);

  if (data) {
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