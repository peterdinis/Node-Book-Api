const Category = require("../models/Category");

exports.getAllCategories = async (req, res) => {
  const categories = await Category.find({});
  return res.json({
    message: "All Categories",
    categories,
  });
};

exports.createCategory = async (req, res) => {
  const category = await new Category({
    name: req.body.name,
    info: req.body.info,
  });

  category.save();

  return res.json({
    message: "New Category was created",
    category,
  });
};

exports.findOneCategory = async (req, res) => {
  const id = req.params.id;
  const oneCategory = await Category.findById(id)
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: "Not found category with id",
        });
      } else {
        message: "Category with id", id, oneCategory;
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving category with id",
        id,
        err,
      });
    });
};

exports.updateCategory = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty",
    });
  }

  const id = req.params.id;
  Category.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Category with id=${id}. Maybe Category was not found!`,
        });
      } else res.send({ message: "Category was updated successfully." });
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Category with id=" + id,
      });
    });
};

exports.deleteCategory = (req, res) => {
  const id = req.params.params.id;

  Category.findByIdAndRemove(id)
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Category with id=${id}. Maybe Category was not found!`,
        });
      } else {
        res.send({
          message: "Category was deleted successfully!",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Category with id=" + id,
      });
    });
};
