import type { NextPage } from "next";
import Head from "next/head";
import { CommunityGallery } from "../views";

const Home: NextPage = (props) => {
  return (
    <div>
      <Head>
        <title>THE REALMS DAO | COMMUNITY GALLERY</title>
      </Head>
      <CommunityGallery />
    </div>
  );
};

export default Home;