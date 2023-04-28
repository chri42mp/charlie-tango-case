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
          <option key={estateType.id} value={estateType.id}>
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
          <form action="/buyers" method="GET" className={styles.form}>
            <label>
              <span className={styles.label}>Price</span>
              <input
                type="range"
                name="price"
                min="0"
                max="20000000"
                step="50000"
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
