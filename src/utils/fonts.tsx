import { Kiwi_Maru, Montserrat } from 'next/font/google';

export const kiwiMaru = Kiwi_Maru({
  subsets: ['latin'],
  weight: ['400'],
  display: 'swap',
  variable: '--font-kiwi-maru',
  fallback: ['sans-serif'],
});

export const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
  variable: '--font-montserrat',
  fallback: ['sans-serif'],
});
