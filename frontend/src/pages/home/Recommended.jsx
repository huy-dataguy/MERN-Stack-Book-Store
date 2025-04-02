import React, { useEffect, useState } from 'react'
import BookCard from '../books/BookCard';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import { useFectchAllBooksQuery } from '../../redux/features/cart/bookApi';
const Recommended = () => {

    //test in frontend, before have backend api:
    // const [books, setBooks] = useState([]);

    // useEffect(() => {
    //     fetch("books.json")
    //         .then(res => res.json())
    //         .then((data) => setBooks(data))
    // }, [])

    //after have backend api:
    const { data: books = [] } = useFectchAllBooksQuery()
    

    return (
        <div className='py-10'>
            <h2 className='text-3xl font-semibold mb-6'>Recommeded for you</h2>
            <Swiper
                navigation={true}
                modules={[Navigation]}
                slidesPerView={1}
                spaceBetween={20}

                breakpoints={{
                    '@0.00': {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    '@0.75': {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    '@1.00': {
                        slidesPerView: 2,
                        spaceBetween: 40,
                    },
                    '@1.50': {
                        slidesPerView: 3,
                        spaceBetween: 50,
                    },

                }}

                className="mySwiper">
                {
                    books.length > 0 && books.slice(10, 20).map((book, index) => (
                        <SwiperSlide key={index} >
                            <BookCard book={book} />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    )
}

export default Recommended
