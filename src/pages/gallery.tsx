import type { NextPage } from "next";
import Head from "next/head";
import { Gallery } from "../views";

const Home: NextPage = (props) => {
  return (
    <div>
      <Head>
        <title>Acid Face | Gallery</title>
      </Head>
      <Gallery />
    </div>
  );
};

export default Home;