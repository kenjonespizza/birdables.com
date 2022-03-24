require("dotenv").config();
var Airtable = require('airtable');
var base = new Airtable({apiKey: process.env.VITE_AIRTABLE_API_KEY}).base(process.env.VITE_AIRTABLE_BASE);

exports.handler = async function(event) {
  const body = JSON.parse(event.body);
  if (body.id)
  base('Notifyees').destroy(body.id, function(err, deletedRecord) {
    if (err) {
      console.error(err);
      return {
        statusCode: 200,
        body: "failure"
      };
    }
    console.log('Deleted record', deletedRecord.id);
  });
  return {
    statusCode: 200,
    body: "success"
  }
}