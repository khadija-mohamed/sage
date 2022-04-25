const router = require("express").Router({
  mergeParams: true,
});
const pool = require("../configs/db.config");
const bcrypt = require("bcryptjs");

module.exports = (db) => {
  const registerNewUser = async (user) => {
    const result = await pool.query(
      "INSERT INTO mentees(first_name, last_name, location, email, password, photo_url, description, skill) VALUES($1, $2, $3, $4, $5, $6, $7, $8) RETURNING email",
      [user.first_name, user.last_name, user.location, user.email, user.password, user.photo_url, user.description, user.skill]
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

    const { first_name, last_name, email, password, photo_url, location, description, skill } = req.body;
    if (!first_name || !last_name || !email || !password || !photo_url || !location || !description || !skill) {
      let templateVars = {
        message: "Input fields cannot be blank",
      };
      return res.status(400).json(templateVars);
    }
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);

    const input = {
      first_name,
      last_name,
      email,
      password: hashedPassword,
      photo_url,
      location,
      description,
      skill
    }
    console.log("Input", input)
    try {
    await registerNewUser(input)
        let templateVars = {
          message: "all good",
        };
        req.session.email = input.email;
       res.status(200).json(templateVars);
        } 
      catch(err) {
        console.log(err);
        res.status(500).send("error");
      }
      });

  router.post("/login", (req, res) => {
    const { email, password } = req.body;
    let templateVars = {
      message: "Email or password is incorrect",
      user: req.session,
      password,
    };
    if (!email || !password) {
      let templateVars = {
        message: "Input fields cannot be blank",
        user: req.session,
      };
      return res.status(400).json(templateVars);
    }
<<<<<<< HEAD

    potentialLogin(email, password)
      .then((user) => {
        if (!user) {
          let templateVars = {
            message: "Email and/or password is incorrect",
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
    
=======
    const result = bcrypt.compareSync(password, templateVars.password)
    if (!result) {
      return res.send("Email or password is incorrect")
    }
    req.session.email = user.id
>>>>>>> d4edaeb21e456009049201c6cfc7df2d22e85eb9
  });

  return router;
};