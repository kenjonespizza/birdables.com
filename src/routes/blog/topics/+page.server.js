import { json } from '@sveltejs/kit';
import client from '$lib/sanityClient';
import { massageTopics } from '$lib/utils';

export async function load() {
	const constraints = `*[_type == "post" && defined(topics)]`;
	const projections = `{
      topics,
      "count": count(topics)
    }`;
	const query = constraints + projections;
	const topicsResults = await client.fetch(query);
	let topics = massageTopics(topicsResults);

	return { topics };
}
