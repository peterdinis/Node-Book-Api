const mongoose = require('mongoose');
const chalk = require('chalk');
require('dotenv').config();

mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://peter:PETERdinis1234@cluster0.6cie9.mongodb.net/BooksAppSite?retryWrites=true&w=majority',
    {
        useNewUrlParser: true
    },
     () => {
         console.log(chalk.green.inverse("Connect to mongo"));
     }
);

module.exports = mongoose;