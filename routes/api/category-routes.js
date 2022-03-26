const router = require("express").Router();
const { Category, Product } = require("../../models");

// The `/api/categories` endpoint
console.log("something is here");

router.get("/", (req, res) => {
  // find all categories
  // be sure to include its associated Products
  Category.findAll({
    include: [Product],
  })
    .then((dbcategoryData) => res.json(dbcategoryData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// router.get("/:id", (req, res) => {
//   // find one category by its `id` value
//   // be sure to include its associated Products
//   Category.findOne({
//     where: {
//       id: req.params.category_name,
//     },
//     attributes: [""],
//     include: [
//       {
//         category_name: category_name,
//         attributes: [""],
//       },
//     ],
//   })
//     .then((dbPostData) => {
//       if (!dbPostData) {
//         res.status(404).json({ message: "No post found with this id" });
//         return;
//       }
//       res.json(dbPostData);
//     })
//     .catch((err) => {
//       console.log(err);
//       res.status(500).json(err);
//     });
// });

// router.post("/", (req, res) => {
//   // create a new category
//   Category.create({
//     category_name: req.body.category_name,
//   })
//     .then((dbcategoryData) => res.json(dbcategoryData))
//     .catch((err) => {
//       console.log(err);
//       res.status(400).json(err);
//     });
// });

// // update a category by its `id` value
// router.put("/:id", (req, res) => {
//   const updateCategory = db.get("category");
//   const params = [req.body.category_name, req.params.id];
//   db.query(updateCategory, params, (err, result) => {
//     if (err) {
//       res.status(400).json({ error: err.message });
//     } else if (!result.affectedRows) {
//       res.json({
//         message: "Category not found",
//       });
//     } else {
//       res.json({
//         message: "success",
//         data: req.body,
//         changes: result.affectedRows,
//       });
//     }
//   });
// });

// router.delete("/:id", (req, res) => {
//   // delete a category by its `id` value
//   Category.destroy({
//     where: {
//       id: req.params.id,
//     },
//   })
//     .then((dbcategoryData) => {
//       if (!dbcategoryData) {
//         res.status(404).json({ message: "No category found with this id!" });
//         return;
//       }
//       res.json(dbcategoryData);
//     })
//     .catch((err) => {
//       console.log(err);
//       res.status(500).json(err);
//     });
// });

module.exports = router;
