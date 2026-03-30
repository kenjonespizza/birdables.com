import Airtable from 'airtable';
import { variables } from '$lib/variables';
import { returnFormattedBirds } from '$lib/utils';

function getBase() {
	return new Airtable({ apiKey: variables.AIRTABLE_API_KEY }).base(variables.AIRTABLE_BASE);
}

let liveBirdsPromise = null;
let allBirdsPromise = null;

export function fetchLiveBirds() {
	if (!liveBirdsPromise) {
		liveBirdsPromise = getBase()('Birds')
			.select({ view: 'Grid view', filterByFormula: '{Live On Site} = 1' })
			.firstPage()
			.then(returnFormattedBirds);
	}
	return liveBirdsPromise;
}

export function fetchAllBirds() {
	if (!allBirdsPromise) {
		allBirdsPromise = getBase()('Birds')
			.select()
			.firstPage()
			.then(returnFormattedBirds);
	}
	return allBirdsPromise;
}
