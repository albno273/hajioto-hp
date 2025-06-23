import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import s from '@/styles/app/characters/Characters.module.scss';

import Footer from '@/views/footer';

export const metadata: Metadata = {
  title: 'キャラクター | 拝啓、はじまりの音へ',
};

const Characters: React.FC = async () => {
  return (
    <div className={s.characters}>
      <p className={s.title}>キャラクター</p>
      <div className={s.section}>
        <p className={s.subtitle}>天槌 ハル (あまて はる)</p>
        <div className={s.charaImage}>
          <Image src='/characters/haru.webp' alt='あまて はる' fill className={s.image} />
        </div>
        <p className={s.bio}>
          成績優秀で文武両道、更には人当たりも良い、真面目で完璧な彼女。
          <br />
          習い事でピアノをやっていたことをリコに知られ、キーボード担当になって欲しいと猛アピールを受けたものの、
          本人は乗り気ではなかったみたいなのですが……
        </p>
      </div>
      <div className={s.section}>
        <p className={s.subtitle}>木乃狗 リコ (きのいぬ りこ)</p>
        <div className={s.charaImage}>
          <Image src='/characters/riko.webp' alt='きのいぬ りこ' fill className={s.image} />
        </div>
        <p className={s.bio}>
          音楽が大好きな高校一年生。 音楽を作りたいと思い軽音部に、そして、ハルをバンドに誘います。
          <br />
          ギターとボーカルを担当し、成績は優秀ながら、ピアスはするし、喧嘩っ早いしで、ハルの頭を悩ませることもしばしばの様子です……
        </p>
      </div>
      <div className={s.section}>
        <p className={s.subtitle}>二次創作について</p>
        <p className={s.bio}>
          『天槌 ハル』『木乃狗 リコ』については、以下の条件を遵守したうえで自由に二次創作をしていただいてかまいません。
          <br />
          是非、2人の姿を皆さまの思い描く形で表現してみてください。
          <br />
          <br />
          <ol>
            <li>性的表現や公序良俗に反する表現はお控え下さい。</li>
            <li>
              画像などを X にて投稿する際はハッシュタグ
              <Link
                href='https://x.com/search?q=%2523%E3%81%AF%E3%81%98%E3%81%8A%E3%81%A8'
                target='_blank'
                rel='noopener noreferrer'
                className={s.inlineLink}
              >
                #はじおと
              </Link>
              をつけ、はじおと公式 X の固定ポストを引用する形で投稿してください。
            </li>
          </ol>
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default Characters;
