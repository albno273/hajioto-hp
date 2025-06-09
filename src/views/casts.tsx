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
  const secondFloor = casts.contents.filter((c) => c.floor[0] === '2F Floor');
  const loungeFloor = casts.contents.filter((c) => c.floor[0] === 'Lounge Floor');

  const [selected, setSelected] = useState<Cast | null>(null);

  return (
    <>
      <div className={s.casts}>
        <p className={s.subtitle}>出演者</p>
        <div>
          <p className={s.subsubtitle}>Main Floor</p>
          <div className={s.list}>
            {mainFloor.map((item, id) => (
              <div className={s.listItem} key={`main-${id}`} onClick={() => setSelected(item)}>
                <Image src={item.image.url} alt={item.name} width={150} height={150} className={s.image} priority />
                <p className={s.name}>{item.name}</p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <p className={s.subsubtitle}>2F Floor</p>
          <div className={s.list}>
            {secondFloor.map((item, id) => (
              <div className={s.listItem} key={`2f-${id}`} onClick={() => setSelected(item)}>
                <Image src={item.image.url} alt={item.name} width={160} height={160} className={s.image} priority />
                <p className={s.name}>{item.name}</p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <p className={s.subsubtitle}>Lounge Floor</p>
          <div className={s.list}>
            {loungeFloor.map((item, id) => (
              <div className={s.listItem} key={`lounge-${id}`} onClick={() => setSelected(item)}>
                <Image src={item.image.url} alt={item.name} width={160} height={160} className={s.image} priority />
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
