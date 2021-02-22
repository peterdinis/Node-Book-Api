const Book = require("../models/Book");

exports.getAllBooks = async (req, res) => {
  const books = await Book.find({});
  return res.json({
    message: "All Books",
    books,
  });
};

exports.createBook = async (req, res) => {
  const book = await new Book({
    name: req.body.name,
    info: req.body.info,
    genre: req.body.genre,
    pages: req.body.pages,
    image: req.body.image,
    author: req.body.author,
    year: req.body.year,
  });

  book.save();

  return res.json({
    message: "New Book was created",
    book,
  });
};

exports.findOneBook = async (req, res) => {
  const id = req.params.id;

  const oneBook = await Book.findById(id)
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: "Not found book with id",
          id,
        });
      } else {
        res.json({
          message: "Book with id",
          oneBook,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving book with id",
        id,
        err,
      });
    });
};

exports.updateBook = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!",
    });
  }

  const id = req.params.id;

  Book.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Book with id=${id}. Maybe Book was not found!`,
        });
      } else res.send({ message: "Book was updated successfully." });
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Book with id=" + id,
      });
    });
};

exports.deleteBook = (req, res) => {
  const id = req.params.id;

  Book.findByIdAndRemove(id)
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Book with id=${id}. Maybe Book was not found!`,
        });
      } else {
        res.send({
          message: "Book was deleted successfully!",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Book with id=" + id,
      });
    });
};
