'use client';

// src/components/NavMenu.tsx
import React, { useState } from 'react';
import Link from 'next/link';
import s from '@/styles/views/navMenu.module.scss';
import cx from 'classnames';
import Image from 'next/image';

export interface NavItem {
  id: string;
  label: string;
  href: string;
}

interface Props {
  items: NavItem[];
}

const NavMenu: React.FC<Props> = ({ items }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* メニュー本体（右側スライドイン） */}
      <nav className={cx(s.menu, open ? s.open : '')}>
        <div className={s.logo}>
          <Image src='/logo/logo_blur.png' alt='logo' fill objectFit='contain' />
        </div>
        <ul className={s.list}>
          {items.map(({ id, label, href }) => (
            <li key={id} className={s.item}>
              <Link href={href} onClick={() => setOpen(false)}>
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* 右下ハンバーガー */}
      <button
        type='button'
        aria-label='Toggle navigation'
        className={cx(s.hamburger, open ? s.open : s.close)}
        onClick={() => setOpen(!open)}
      >
        <span />
        <span />
        <span />
      </button>
    </>
  );
};

export default NavMenu;
