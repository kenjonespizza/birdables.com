import { browser } from '$app/environment';
import { env } from '$env/dynamic/public';
import posthog from 'posthog-js';

console.log('env:', env);
export const load = async () => {
	if (browser) {
		console.log('env.PUBLIC_POSTHOG_KEY:', env.PUBLIC_POSTHOG_KEY);
		posthog.init(env.PUBLIC_POSTHOG_KEY, {
			api_host: 'https://us.i.posthog.com',
			person_profiles: 'always'
		});
	}
	return;
};
