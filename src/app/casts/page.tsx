import { getCasts } from '@/libs/client';
import CastsView from '@/views/casts';

/** 完全静的化を明示 ※動的でも可 */
export const dynamic = 'force-static';

export default async function Casts() {
  const casts = await getCasts();

  return <CastsView casts={casts} />;
}
