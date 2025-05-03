import Image from 'next/image';

import s from '@/styles/app/Home.module.scss';

import { getAttentions, getCasts } from '@/libs/client';

import Slider from '@/views/slider';
import Footer from '@/views/footer';

const Home: React.FC = async () => {
  const casts = await getCasts();
  const attentions = await getAttentions();

  return (
    <div className={s.home}>
      <div className={s.flyer}>
        <Image src='/flyer/flyer_tmp2.png' alt='flyer' fill className={s.image} />
      </div>
      <div className={s.about}>
        <p className={s.desc}>青春系オールジャンルDJパーティイベント</p>
        <p className={s.title}>拝啓、はじまりの音へ</p>
        <p className={s.date}>2025/12/20(土) 13:00〜20:00</p>
        <p className={s.at}>渋谷 club asia</p>
        <div className={s.map}>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.7308750073453!2d139.69272851193134!3d35.65900173107938!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188caa3c015555%3A0xa54d4d3a970d7889!2sclub%20asia!5e0!3m2!1sen!2sjp!4v1744817104019!5m2!1sen!2sjp'
            width='400'
            height='300'
            loading='lazy'
          />
        </div>
      </div>
      <div className={s.casts}>
        <p className={s.subtitle}>出演者</p>
        <Slider items={casts.contents} />
        <div className={s.more}>出演者一覧はこちら</div>
      </div>
      <div className={s.ticket}>
        <p className={s.subtitle}>チケット</p>
      </div>
      <div className={s.attention}>
        <p className={s.subtitle}>注意事項</p>
        <ul className={s.list}>
          {attentions.contents.map((attention, id) => (
            <li className={s.item} key={`attention-${id}`}>
              {attention.content}
            </li>
          ))}
        </ul>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
