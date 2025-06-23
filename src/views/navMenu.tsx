'use client';

// src/components/NavMenu.tsx
import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import s from '@/styles/views/navMenu.module.scss';
import cx from 'classnames';
import Image from 'next/image';

export interface NavItem {
  id: string;
  label: string;
  href: string;
}
const topNavItems: NavItem[] = [
  { id: 'page-top', label: 'トップ', href: '#page-top' },
  { id: 'about', label: 'イベント概要', href: '#about' },
  { id: 'casts', label: '出演者', href: '#casts' },
  { id: 'characters', label: 'キャラクター', href: '#characters' },
  { id: 'ticket', label: 'チケット', href: '#ticket' },
  { id: 'attention', label: '注意事項', href: '#attention' },
];

const castNavItems: NavItem[] = [
  { id: 'page-top', label: 'トップページへ', href: '/' },
  { id: 'main', label: 'Main Floor', href: '#main' },
  { id: 'sub', label: 'Sub Floor', href: '#sub' },
  { id: 'lounge', label: 'Lounge Floor', href: '#lounge' },
  { id: 'design', label: 'Design', href: '#design' },
];

const charaNavItems: NavItem[] = [
  { id: 'page-top', label: 'トップページへ', href: '/' },
  { id: 'haru', label: '天槌 ハル', href: '#haru' },
  { id: 'riko', label: '木乃狗 リコ', href: '#riko' },
  { id: 'fanfic', label: '二次創作について', href: '#fanfic' },
];

const switchNav = (path: string): NavItem[] => {
  switch (path) {
    case '/':
      return topNavItems;
    case '/casts/':
      return castNavItems;
    case '/characters/':
      return charaNavItems;
    default:
      return topNavItems;
  }
};

const NavMenu: React.FC = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const items = switchNav(pathname);

  return (
    <>
      {/* メニュー本体（右側スライドイン） */}
      <nav className={cx(s.menu, open ? s.open : '')}>
        <div className={s.logo}>
          <Link href='/' onClick={() => pathname !== '/' && setOpen(false)}>
            <Image src='/logo/logo_for_link.webp' alt='logo' fill objectFit='contain' />
          </Link>
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
