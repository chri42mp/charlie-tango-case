import Head from "next/head";
import Link from "next/link";

export default function Confirmation() {
  return (
    <>
      <Head>
        <title>Contact Confirmation | EDC</title>
      </Head>

      <div>
        <h1>Thank you for contacting the potential buyers!</h1>
        <p>We will get back to you as soon as possible.</p>
        <p>
          Go to the{" "}
          <Link href="/dashboard">
            <p>dashboard</p>
          </Link>{" "}
          to see the latest contacts.
        </p>
      </div>
    </>
  );
}
