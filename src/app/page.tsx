// import Image from "next/image";
import styles from "@/styles/views/Home.module.scss";

import { getCasts } from "@/libs/client";

export default async function Home() {
  const casts = await getCasts();

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <p>{casts.contents[0].name}</p>
      </main>
    </div>
  );
}
