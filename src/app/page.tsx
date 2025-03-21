// import Image from "next/image";
import styles from "@/styles/views/Home.module.scss";

import { getCasts } from "@/libs/client";
import { NextPage } from "next";

const fetchCasts = async () => {
  const casts = await getCasts();

  return {
    title: casts.contents[0].name,
  };
};

type PageProps = {
  title: string;
};

const Home: NextPage<PageProps> = async () => {
  const casts = await fetchCasts();

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <p>{casts.title}</p>
      </main>
    </div>
  );
};

export default Home;
