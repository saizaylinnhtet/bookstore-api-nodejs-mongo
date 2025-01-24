const mongoose = require('mongoose');

const connectToDB = async() => {
    try{
        await mongoose.connect('mongodb+srv://**************:***********@cluster0.j4qee.mongodb.net/');
        console.log('MongoDB is connected successfully');
    }
    catch(error){
        console.error('MongoDB Connection Failed', error);
        process.exit(1);
    }
}

module.exports = connectToDB;
