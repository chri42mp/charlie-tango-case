import Head from "next/head";
import { useRouter } from "next/router";
import styles from "./Buyers.module.css";
import RoundButton from "@/components/roundbutton";
import ContactForm from "@/components/Contactform";
import { useState } from "react";
import Image from "next/image";
import estateIcon from "@/assets/icon-boligtype.svg";

export async function getServerSideProps(context) {
  const { query } = context;
  const { price, squareMeters, zipCode, estateType } = query;

  // Fetch data from external API
  const res = await fetch(
    `https://charlie-tango-case-chri42mp.vercel.app/api/find-buyers?price=${price}&size=${squareMeters}&zipCode=${zipCode}&estateType=${estateType}`
  );
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data, estateType } };
}

export default function Buyers(props) {
  const { query } = useRouter();
  const [selected, setSelected] = useState([]);
  const potentialBuyers = props.data;

  return (
    <>
      <Head>
        <title>Find buyer | EDC</title>
      </Head>

      <div className="wrapper">
        <h1 className={styles.headline}>Potential buyers</h1>

        <div className={styles.grid}>
          <div className={styles.col}>
            {potentialBuyers.map((buyer) => (
              <article key={buyer.id}>
                {/* <h3>{buyer.id}</h3> */}
                <RoundButton setSelected={setSelected} id={buyer.id} />
                <p> ID : {buyer.id}</p>

                <p>
                  <Image
                    src={estateIcon}
                    alt="estate icon"
                    width={30}
                    height={30}
                  />
                  Estatetype: {buyer.estateType}
                </p>
                <p>
                  <strong>Description </strong>: {buyer.description}
                </p>
                <p>
                  <strong>Date</strong>: {buyer.takeoverDate}
                </p>
                <p>
                  <strong>Adults</strong>: {buyer.adults}
                </p>
                <p>
                  <strong>Children</strong>: {buyer.children}
                </p>

                <p>
                  <strong>Size</strong>: {buyer.minSize}
                </p>
                <p>
                  <strong>Price</strong>: {buyer.maxPrice}
                </p>
              </article>
            ))}
          </div>
          <div className="col">
            {/* price=13450000&squareMeters=123&zipCode=2121&estateType=2 */}
            <ContactForm
              selected={selected}
              price={query.price}
              squareMeters={query.squareMeters}
              zipCode={query.zipCode}
              estateType={query.estateType}
            />
          </div>
        </div>
        <div className={styles.hide}>
          <h2>Query params:</h2>
          <pre>
            <code>{JSON.stringify(query, null, 2)}</code>
          </pre>
        </div>
      </div>
    </>
  );
}
// <div className={styles.content}>
//   <h2>Potential buyers:</h2>
//   <ul>
//     {potentialBuyers.map((buyer) => (
//       <li key={buyer.id}>
//         {/* <p>Adults: {buyer.adults}</p>
//               <p>Children: {buyer.children}</p> */}
//         <p>Estatetype: {buyer.estateType}</p>
//         <p>Description: {buyer.description}</p>
//         {/* <p>Size: {buyer.minSize}</p>
//               <p>Price: {buyer.maxPrice}</p> */}
//         <RoundButton />
//       </li>
//     ))}
//   </ul>
// </div>;
