const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');
const bodyParser = require('body-parser');

let jsonParser = bodyParser.json();
let encodedParser = bodyParser.urlencoded({extended: true});

router.get('/', bookController.getAllBooks);
router.post('/', jsonParser, encodedParser, bookController.createBook);
router.get('/:id', bookController.findOneBook);
router.put('/:id', bookController.updateBook);
router.delete('/:id', bookController.deleteBook);

module.exports = router;