const router = require("express").Router({
  mergeParams: true
});
const pool = require("../configs/db.config");
const bcrypt = require("bcrypt");

module.exports = (db) => {


  // all routes will go here
  const potentialLogin = async (email, password) => {
  const result = await pool.query(
    "SELECT id AS mentee_id, email, password FROM mentees UNION SELECT id AS mentor_id, email, password FROM mentors WHERE email=$1 AND password=$2", [email, password]);
    return result.rows[0];
  }

  router.post("/", async (req, res) => {
    const user = await potentialLogin(req.body.email, req.body.password)
    req.session.email = user.id
    res.json({status: 'all good'})

  });
    // const formData = req.body;
    // formSchema
    //   .validate(formData)
    //   .catch((err) => {
    //     res.status(422).send();
    //     console.log(err.errors);
    //   })
    //   .then((valid) => {
    //     if (valid) {
    //       console.log("form is good");
    //     }
    //   });

    // const potentialLogin = await pool.query(
    //   "SELECT id, email, password FROM mentees u WHERE u.email=$1", [req.body.email]);

    //   if (potentialLogin.rowCount > 0) {
    //     const isSamePass = await bcrypt.compare(
    //       req.body.password,
    //       potentialLogin.rows[0].password
    //     );
    //     if (isSamePass) {
    //       req.session.user = {
    //         email: req.body.email,
    //         id: potentialLogin.rows[0].id,
    //       };
    //       res.json({ loggedIn: true, email: req.body.email });
    //     } else {
    //       res.json({ loggedIn: false, status: "Wrong email or password!" });
    //       console.log("not good");
    //     }
    //   } else {
    //     console.log("not good");
    //     res.json({ loggedIn: false, status: "Wrong email or password!" });
    //   }

    // res.send({
    //   token: "test123",
    // });

  router.post("/register", async (req, res) => {
    // const formData = req.body;
    // formSchema
    //   .validate(formData)
    //   .catch((err) => {
    //     res.status(422).send();
    //     console.log(err.errors);
    //   })
    //   .then((valid) => {
    //     if (valid) {
    //       console.log("form is good");
    //     }
    //   });

    const existingUser = await pool.query(
      "SELECT email FROM mentees WHERE email=$1",
      [req.body.email]
    );

    if (existingUser.rowCount === 0) {
      const hashedPassword = await bcrypt.hash(req.body.password, 10);

      const newUserQuery = await pool.query(
        "INSERT INTO mentees(first_name, last_name, email, password, photo_url, description, skill) VALUES($1, $2, $3, $4, $5, $6, $7) RETURNING id, email",
        [
          req.body.first_name,
          req.body.last_name,
          req.body.email,
          hashedPassword,
          req.body.photo_url,
          req.body.description,
          req.body.skill,
        ]
      );
      req.session.user = {
        email,
        id: newUserQuery.rows[0].id,
      }
      res.json({ loggedIn: true, email });
    } else {
      res.json({ loggedIn: false, status: "Email already in use" });
    }
  });

  return router;
};
