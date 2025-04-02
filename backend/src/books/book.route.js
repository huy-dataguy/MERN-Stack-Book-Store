const express = require('express');

const router = express.Router();
const Book = require('./book.model');
const { postABook, getAllBooks, getSingleBook, updateABook, updateBook, deleteBook, deleteABook } = require('./book.controller');

// frontend => backend server =>> controller =>> book Schemma => database  okok
// =>> send to server =>> back to the frontend


//post a book 
// post = when submit a somthing fronted to db
// get = when set something back from db
//put /patch = when edit or update something
// delete = when delete something from db

router.post('/create-book', postABook);


//get all books
router.get('/', getAllBooks);

//get a single book
router.get('/:id', getSingleBook);

//update a book
router.put('/edit/:id', updateABook);

//delete a book
router.delete('/:id', deleteABook);

module.exports = router;
