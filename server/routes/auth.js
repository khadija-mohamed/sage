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
      await registerNewUser(input);
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
        // console.log("herrrrr",user,req.session)
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
            req.session.email = user.email;
            return res.status(204).send();
          } else {
            return res.status(400).send();
          }
        });
        
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
  const {photo_url, location, description, skill,isactive } = req.body
  


 pool.query( `Update mentees SET  location = $1, description = $2, skill = $3, photo_url = $4, isactive = $5`,[location, description, skill,photo_url, isactive])
 .then(() => {
   console.log('item was added edited');
  res.send("whhhh")
  
});

return router;
 
});

