import { createClient } from "@supabase/supabase-js";

const supabaseUrl =
  "https://hyrqavdmgeuidofzsleu.supabase.co/rest/v1/charlietango-data?select=id";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh5cnFhdmRtZ2V1aWRvZnpzbGV1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODI0MjU5MDYsImV4cCI6MTk5ODAwMTkwNn0.1VOuivxZZtOlOOOake1U1hc4F2qSQZzhjzzziyqV8rU";

const supabase = createClient(supabaseUrl, supabaseKey);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const {
    name,
    email,
    phone,
    consent,
    price,
    estateType,
    size,
    zip,
    address,
    created_at,
    buyer,
    ...lookupData
  } = req.body;

  try {
    const { data, error } = await supabase
      .from("user_details")
      .insert({
        name,
        email,
        phone,
        consent,
        price,
        estateType,
        size,
        zip,
        address,
        created_at,
        buyer,
        lookup_data: lookupData,
      });

    if (error) {
      throw error;
    }

    return res
      .status(200)
      .json({ message: "User details submitted successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error submitting user details" });
  }
}
