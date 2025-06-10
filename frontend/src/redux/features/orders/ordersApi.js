import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import getBaseUrl from '../../../utils/getBaseURL';


const ordersApi = createApi({
    reducerPath: 'ordersApi',
    baseQuery : fetchBaseQuery({
        baseUrl: `${getBaseUrl()}/api/orders`,
    }),
    tagTypes: ['Orders'],
    endpoints: (builder) => ({

        getOrderByEmail: builder.query({
            query: (email) => ({
                url: `/email/${email}`
            }),
            providesTags: ['Orders']
        }),
        createOrder: builder.mutation({
            query: (newOrder) => ({
                url: '/',
                method: 'POST',
                body: newOrder,
                credentials: 'include',
            })
        })

    })
});

export const { useGetOrderByEmailQuery, useCreateOrderMutation } = ordersApi;
export default ordersApi;