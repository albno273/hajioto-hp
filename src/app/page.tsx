// import Image from "next/image";
import s from '@/styles/app/Home.module.scss';
import { getCasts } from '@/libs/client';

import Footer from '@/views/footer';

export default async function Home() {
  const casts = await getCasts();

  return (
    <div className={s.body}>
      <main>
        <p className={s.tmp}>{casts.contents[0].name}</p>
        <Footer />
      </main>
    </div>
  );
}
