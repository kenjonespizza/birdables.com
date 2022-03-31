require('dotenv').config();
const Airtable = require('airtable');
console.log('process.env.AIRTABLE_API_KEY:', process.env.AIRTABLE_API_KEY)
export const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(process.env.AIRTABLE_BASE);
