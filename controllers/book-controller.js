const Book = require('../models/book')

const getAllBooks = async(req,res) => {
    console.log('hello')
}

const getSingleBookById = async(req,res) => {

}

const addNewBook = async(req,res) => {
    try{
        const newBookFormData = req.body;
        const newlyCreatedBook = await Book.create(newBookFormData)
        if(newBookFormData){
            res.status(201).json({
                success: true,
                message: 'Book added successfully',
                data: newlyCreatedBook
            })
        }
    }
    catch(e){
        console.log(e);
    }
}

const updateBook = async(req,res) => {

}

const deleteBook = async(req,res) => {

}

module.exports = {getAllBooks, getSingleBookById, addNewBook, updateBook, deleteBook}