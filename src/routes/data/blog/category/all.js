import client from '$lib/sanityClient'

export async function get () {

    const filter = `*[_type == "category" && defined(pageInfo.slug.current)] | order(desc)`
    const projections = `{
      ...,
      "count": count(*[_type == 'post' && references(^._id)])
    }`
    const query = filter + projections
    const params = ""
    const data = await client.fetch(query , params)

    if (data) {
      return {
        status: 200,
        body: data
      }
    }
};