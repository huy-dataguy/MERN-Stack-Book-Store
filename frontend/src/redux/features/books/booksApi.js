import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import getBaseUrl from '../../../utils/getBaseURL';

const baseQuery = fetchBaseQuery({
    baseUrl: `${getBaseUrl()}/api/books`,
    credentials: 'include',
    prepareHeaders: (headers) => {
        const token = localStorage.getItem('token');
        if (token) {
            headers.set('authorization', `Bearer ${token}`);
        }
        return headers;
    },
});

const booksApi = createApi({
    reducerPath: 'booksApi',
    baseQuery,
    tagTypes: ['Books'],
    endpoints: (builder) => ({
        fectchAllBooks: builder.query({
            query: () => '/',
            providesTags: ['Books'],
        }),
        fetchBookById: builder.query({
            query: (id) => `/${id}`,
            // providesTags: ['Book'], update all books when a book is added
            providesTags: (result, error, id) => [{ type: 'Book', id }], // update only the book with the given id

        }),
        addBook: builder.mutation({
            query: (newBook) => ({
                url: '/create-book',
                method: 'POST',
                body: newBook,
            }),
            invalidatesTags: ['Books'],
        }),
        updateBook: builder.mutation({
            query: ({ id, ...rest }) => ({
                url: `/edit/${id}`,
                method: 'PUT',
                body: rest,
                headers: {
                    'Content-Type': 'application/json',
                },
            }),
            invalidatesTags: ['Books'],
        }),
        deleteBook: builder.mutation({
            query: (id) => ({
                url: `/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Books'],
        }),

    })
});

export const { useFectchAllBooksQuery, useFetchBookByIdQuery, useAddBookMutation, useUpdateBookMutation, useDeleteBookMutation  } = booksApi;
export default booksApi;