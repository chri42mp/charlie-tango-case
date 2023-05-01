import { useState } from "react";
import styles from "../pages/Home.module.css";
import Link from "next/link";

const ContactForm = (props) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    if (response.ok) {
      console.log("Message sent successfully");
    } else {
      console.error("Error sending message:", response.statusText);
    }
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
      <Link href="/Confirmation">
        <button className={styles.button} type="submit">
          Contact Buyers
        </button>
      </Link>
    </form>
  );
};

export default ContactForm;
