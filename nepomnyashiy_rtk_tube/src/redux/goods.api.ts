import {
  createApi,
  fetchBaseQuery,
} from '@reduxjs/toolkit/query/react';

export const goodsApi = createApi({
  reducerPath: 'goodsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:9000/' }),
  endpoints: (builder) => ({
    getGoods: builder.query({
      query: () => 'goods',
    }),
  }),
});

export const {useGetGoodsQuery} = goodsApi;