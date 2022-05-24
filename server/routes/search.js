const router = require("express").Router({
  mergeParams: true,
});
const pool = require("../configs/db.config");

module.exports = (db) => {
  router.get("/search", (req, res) => {
    console.log("SEARCH BODY", req.query);
    const sql =
      "SELECT * FROM mentors WHERE category_id = $1 AND name LIKE $2 AND price >= $3 AND price <= $4";
    const params = [
      req.query.categories,
      "%" + req.query.itemName + "%",
      req.query.minPrice * 100,
      req.query.maxPrice * 100,
    ];
    db.query(sql, params).then((data) => {
      const templateVars = {
        items: data.rows,
        categories: req.query.categories,
        itemName: req.query.itemName,
      };
      res.render("search", templateVars);
    });
  });
  return router;
};
