const express = require('express');
const chalk = require('chalk');
const morgan = require('morgan')
const helmet = require('helmet');
const bookRoutes = require('./routes/bookRoutes');
const categoryRoutes = require('./routes/categoryRoutes');
const apiRoutes = require('./routes/apiRoutes');

const cors = require('cors');
require('dotenv').config();
const app = express();

const PORT = process.env.PORT || 7777;

app.use(cors());
app.use(morgan('dev'));
app.use(helmet());
app.use('/books', bookRoutes);
app.use('/categories', categoryRoutes);
app.use('/auth', apiRoutes);




app.listen(PORT, () => {
    console.log(chalk.green.inverse('Applikácia beží na porte 7777'));
})