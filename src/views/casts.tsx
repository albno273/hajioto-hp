'use client';

import Image from 'next/image';
import s from '@/styles/app/casts/Casts.module.scss';

import Footer from '@/views/footer';
import ProfileContent from './profileContent';
import Modal from './modal';
import { Cast } from '@/types';
import { useState } from 'react';
import { MicroCMSListResponse } from 'microcms-js-sdk';

interface Props {
  casts: MicroCMSListResponse<Cast>;
}

const CastsView: React.FC<Props> = ({ casts }) => {
  const mainFloor = casts.contents.filter((c) => c.floor[0] === 'Main Floor');
  const subFloor = casts.contents.filter((c) => c.floor[0] === 'Sub Floor');
  const loungeFloor = casts.contents.filter((c) => c.floor[0] === 'Lounge Floor');
  const designer = casts.contents.filter((c) => c.floor[0] === 'None');

  const [selected, setSelected] = useState<Cast | null>(null);

  return (
    <>
      <div className={s.casts}>
        <p className={s.title}>出演者</p>
        <p className={s.notice}>
          ※現時点で発表されている出演者のみを表示しています。
          <br />
          画像を選択すると詳細が表示されます。
        </p>
        <div className={s.section} id='main'>
          <p className={s.subtitle}>Main Floor</p>
          <div className={s.list}>
            {mainFloor.map((item, id) => (
              <div className={s.listItem} key={`main-${id}`} onClick={() => setSelected(item)}>
                <Image
                  src={`${item.image.url}?fm=webp&w=360&h=360`}
                  alt={item.name}
                  width={180}
                  height={180}
                  className={s.image}
                  priority
                />
                {item.new && <div className={s.new}>NEW!</div>}
                <p className={s.name}>{item.name}</p>
              </div>
            ))}
          </div>
        </div>
        <div className={s.section} id='sub'>
          <p className={s.subtitle}>Sub Floor</p>
          <div className={s.list}>
            {subFloor.map((item, id) => (
              <div className={s.listItem} key={`sub-${id}`} onClick={() => setSelected(item)}>
                <Image
                  src={`${item.image.url}?fm=webp&w=360&h=360`}
                  alt={item.name}
                  width={160}
                  height={160}
                  className={s.image}
                  priority
                />
                {item.new && <div className={s.new}>NEW!</div>}
                <p className={s.name}>{item.name}</p>
              </div>
            ))}
          </div>
        </div>
        <div className={s.section} id='lounge'>
          <p className={s.subtitle}>Lounge Floor</p>
          <div className={s.list}>
            {loungeFloor.map((item, id) => (
              <div className={s.listItem} key={`lounge-${id}`} onClick={() => setSelected(item)}>
                <Image
                  src={`${item.image.url}?fm=webp&w=360&h=360`}
                  alt={item.name}
                  width={160}
                  height={160}
                  className={s.image}
                  priority
                />
                {item.new && <div className={s.new}>NEW!</div>}
                <p className={s.name}>{item.name}</p>
              </div>
            ))}
          </div>
        </div>
        <div className={s.section} id='design'>
          <p className={s.subtitle}>Designer</p>
          <div className={s.list}>
            {designer.map((item, id) => (
              <div className={s.listItem} key={`designer-${id}`} onClick={() => setSelected(item)}>
                <Image
                  src={`${item.image.url}?fm=webp&w=360&h=360`}
                  alt={item.name}
                  width={160}
                  height={160}
                  className={s.image}
                  priority
                />
                <p className={s.name}>{item.name}</p>
              </div>
            ))}
          </div>
        </div>

        <Footer />
      </div>
      {/* モーダル：selected がある間だけ開く */}
      <Modal open={!!selected} onClose={() => setSelected(null)}>
        {selected && <ProfileContent cast={selected} />}
      </Modal>
    </>
  );
};

export default CastsView;
