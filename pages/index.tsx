import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import EmailAuth from "../views/EmailAuth";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Enter OTP to Verify your Email</title>
      </Head>
      <EmailAuth />
    </>
  );
};

export default Home;
