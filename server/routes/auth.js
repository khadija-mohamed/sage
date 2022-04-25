const router = require("express").Router({
  mergeParams: true,
});
const pool = require("../configs/db.config");
const bcrypt = require("bcryptjs");

module.exports = (db) => {
  const registerNewUser = async (user) => {
    const result = await pool.query(
      `INSERT INTO mentees(first_name, last_name, location, email, password, photo_url, description, skill)
      VALUES($1, $2, $3, $4, $5, $6, $7, $8)
      RETURNING email`,
      [user.first_name, user.last_name, user.location, user.email, user.password, user.photo_url, user.description, user.skill]
    );
    return result.rows[0];
  };

  const potentialLogin = async (email) => {
    const result = await pool.query(
      `SELECT id AS mentee_id, email, password
      FROM mentees WHERE email=$1
      UNION SELECT id AS mentor_id, email, password 
      FROM mentors WHERE email=$1`,
      [email]
    );

    return result.rows[0];
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
    console.log("hash", hashedPassword)

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
    console.log("Session", req.session);
    // check email and password
    const { email, password } = req.body;

    if (!email || !password) {
      let templateVars = {
        message: "Input fields cannot be blank",
        user: req.session,
      };
      return res.status(400).json(templateVars);
    }

    console.log("Email", email);

    // use email to find user in db
    potentialLogin(email)
    .then((user) => {
      let templateVars = {
        message: "Email and/or password is incorrect",
        email: req.session.email,
      };
      // console.log("User", user);
      if(!user) {
        return res.status(400).json(templateVars);
      }
      // compare password
      const correctPassword = bcrypt.compareSync(password, user.password)
      // console.log("Correct Password", correctPassword);
      if(correctPassword) {
        req.session.email = user.email
        console.log("Req.session", req.session);
        return res.status(204).send();
      } else {
        return res.status(400).json(templateVars);
      }
    })
  })

  router.post("/login2", (req, res) => {
    const { email, password } = req.body;
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);
    console.log("hash", hashedPassword)

    let templateVars = {
      message: "Email or password is incorrect",
      user: req.session,
      password: hashedPassword,
    };
    console.log("hashed", templateVars.password)
    console.log("password", password)
    if (!email || !password) {
      let templateVars = {
        message: "Input fields cannot be blank",
        user: req.session,
      };
      return res.status(400).json(templateVars);
    }
    potentialLogin(email, password)
      .then((user) => {
        let templateVars = {
          message: "Email and/or password is incorrect",
          user: req.session,
          password: hashedPassword,
        };
        const result = bcrypt.compareSync(password, templateVars.password)
        console.log("result", result);
        if (!user) {
          let templateVars = {
            message: "Email and/or password is incorrect",
            user: req.session,
          };
          return res.status(400).json(templateVars);
        } 
        if (!result) {
          return res.status(400).json(templateVars);
        } else {
          req.session.email = user.id
          return res.json({});
        }
      })
      .catch((err) => {
        console.log(err);
        res.status(500).end();
      });
    // const result = bcrypt.compareSync(password, templateVars.password)
    // if (!result) {
    //   return res.send("Email or password is incorrect")
    // }
    // req.session.email = user.id
  });

  return router;
};