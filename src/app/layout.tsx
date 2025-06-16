import type { Metadata } from 'next';
import { GoogleTagManager } from '@next/third-parties/google';
import { zenKakuGothicNew, montserrat } from '@/utils/fonts';
import cx from 'classnames';
import Image from 'next/image';

import NavMenu from '@/views/navMenu';

import '@/styles/reset.scss';
import '@/styles/global.scss';
import s from '@/styles/app/layout.module.scss';

type Props = {
  children: React.ReactNode;
};

export const metadata: Metadata = {
  metadataBase: new URL('https://haikei-hajimari-no-oto-he.vercel.app/'),
  title: '拝啓、はじまりの音へ',
  description: '青春系オールジャンルDJパーティ『拝啓、はじまりの音へ』 2025/12/20(土) 渋谷club asiaにて開催！',
  keywords: ['拝啓、はじまりの音へ', 'はじおと', 'DJパーティ', 'オールジャンルパーティ'],
  icons: { icon: '/favicon.ico', apple: '/apple-icon.png' },
  openGraph: {
    type: 'website',
    url: 'https://haikei-hajimari-no-oto-he.vercel.app/',
    siteName: '拝啓、はじまりの音へ',
    images: [{ url: '/ogp.png', width: 1200, height: 630, alt: '拝啓、はじまりの音へ' }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@haikei_hajioto',
  },
};

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <html lang='ja'>
      <GoogleTagManager gtmId='GTM-NT5858K9' />
      <body className={cx(montserrat.variable, zenKakuGothicNew.variable, s.layout)}>
        <main className={s.main}>
          <div className={s.left}>
            <div className={s.logo}>
              <Image src='/logo/logo_blur.webp' alt='logo' fill className={s.image} />
            </div>
          </div>
          <div className={s.right} />
        </main>
        <div className={s.center}>
          {children}
          <NavMenu />
        </div>
      </body>
    </html>
  );
};

export default Layout;
