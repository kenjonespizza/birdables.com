import {returnFormattedBirds} from "$lib/utils"
const api_key = 'xw71fsnfkoekrtjsvo895th3';

// export async function get({ params }) {
//   const url = `https://openapi.etsy.com/v2/shops/:shop_id/listings/active?api_key=${api_key}&shop_id=30960949`
//   const req = await fetch(url);
//   const res = await req;
//   const data = await res.json()

//   data.results.map( async (listing, i) => {
//     const urlImage = `https://openapi.etsy.com/v2/listings/${listing.listing_id}/images?api_key=${api_key}`;
//     const reqImage = await fetch(urlImage);
//     const resImage = await reqImage
//     const dataImage = await resImage.json();
//     data.results[i]['images'] = await dataImage.results;
//   });

//   console.log('DATA:', data)
  
//   return {
//     status: 200,
//     body: data
//   }
// }

export async function get({ params }) {
  const url = `https://openapi.etsy.com/v2/shops/:shop_id/listings/active?api_key=${api_key}&shop_id=30960949`;
  const req = fetch(url)
    .then((res) => {
      return res.json();
    })
    .then(async (data) => {
      const promises = data.results.map( async (listing, i) => {
        const urlImage = `https://openapi.etsy.com/v2/listings/${listing.listing_id}/images?api_key=${api_key}`;
        const reqImage = await fetch(urlImage);
        const resImage = await reqImage
        const dataImage = await resImage.json();
        data.results[i]['images'] = dataImage.results;
      })

      await Promise.all(promises)
      return data;
    })
    const data = await req;
    return {
      status: 200,
      body: data
    }
}