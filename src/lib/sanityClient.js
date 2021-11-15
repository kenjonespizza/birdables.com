import sanityClient from '@sanity/client';

const client = sanityClient({
  projectId: 'pdzqg4pl',
  dataset: 'production',
  apiVersion: '2021-10-14', // use current UTC date - see "specifying API version"!
  token: '', // or leave blank for unauthenticated usage
  useCdn: false, // `false` if you want to ensure fresh data
})

export default client