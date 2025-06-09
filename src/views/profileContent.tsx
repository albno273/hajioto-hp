// src/views/ProfileContent.tsx
import React from 'react';
import Image from 'next/image';
import { Cast } from '@/types/casts';
import s from '@/styles/views/profileContent.module.scss';

interface Props {
  cast: Cast;
}

const ProfileContent: React.FC<Props> = ({ cast }) => (
  <div className={s.wrap}>
    <Image src={cast.image.url} alt={cast.name} width={160} height={160} />
    <h3>{cast.name}</h3>
    <p className={s.bio}>{cast.profile}</p>

    {cast.links.twitter && (
      <a href={cast.links.twitter} target='_blank' rel='noopener noreferrer'>
        Twitter
      </a>
    )}
  </div>
);

export default ProfileContent;
