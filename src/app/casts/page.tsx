import type { Metadata } from 'next';
import { getCasts } from '@/libs/client';
import CastsView from '@/views/casts';

/** 完全静的化を明示 ※動的でも可 */
export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: '出演者 | 拝啓、はじまりの音へ',
};

export default async function Casts() {
  const casts = await getCasts();

  return <CastsView casts={casts} />;
}
