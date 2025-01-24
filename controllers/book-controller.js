const Book = require('../models/book')

const getAllBooks = async(req,res) => {
    try{
        const allBooks = await Book.find({});
        if(allBooks?.length > 0){
            res.status(200).json({
                success: true,
                message: 'List of books fetched successfully',
                data: allBooks
            })
        } else {
            res.status(404).json({
                success: false,
                message: 'No books found'
            })
        }  
    }
    catch(e){
        console.log(e);
        res.status(500).json({
            success: false,
            message: 'Something went wrong'
        })
    }
}

const getSingleBookById = async(req,res) => {
    try{
        const getCurrentBookID = req.params.id;
        const bookDetailsByID = await Book.findById(getCurrentBookID)
        if(!bookDetailsByID){
            return res.status(404).json({
                success: false,
                message: 'Book with current ID is not found!'
            })
        }
        return res.status(200).json({
            success: true,
            data: bookDetailsByID
        })
    }
    catch(e){
        console.log(e);
        res.status(500).json({
            success: false,
            message: 'Something went wrong'
        })
    }
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
        res.status(500).json({
            success: false,
            message: 'Something went wrong'
        })
    }
}

const updateBook = async(req,res) => {
    try{
        const updateBookData = req.body;
        const getCurrentBookID = req.params.id;
        const updatedBook = await Book.findByIdAndUpdate(getCurrentBookID, updateBookData, {
            new: true //give updated book back
        })
        if(!updatedBook){
            return res.status(404).json({
                success: false,
                message: 'Book with current ID is not found!'
            })
        }
        res.status(200).json({
            success: true,
            message: 'Book is Deleted',
            data: updatedBook
        })
    }
    catch(e){
        console.log(e);
        res.status(500).json({
            success: false,
            message: 'Something went wrong'
        })
    }
}

const deleteBook = async(req,res) => {
    try{
        const getCurrentBookID = req.params.id;
        const deleteBook = await Book.findByIdAndDelete(getCurrentBookID)
        if(!deleteBook){
            return res.status(404).json({
                success: false,
                message: 'Book with current ID is not found!'
            })
        }
        res.status(200).json({
            success: true,
            message: 'Book is Deleted',
            data: deleteBook
        })
    }
    catch(e){
        console.log(e);
        res.status(500).json({
            success: false,
            message: 'Something went wrong'
        })
    }
}

module.exports = {getAllBooks, getSingleBookById, addNewBook, updateBook, deleteBook}