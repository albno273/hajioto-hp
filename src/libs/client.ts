import { createClient } from 'microcms-js-sdk';

import { Attention, Cast } from '@/types';

if (!process.env.SERVICE_DOMAIN) {
  throw new Error('MICROCMS_SERVICE_DOMAIN is required');
}

if (!process.env.API_KEY) {
  throw new Error('MICROCMS_API_KEY is required');
}

export const client = createClient({
  serviceDomain: process.env.SERVICE_DOMAIN,
  apiKey: process.env.API_KEY,
});

// 出演者一覧を取得
export const getCasts = async () => {
  const casts = await client.getList<Cast>({
    endpoint: 'casts',
    queries: {
      limit: 100,
    },
  });
  return casts;
};

// ピックアップ出演者一覧を取得
export const getPickUpCasts = async () => {
  const casts = await client.getList<Cast>({
    endpoint: 'casts',
    queries: {
      filters: 'pickup[equals]true',
    },
  });
  return casts;
};

// 出演者の詳細を取得
export const getCastDetail = async (contentId: string) => {
  const cast = await client.getListDetail<Cast>({
    endpoint: 'casts',
    contentId,
  });
  return cast;
};

// 注意事項一覧を取得
export const getAttentions = async () => {
  const attentions = await client.getList<Attention>({
    endpoint: 'attentions',
  });
  return attentions;
};
