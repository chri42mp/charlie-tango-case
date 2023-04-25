import Head from "next/head";
import styles from "./Home.module.css";
import React, { useState } from "react";

import { estateTypes } from "@/data/estateTypes";

export default function Home() {
  const [price, setPrice] = useState(0);

  function handlePriceChange(event) {
    setPrice(event.target.value);
  }

  function SelectEstateType({ estateTypes }) {
    return (
      <select name="estateType" required>
        <option value="">Select an option</option>
        {estateTypes.map((estateType) => (
          <option key={estateType.id} value={estateType.name}>
            {estateType.name}
          </option>
        ))}
      </select>
    );
  }

  return (
    <>
      <Head>
        <title>Find buyer | EDC</title>
      </Head>
      <div className="wrapper">
        <h1 className={styles.headline}>Hello MMD</h1>
        <div className={styles.content}>
          <h2>Basic form example</h2>
          <p>
            This is simple example of how you could submit a form to another
            page in Next.js, without using a custom <code>submit</code> function
            (e.g. without JavaScript). It is unstyled and unfinished. You can
            use this as base, or implement your own solution.
          </p>
          <p>
            Make sure to read the guide on{" "}
            <a
              href="https://nextjs.org/docs/guides/building-forms"
              target="_blank"
            >
              building forms in Next.js
            </a>
          </p>
          <form action="/buyers" method="GET" className={styles.form}>
            <label>
              <span className={styles.label}>Price</span>
              <input
                type="range"
                name="Price"
                min="0"
                max="20000000"
                step="10"
                required
                onChange={handlePriceChange}
              />
            </label>

            <span>{price}</span>
            <p>0 kr. 20 mio. kr.</p>

            <label>
              <span className={styles.label}>Squaremeters</span>
              <input name="squareMeters" required />
            </label>
            <label>
              <span className={styles.label}>Zip Code</span>
              <input name="zipCode" required />
            </label>
            <label>
              <span className={styles.label}>Estate Type</span>
              <SelectEstateType estateTypes={estateTypes} />
            </label>
            <button className={styles.button}>Find Potential Buyers</button>
          </form>
        </div>
      </div>
    </>
  );
}
