import React, { useEffect, useState } from 'react'
import BookCard from '../books/BookCard';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import { useFectchAllBooksQuery } from '../../redux/features/books/booksApi';

const categories = ["Choose a genre", "Business", "Fiction", "Horror", "Advanture"]
const TopSellers = () => {

    // const [books, setBooks] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("Choose a genre");

    // useEffect(() => {
    //     fetch("books.json")
    //         .then(res => res.json())
    //         .then((data) => setBooks(data))
    // }, [])

    //after finish backend api:
    const {data: books = []} = useFectchAllBooksQuery()


    const filteredBooks = selectedCategory === "Choose a genre" ? books : books.filter(book =>
        book.category === selectedCategory.toLowerCase())

    return (
        <div className='py-10'>
            <h2 className='text-3xl font-semibold mb-6'>Top Sellers</h2>
            {/* category filtering */}
            <div className='mb-8 flex items-center relative'>
                <select onChange={(e) => setSelectedCategory(e.target.value)}
                    name="category" id="category" className='absolute  border bg-[#EAEAEA]
             border-gray-300 rounded-md px-4 py-2 focus:outline-none ' >
                    {
                        categories.map((category, index) => (
                            <option key={index} value={category}>{category}</option>
                        ))
                    }
                </select>
            </div>

            <>
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
                    filteredBooks.length > 0 &&  filteredBooks.map((book, index) => (
                            <SwiperSlide  key={index} >
                                <BookCard book={book} />
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </>




        </div>
    )
}

export default TopSellers
