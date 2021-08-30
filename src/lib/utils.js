import { variables } from '$lib/variables';

// Consistently format the bird structure
export const returnFormattedBird =(bird) => {
  let formattedBird = {
    id: bird.fields["ID"],
    slug: bird.fields["Slug"],
    bigName: bird.fields['Big Name'],
    rarity: bird.fields['Rarity'],
    location: bird.fields['Location'],
    smallName: bird.fields['Small Name'],
    accentColor: bird.fields['Accent Color'],
    scientificName: bird.fields['Scientific Name'],
    birdName: bird.fields['Bird Name'],
    conservationStatus: bird.fields['Conservation Status Select'],
    friendlyId: bird.fields['Friendly ID'],
    etsyId: bird.fields['Etsy ID'],
    openseaId: bird.fields['Opensea ID'],
    releaseDate: bird.fields['Release Date'],
  }
  return formattedBird;
}

export const returnFormattedBirds = (birds) => {
  let birdsArray = [];
  birds.map((bird) => {
    birdsArray.push(returnFormattedBird(bird));
  })
  return birdsArray;
}

export const returnBirdFromParam = (param, paramType, formattedBirds) => {
  let birdToReturn;

  for (var i = 0; i < formattedBirds.length; i++) {
    if (formattedBirds[i][paramType] === param) {
      birdToReturn = formattedBirds[i];
      break
    }
  };
  return birdToReturn
}

export const returnBirdFromId = (id, formattedBirds) => {
  let birdToReturn;

  for (var i = 0; i < formattedBirds.length; i++) {
    if (formattedBirds[i].id === id) {
      birdToReturn = formattedBirds[i];
      break
    }
  };
  return birdToReturn
}

export const returnEtsyImagesFromEtsyListingId = async (etsyListingId) => {
  if (etsyListingId) {
    const urlImage = `https://openapi.etsy.com/v3/application/shops/${variables.ETSY_SHOP_ID}/listings/${etsyListingId}/images?client_id=${variables.ETSY_API_KEY}`;
    // const urlImage = `https://openapi.etsy.com/v2/listings/${etsyListingId}/images?api_key=${variables.ETSY_API_KEY}`;
    // https://openapi.etsy.com/v3/listings/1051222323/images?api_key=keyzp6KbCpkAcF0N0
    const reqImage = await fetch(urlImage);
    const resImage = await reqImage
    const dataImage = await resImage.json();
    return dataImage;
  }
  return {
    count: 0,
    results: []
  };
}

export const returnEtsyListingFromEtsyListingId = async (etsyListingId) => {
  if (etsyListingId) {
    const url = `https://openapi.etsy.com/v3/application/listings/${etsyListingId}?client_id=${variables.ETSY_API_KEY}`;
    const req = await fetch(url);
    const res = await req
    const listing = await res.json();
    return listing;
  }
  return {
    count: 0,
    results: []
  };
}

export const invertColor = (hex, bw) => {
  if (hex.indexOf('#') === 0) {
      hex = hex.slice(1);
  }
  // convert 3-digit hex to 6-digits.
  if (hex.length === 3) {
      hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
  }
  if (hex.length !== 6) {
      throw new Error('Invalid HEX color.');
  }
  var r = parseInt(hex.slice(0, 2), 16),
      g = parseInt(hex.slice(2, 4), 16),
      b = parseInt(hex.slice(4, 6), 16);
  if (bw) {
      // http://stackoverflow.com/a/3943023/112731
      return (r * 0.299 + g * 0.587 + b * 0.114) > 186
          ? '#000000'
          : '#FFFFFF';
  }
  // invert color components
  r = (255 - r).toString(16);
  g = (255 - g).toString(16);
  b = (255 - b).toString(16);
  // pad each with zeros and return
  return "#" + padZero(r) + padZero(g) + padZero(b);
}

function padZero(str, len) {
  len = len || 2;
  var zeros = new Array(len).join('0');
  return (zeros + str).slice(-len);
}

export function formatPhoneNumber(phoneNumberString) {
  var cleaned = ('' + phoneNumberString).replace(/\D/g, '');
  var match = cleaned.match(/^(1|)?(\d{3})(\d{3})(\d{4})$/);
  if (match) {
    var intlCode = (match[1] ? '+1 ' : '');
    return [intlCode, '(', match[2], ') ', match[3], '-', match[4]].join('');
  }
  return false;
}

export function emailIsValid (email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export const toggle = (variable) => {
  return !variable;
}