'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import cx from 'classnames';
import Image from 'next/image';

import { Act, Cast, Floor } from '@/types';

import s from '@/styles/views/slider.module.scss';

type SliderProps = {
  items: Cast[];
};

const actClass = (act: Act): string => {
  switch (act) {
    case 'DJ':
      return 'dj';
    case 'VJ':
      return 'vj';
    case 'Live Paint':
      return 'live-paint';
    default:
      return '';
  }
};

const floorClass = (floor: Floor): string => {
  switch (floor) {
    case 'Main Floor':
      return 'main';
    case 'Sub Floor':
      return 'sub';
    case 'Lounge Floor':
      return 'lounge';
    default:
      return '';
  }
};

const Slider: React.FC<SliderProps> = ({ items }) => {
  return (
    <div className={s.container}>
      <Swiper spaceBetween={32} slidesPerView='auto' slidesOffsetBefore={32} slidesOffsetAfter={32}>
        {items.map((item, id) => (
          <SwiperSlide key={`casts-slider-${id}`} className={s.slide}>
            <Image
              src={`${item.image.url}?fm=webp&w=320&h=320`}
              alt={item.name}
              width={160}
              height={160}
              className={s.image}
              priority
            />
            <div className={s.float}>
              <p className={cx(s.act, `${actClass(item.act[0])}`)}>{item.act[0]}</p>
              <p className={cx(s.floor, `${floorClass(item.floor[0])}`)}>{item.floor[0]}</p>
            </div>
            <p className={s.name}>{item.name}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
