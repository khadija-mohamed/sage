const router = require("express").Router({
  mergeParams: true,
});
const pool = require("../configs/db.config");
const bcrypt = require("bcrypt");

module.exports = (db) => {
  const registerNewUser = async (user) => {
    const result = await pool.query(
      "INSERT INTO mentees(first_name, last_name, email, password, photo_url, description, skill) VALUES($1, $2, $3, $4, $5, $6, $7) RETURNING email",
      [user.first_name, user.last_name, user.email, user.password, user.photo_url, user.description, user.skill]
    );
    return result.rows[0];
  };

  const potentialLogin = async (email, password) => {
    const result = await pool.query(
      "SELECT id AS mentee_id, email, password FROM mentees UNION SELECT id AS mentor_id, email, password FROM mentors WHERE email=$1 AND password=$2",
      [email, password]
    );

    const actualUser = result.rows.filter((item) => item.password === password && item.email === email);

    return actualUser[0];
  };

  // all routes will go here

  router.post("/register/sagee", async (req, res) => {
    let templateVars = {
      user: req.session,
    };

    const { first_name, last_name, email, password, photo_url, description, skill } = req.body;
    if (!first_name || !last_name || !email || !password || !photo_url || !description || !skill) {
      let templateVars = {
        message: "Input fields cannot be blank",
      };
      return res.status(400).json(templateVars);
    }
    const input = {
      first_name,
      last_name,
      email,
      password,
      photo_url,
      description,
      skill
    }
    try {
    await registerNewUser(input)
        let templateVars = {
          message: "all good",
        };
        // if (!user) {
        //   let templateVars = {
        //     message: "Email is registered",
        //     user: req.session,
        //   };
        req.session.email = input.email;
       res.status(200).json(templateVars);
        } 
      catch(err) {
        console.log(err);
        res.status(500).send("error");
      }
      });

  router.post("/login", (req, res) => {
    let templateVars = {
      message: "Email or password is incorrect",
      user: req.session,
    };
    const { email, password } = req.body;
    if (!email || !password) {
      let templateVars = {
        message: "Input fields cannot be blank",
        user: req.session,
      };
      return res.status(400).json(templateVars);
    }

    potentialLogin(email, password)
      .then((user) => {
        if (!user) {
          let templateVars = {
            message: "Email is not registered",
            user: req.session,
          };
          return res.status(400).json(templateVars);
        } else if (user.password !== password) {
          return res.status(400).json(templateVars);
        } else {
          req.session["user_id"] = user.id;
          return res.json({});
        }
      })
      .catch((err) => {
        console.log(err);
        res.status(500).end();
      });
    
  });

 

  return router;
};