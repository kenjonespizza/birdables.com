import client from './client';

export const allCards = async () => {
	const query = `*[_type == "card"]{
		_id,
		"id": cardId,
		"slug": slug.current,
		bigName,
		rarity,
		location,
		smallName,
		accentColor,
		"scientificName": bird->sciName,
		"birdName": bird->name,
		conservationStatus,
		etsyId,
		etsyUrl,
		openseaUrl,
		releaseDate,
		"specialty": onlyAvailableInPack,
		"eBird": eBirdSlug.current,
		"audubon": audubonSlug.current,
		"scans": qrScans,
    new
	}`;
	const params = {};

	const results = await client.fetch(query, params);
	console.log('results:', results);
	return results;
};
