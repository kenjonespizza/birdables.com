import Airtable from 'airtable';
export const base = new Airtable({ apiKey: process.env.VITE_AIRTABLE_API_KEY }).base(
	process.env.VITE_AIRTABLE_BASE
);