import { useState } from "react";
import styles from "../pages/Home.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

const ContactForm = (props) => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    consent: false, // added consent field with false as initial state
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleCheckboxChange = (event) => {
    setFormData({ ...formData, consent: event.target.checked });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const payload = {
      ...formData,
      buyer: props.selected,
      price: props.price,
      squareMeters: props.squareMeters,
      zipCode: props.zipCode,
      estateType: props.estateType,
    };
    //console.log(payload);
    /*

curl -X POST 'https://hyrqavdmgeuidofzsleu.supabase.co/rest/v1/charlietango-data' \
-H "apikey: SUPABASE_KEY" \
-H "Authorization: Bearer SUPABASE_KEY" \
-H "Content-Type: application/json" \
-H "Prefer: return=minimal" \
-d '{ "some_column": "someValue", "other_column": "otherValue" }'

*/
    const response = await fetch("/api/submit-details", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    const data = await response.json();
    console.log(data);
    router.push("/confirmation");
    /* if (data) {
      console.log("Message sent successfully");
    } else {
      console.error("Error sending message:", response.statusText);
    } */
  };

  const selectedBuyerIds = props.selected.join(", ");

  return (
    <form onSubmit={handleSubmit} className={styles.myForm}>
      <h3>Should we contact potential buyers on your behalf?</h3>
      {props.selected.length === 0 ? (
        <p>No buyers added</p>
      ) : (
        <p>Selected ID: {selectedBuyerIds}</p>
      )}
      <div>
        <br />
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <br />
        <label htmlFor="email">Email: </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <br />
        <label htmlFor="phone">Phone: </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <br />
        <label htmlFor="consent">
          <input
            type="checkbox"
            id="consent"
            name="consent"
            checked={formData.consent}
            onChange={handleCheckboxChange}
          />
          &nbsp; Yes please, EDC may contact me with offers and information
          related to the real estate market.
        </label>
      </div>
      <button className={styles.button} type="submit">
        Contact Buyers
      </button>
    </form>
  );
};

export default ContactForm;
