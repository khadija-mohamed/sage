const router = require("express").Router({
  mergeParams: true,
});
const pool = require("../configs/db.config");
const bcrypt = require("bcryptjs");

module.exports = (db) => {
  const registerNewSagee = async (user) => {
    const result = await pool.query(
      `INSERT INTO mentees(first_name, last_name, location, email, password, photo_url, description, skill,isActive)
      VALUES($1, $2, $3, $4, $5, $6, $7, $8,$9)
      RETURNING email`,
      [
        user.first_name,
        user.last_name,
        user.location,
        user.email,
        user.password,
        user.photo_url,
        user.description,
        user.skill,
        true
      ]
    );
    return result.rows[0];
  };

  const registerNewSage = async (user) => {
    const result = await pool.query(
      `INSERT INTO mentors(first_name, last_name, location, email, password, photo_url, description, skill)
      VALUES($1, $2, $3, $4, $5, $6, $7, $8)
      RETURNING email`,
      [
        user.first_name,
        user.last_name,
        user.location,
        user.email,
        user.password,
        user.photo_url,
        user.description,
        user.skill,
      ]
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

  // sagee registration
  router.post("/register/sagee", async (req, res) => {
    let templateVars = {
      user: req.session,
    };

    const {
      first_name,
      last_name,
      email,
      password,
      photo_url,
      location,
      description,
      skill,
    } = req.body;
    if (
      !first_name ||
      !last_name ||
      !email ||
      !password ||
      !photo_url ||
      !location ||
      !description ||
      !skill
    ) {
      let templateVars = {
        message: "Input fields cannot be blank",
      };
      return res.status(400).json(templateVars);
    }
    const user = await potentialLogin(email);
    console.log("User+++++++++", user);
    if (user) {
      return res.status(400).send({ status: "error", message: "User already registered, please login to continue." });
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
      skill,
    };
    try {
      await registerNewSagee(input);
      let templateVars = {
        message: "all good",
      };
      req.session.email = input.email;
      res.status(200).json(templateVars);
    } catch (err) {
      console.log(err);
      res.status(500).send("error");
    }
  });

  // sage registration
  router.post("/register/sage", async (req, res, next) => {
    let templateVars = {
      user: req.session,
    };

    const {
      first_name,
      last_name,
      email,
      password,
      photo_url,
      location,
      description,
      skill,
    } = req.body;
    if (
      !first_name ||
      !last_name ||
      !email ||
      !password ||
      !photo_url ||
      !location ||
      !description ||
      !skill
    ) {
      let templateVars = {
        message: "Input fields cannot be blank",
        alreadyRegisterted: "This email is already registered.",
        email: req.session.email,
      };
      return res.status(400).json(templateVars);
    }
    const user = await potentialLogin(email);
    console.log("User+++++++++", user);
    if (user) {
      return res.status(400).send({ status: "error", message: "User already registered, please login to continue." });
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
      skill,
    };
    
    try {
      // await allUsers(input.email);
      await registerNewSage(input);
      req.session.email = input.email;
      res.status(200).send();
    } catch (err) {
      console.log(err);
      // return next(err)
      return res.status(400).send();
    }
  });

  router.post("/login", (req, res) => {
    // check email and password
    const { email, password } = req.body;

    if (!email || !password) {
      let templateVars = {
        message: "Input fields cannot be blank",
        user: req.session,
      };
      return res.status(400).json(templateVars);
    }

    // use email to find user in db
    potentialLogin(email).then((user) => {
      let templateVars = {
        message: "Email and/or password is incorrect",
        email: req.session.email,
      };
      if (!user) {
        return res.status(400).json(templateVars);
      }
      // compare password
      const correctPassword = bcrypt.compareSync(password, user.password);
      if (correctPassword) {
        // allUsers()
        req.session.email = user.email;
        return res.status(204).send();
      } else {
        return res.status(400).send(templateVars);
      }
    });
  });

  router.post("/logout", (req, res) => {
    // clear the cookie session when a user clicks the log out button
    req.session.email = null;
    return res.status(204).send();
  });

  return router;
};

//edit mentee profile

router.get("/mentee/:id/edit", (req, res) => {

  const {id} = req.params;
 
  pool.query(`SELECT * FROM mentees WHERE id = $1`, [id])
      .then(data => {
        
   
      return res.json(data.rows[0]);
  });
});


router.post("/mentee/:id/edit", (req, res) => {
  let templateVars = {
    user: req.session
  }
  const {id} = req.params;
  const {photo_url, location, description, skill,isactive } = req.body
  


 pool.query( `Update mentees SET  location = $1, description = $2, skill = $3, photo_url = $4, isactive = $5 WHERE id = $6`,[location, description, skill,photo_url, isactive,id])
 .then(() => {
   console.log('item was added edited');
  res.send("whhhh")
  
});

return router;
 
});

//edit mentor profile

router.get("/mentor/:id/edit", (req, res) => {

  const {id} = req.params;
 
  pool.query(`SELECT * FROM mentors WHERE id = $1`, [id])
      .then(data => {
        
   
      return res.json(data.rows[0]);
  });
});


router.post("/mentor/:id/edit", (req, res) => {
  let templateVars = {
    user: req.session
  }
  const {id} = req.params;
  const {photo_url, location, description, skill,isactive } = req.body
  


 pool.query( `Update mentors SET  location = $1, description = $2, skill = $3, photo_url = $4, isactive = $5 WHERE id = $6`,[location, description, skill,photo_url, isactive,id])
 .then(() => {
   console.log('mentees was added edited');
  res.send("whhhh")
  
});

return router;
 
});