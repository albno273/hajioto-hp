import { Zen_Kaku_Gothic_New, Montserrat } from 'next/font/google';

export const zenKakuGothicNew = Zen_Kaku_Gothic_New({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
  variable: '--font-zkg-new',
  fallback: ['sans-serif'],
});

export const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
  variable: '--font-montserrat',
});
