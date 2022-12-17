import client from '$lib/sanityClient';

export async function GET({ params }) {
	const postFilter = `*[_type == "post" && pageInfo.slug.current == "${params.post}"][0]`;
	const postProjection = `{
      ...,
      authors[]->{pageInfo, image, _id},
      categories[]->{pageInfo, image, _id},
    }`;

	const postQuery = postFilter + postProjection;
	const data = await client.fetch(postQuery);

	if (data) {
		return {
			status: 200,
			body: data
		};
	}

	return {
		status: 302,
		headers: { Location: `/404` }
	};
}
