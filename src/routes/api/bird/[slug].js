import Airtable from 'airtable';

import { variables } from '$lib/variables';

import {returnBirdFromSlug, returnFormattedBirds, returnEtsyImagesFromEtsyListingId, addDataToBirdArr} from "$lib/utils"

export async function get({ params }) {
  const { slug } = params;
  const base = new Airtable({apiKey: variables.AIRTABLE_API_KEY}).base(variables.AIRTABLE_BASE);
  const records = await base('Birds').select().firstPage();
  const dataPreImages = returnBirdFromSlug(slug, returnFormattedBirds(records));
  const EtsyImages = await returnEtsyImagesFromEtsyListingId(dataPreImages.etsyId);
  const data = addDataToBirdArr('images', EtsyImages, dataPreImages);

  if (records) {
    return {
      status: 200,
      body: data,
    }
  }
}