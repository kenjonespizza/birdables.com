require("dotenv").config();
const formattedReturn = require('./helpers/formattedReturn');
const {base} = require('./helpers/airtableBase');

exports.handler = async function(event) {
    const table = base('Notifyees');    
    const body = JSON.parse(event.body);
    const newRecord = body.type === "email" ? {
        "Email Address": body.data,
      } : {
        "Phone Number": body.data,
      }
    try {
      // Todo: See if record already exists
        const createdNotifyee = await table.create(newRecord);
        console.log("Notifyee Successfully Created:", createdNotifyee.fields)
        return formattedReturn(200, createdNotifyee);
    } catch (err) {
        console.error(err);
        return formattedReturn(500, {});
    }
};
