// const formattedReturn = require('./helpers/_formattedReturn');
// import base from './helpers/_airtableBase';
import Airtable from 'airtable';
export const base = new Airtable({ apiKey: process.env.VITE_AIRTABLE_API_KEY }).base(
	process.env.VITE_AIRTABLE_BASE
);


// exports.handler = async function(event) {
//     const table = base('Notifyees');    
//     const body = JSON.parse(event.body);
//     const newRecord = body.type === "email" ? {
//         "Email Address": body.data,
//       } : {
//         "Phone Number": body.data,
//       }
//     try {
//       // Todo: See if record already exists
//         const createdNotifyee = await table.create(newRecord);
//         console.log("Notifyee Successfully Created:", createdNotifyee.fields)
//         return formattedReturn(200, createdNotifyee);
//     } catch (err) {
//         console.error(err);
//         return formattedReturn(500, {});
//     }
// };

export default async function handler(request, response) {

  const table = base('Notifyees');
  const body = JSON.parse(request.body);
  const newRecord =
    body.type === 'email'
      ? {
          'Email Address': body.data
        }
      : {
          'Phone Number': body.data
        };
  try {
    // Todo: See if record already exists
    const createdNotifyee = await table.create(newRecord);
    console.log('Notifyee Successfully Created:', createdNotifyee.fields);
    // return formattedReturn(200, createdNotifyee);
    return response.status(200).json(createdNotifyee);
  } catch (err) {
    console.error(err);
    // return formattedReturn(500, {});
    return response.status(500).json({err: "err.message"});
  }


	// response.status(200).json({
	// 	body: request.body,
	// 	query: request.query,
	// 	cookies: request.cookies
	// });
}