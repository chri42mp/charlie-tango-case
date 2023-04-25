// import { generateBuyerProfiles } from "@/data/buyerProfiles";

// /**
//  * Next.js API route support: https://nextjs.org/docs/api-routes/introduction
//  * @param req {import('next').NextApiRequest}
//  * @param res {import('next').NextApiResponse}
//  */
// export default function handler(req, res) {
//   // Basic example of how you can create an API route.
//   // You can open the browser, and go to http://localhost:3000/api/find-buyers to see the response.

//   // Find the zip code from the query parameters, and use it to generate a list of (fake) buyer profiles.
//   const zipCode = parseInt(req.query.zipCode || "2100");
//   const profilesForZipCode = generateBuyerProfiles({
//     zipCode,
//   });

//   // Set the cache headers, so that the response can be cached
//   res.setHeader("Cache-Control", "s-maxage=86400, stale-while-revalidate");

//   // Make sure to filter out profiles based on the other query parameters. e.g. minSize, maxPrice, etc.
//   return res.status(200).json(profilesForZipCode);
// }

import { generateBuyerProfiles } from "@/data/buyerProfiles";

/**
 * Next.js API route support: https://nextjs.org/docs/api-routes/introduction
 * @param req {import('next').NextApiRequest}
 * @param res {import('next').NextApiResponse}
 */
export default function handler(req, res) {
  // Find the query parameters and use them to generate a list of (fake) buyer profiles.
  const zipCode = parseInt(req.query.zipCode || "2100");
  const price = parseInt(req.query.price || "");
  const size = parseInt(req.query.size || "");
  const minResults = parseInt(req.query.minResults || "0");
  const maxResults = parseInt(req.query.maxResults || "100");

  const profiles = generateBuyerProfiles({
    zipCode,
    price,
    size,
    minResults,
    maxResults,
  });

  // Set the cache headers, so that the response can be cached
  res.setHeader("Cache-Control", "s-maxage=86400, stale-while-revalidate");

  // Return the filtered profiles based on the other query parameters. e.g. minSize, maxPrice, etc.
  const filteredProfiles = profiles
    .filter((profile) => {
      let match = true;
      if (price && profile.price !== price) match = false;
      if (size && profile.size !== size) match = false;
      return match;
    })
    .slice(minResults, maxResults);

  return res.status(200).json(filteredProfiles);
}
