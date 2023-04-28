import { useState } from "react";
import styles from "../pages/Home.module.css";

const ContactForm = () => {
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

  return (
    <form onSubmit={handleSubmit} className={styles.myForm}>
      <h3>Should we contact potential buyers on your behalf?</h3>
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
        <textarea
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
        ></textarea>
      </div>
      <button className={styles.button} type="submit">
        Contact Buyers
      </button>
    </form>
  );
};

export default ContactForm;
