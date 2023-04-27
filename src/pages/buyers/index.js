import Head from "next/head";
import { useRouter } from "next/router";
import styles from "./Buyers.module.css";
import RoundButton from "@/components/roundbutton";

export async function getServerSideProps(context) {
  const { query } = context;
  const { price, squareMeters, zipCode, estateType } = query;

  // Fetch data from external API
  const res = await fetch(
    `http://localhost:3000/api/find-buyers?price=${price}&size=${squareMeters}&zipCode=${zipCode}&estateType=${estateType}`
  );
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data, estateType } };
}

export default function Buyers(props) {
  const { query } = useRouter();
  const potentialBuyers = props.data;

  return (
    <>
      <Head>
        <title>Find buyer | EDC</title>
      </Head>

      <div className="wrapper">
        <h1 className={styles.headline}>Potential buyers</h1>
        <p>
          On this page you get the <code>`query`</code> params like{" "}
          <code>`zipCode`</code>, and can use them to fetch a list of buyers
          from the API.
        </p>
        <p>
          Make sure to read the docs on how to fetch data on a page - There are
          multiple ways of doing it, and you should choose the one that fits
          your solution best.
        </p>

        <div className={styles.content}>
          <h2>Query params:</h2>
          <pre>
            <code>{JSON.stringify(query, null, 2)}</code>
          </pre>
        </div>

        <div className={styles.content}>
          <h2>Potential buyers:</h2>
          <ul>
            {potentialBuyers.map((buyer) => (
              <li key={buyer.id}>
                {/* <p>Adults: {buyer.adults}</p>
                <p>Children: {buyer.children}</p> */}
                <p>Estatetype: {buyer.estateType}</p>
                <p>Description: {buyer.description}</p>
                {/* <p>Size: {buyer.minSize}</p>
                <p>Price: {buyer.maxPrice}</p> */}
                <RoundButton />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
