import client from '$lib/sanityClient';
import { postPerPage } from './utils';
import { massageTopics } from '$lib/utils';

export async function get() {
	let perPage = postPerPage; // ToDo, consider setting this in sanity, but then we'll need to do an additional API call first to get that value
	let currentPage = 1;

	const filter = `*[][0]`;
	const projection = `{
      "posts": *[_type == "post" && defined(pageInfo.slug.current)] | order(publishedAt desc),
      "blogInfo": *[_type == "blog"][0]{...},
      "categories": *[_type == "category"]{
        _id,
        pageInfo,
        "count": count(*[_type == 'post' && references(^._id)])
      },
      "topics": *[_type == "post" && defined(topics)] {
        topics
      },
      "count": count(*[_type == 'post'])
    }`;

	const query = filter + projection;
	const params = { perPage };
	const results = await client.fetch(query, params);
	const { posts, count, blogInfo, categories, topics: allTopics } = results;
	let topics = massageTopics(allTopics);

	return {
		status: 200,
		body: { posts, currentPage, perPage, count, blogInfo, categories, topics }
	};
}
