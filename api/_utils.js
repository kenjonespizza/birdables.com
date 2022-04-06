require('dotenv').config();
const Airtable = require('airtable');
export const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(
	process.env.AIRTABLE_BASE
);
