import type { NextPage } from "next";
import Head from "next/head";
import { Single } from "../views";

const Home: NextPage = (props) => {
  return (
    <div>
      <Head>
        <title>Acid Face</title>
      </Head>
      <Single />
    </div>
  );
};

export default Home;