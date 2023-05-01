import Head from "next/head";

// import { useRouter } from "next/router";
// import { useState } from "react";
// import styles from "./Dashboard.module.css";

export default function dashboard() {
  return (
    <>
      <Head>
        <title>Dashboard | EDC</title>
      </Head>

      <div>
        <h1>Dashboard - Latest Contacts</h1>
      </div>
    </>
  );
}
// import Head from "next/head";
// import { StoreContext } from "@/contexts/storeContext";
// import { useContext, useRef } from "react";

// export default function dashboard() {
//   const formEl = useRef(null);
//   const state = useContext(StoreContext);
//   const { buyer } = state;
//   function submitted(e) {
//     e.preventDefault();
//     const payload = {
//       name: "Mads",
//       email: "mschouolesen@gmail.com",
//       buyer: buyer,
//     };
//     fetch("/api/add-order", {
//       method: "POST",
//       headers:{
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(payload),
//     })
//     .then((res)=> res.json());
//     .then((data)=>console.log(data));
//   }

//   return (
//     <>
//       <Head>
//         <title>Dashboard | EDC</title>
//       </Head>

//       <div classname="Checkout">
//         <ul>
//           {buyer.map((item) => (
//             <li>
//               {item.productdisplayname} x{item.amount}
//             </li>
//           ))}
//         </ul>
//         <form>
//           <labal> Name</labal>
//         </form>
//       </div>
//     </>
//   );
// }
