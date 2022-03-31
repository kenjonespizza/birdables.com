// require("dotenv").config();
// var Airtable = require('airtable');
// var base = new Airtable({apiKey: process.env.VITE_AIRTABLE_API_KEY}).base(process.env.VITE_AIRTABLE_BASE);

// exports.handler = async function(event) {
//   const body = JSON.parse(event.body);
//   if (body.id)
//   base('Notifyees').destroy(body.id, function(err, deletedRecord) {
//     if (err) {
//       console.error(err);
//       return {
//         statusCode: 200,
//         body: "failure"
//       };
//     }
//     console.log('Deleted record', deletedRecord.id);
//   });
//   return {
//     statusCode: 200,
//     body: "success"
//   }
// }

import Airtable from 'airtable';
export const base = new Airtable({ apiKey: process.env.VITE_AIRTABLE_API_KEY }).base(
	process.env.VITE_AIRTABLE_BASE
);

export default async function handler(request, response) {
  const body = JSON.parse(request.body);
  console.log('body:', body)
	if (body.id) {
    base('Notifyees').destroy(body.id, function (err, deletedRecord) {
			if (err) {
        console.log('err.message:', err.message)
				if (err.message === "Could not find what you are looking for") {
          response.status(200).json({ message: 'success' });
          console.log("Record not in DB, so can't be deleted... Success?: ", deletedRecord.id);
          return
        } else {
          response.status(500).json({ message: 'failure' });
          return
        }
			} else {
				response.status(200).json({ message: 'success' });
				console.log('Deleted record', deletedRecord.id);
        return
			}
		});
  } else {
    console.error("ERROR: No ID provided");
		response.status(500).json({ message: 'failure - No ID Provided' });
  }
  
}