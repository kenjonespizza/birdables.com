import { createClient } from '@sanity/client';

const client = createClient({
	projectId: 'pdzqg4pl',
	dataset: 'production',
	apiVersion: '2024-06-11', // use current UTC date - see "specifying API version"!
	token: '', // or leave blank for unauthenticated usage
	useCdn: false // `false` if you want to ensure fresh data
});

export default client;
