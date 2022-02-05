const mongoose = require('mongoose');
require('dotenv').config()

mongoose
    .connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}/tiapi?retryWrites=true&w=majority`, { useNewUrlParser: true })
    .then(() => console.log('Mongo Connected'))
    .catch(e => {
        console.error('Connection error', e.message)
    });

const database = mongoose.connection;

module.exports = database;