const express = require('express');
const router = express.Router();

const bodyParser = require('body-parser');
const categoryController = require('../controllers/categoryController');
let jsonParser = bodyParser.json();
let encodedParser = bodyParser.urlencoded({extended: true});

router.get('/', categoryController.getAllCategories);
router.post('/', jsonParser, encodedParser, categoryController.createCategory);
router.get('/:id', categoryController.findOneCategory);
router.put('/:id', jsonParser, encodedParser, categoryController.updateCategory);
router.delete('/:id', jsonParser, encodedParser, categoryController.deleteCategory)

module.exports = router;