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
    <Image
      src={`${cast.image.url}?fm=webp&w=320&h=320`}
      alt={cast.name}
      width={160}
      height={160}
      className={s.avatar}
    />
    <p className={s.name}>{cast.name}</p>
    {cast.eventAffiliates && <p className={s.eventAffiliates}>{cast.eventAffiliates}</p>}

    {cast.affiliates && cast.affiliates.length > 0 && (
      <div className={s.affiliates}>
        {cast.affiliates.map((item, id) => (
          <div className={s.affItem} key={`affiliates-${cast.name}-${id}`}>
            <p className={s.affName}>{item.name}</p>
            <div className={s.affSocial}>
              {item.twitter && (
                <a href={item.twitter} target='_blank' rel='noopener noreferrer'>
                  X (Twitter)
                </a>
              )}
              {item.soundcloud && (
                <a href={item.soundcloud} target='_blank' rel='noopener noreferrer'>
                  Soundcloud
                </a>
              )}
              {item.other && (
                <a href={item.other} target='_blank' rel='noopener noreferrer'>
                  Website
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    )}

    <p className={s.bio}>{cast.profile}</p>

    <div className={s.social}>
      {cast.links.twitter && (
        <a href={cast.links.twitter} target='_blank' rel='noopener noreferrer'>
          X (Twitter)
        </a>
      )}
      {cast.links.soundcloud && (
        <a href={cast.links.soundcloud} target='_blank' rel='noopener noreferrer'>
          Soundcloud
        </a>
      )}
      {cast.links.other && (
        <a href={cast.links.other} target='_blank' rel='noopener noreferrer'>
          Website
        </a>
      )}
    </div>
  </div>
);

export default ProfileContent;
