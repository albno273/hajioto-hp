'use client';

// src/components/NavMenu.tsx
import React, { useState } from 'react';
import Link from 'next/link';
import s from '@/styles/views/navMenu.module.scss';
import cx from 'classnames';

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
      <button type='button' aria-label='Toggle navigation' className={s.hamburger} onClick={() => setOpen(!open)}>
        <span />
        <span />
        <span />
      </button>
    </>
  );
};

export default NavMenu;
