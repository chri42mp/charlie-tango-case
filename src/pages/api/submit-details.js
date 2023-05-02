// import { generateBuyerProfiles } from "@/data/buyerProfiles";

/**
 * Next.js API route support: https://nextjs.org/docs/api-routes/introduction
 * @param req {import('next').NextApiRequest}
 * @param res {import('next').NextApiResponse}
 */
const supabaseUrl =
  "https://hyrqavdmgeuidofzsleu.supabase.co/rest/v1/charlietango-data";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh5cnFhdmRtZ2V1aWRvZnpzbGV1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODI0MjU5MDYsImV4cCI6MTk5ODAwMTkwNn0.1VOuivxZZtOlOOOake1U1hc4F2qSQZzhjzzziyqV8rU";

export default async function handler(req, res) {
  fetch(supabaseUrl, {
    method: "post",
    headers: {
      apikey: supabaseKey,
      "Content-Type": "application/json",
      Prefer: "return=representation",
    },
    body: JSON.stringify(req.body),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      return res.status(200).json({ data });
    });
}
