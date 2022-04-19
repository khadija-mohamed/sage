const express = require("express");
const path = require("path");
const cookieSession = require("cookie-session");
const bcrypt = require("bcrypt");
const logger = require("morgan");
const cors = require("cors");

const db = require("./configs/db.config");

const indexRouter = require("./routes/index");
const menteesRouter = require("./routes/mentees");
const mentorsRouter = require("./routes/mentors");
const authRouter = require("./routes/auth");
// const appointmentsRouter = require('./routes/appointments');

const app = express();

app.use(cors());

app.use((req, res, next) => {
  res.setHeader("Acces-Control-Allow-Origin", "*");
  res.setHeader("Acces-Control-Allow-Methods", "GET,POST,PUT,PATCH,DELETE");
  res.setHeader("Acces-Contorl-Allow-Methods", "Content-Type", "Authorization");
  next();
});

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  cookieSession({
    name: "session",
    keys: ["key1", "key2", "key3"],
  })
);
app.use(express.static(path.join(__dirname, "public")));

// Routes
app.use("/", indexRouter);

app.listen(8080, () => console.log('API is running on http://localhost:8080'));

app.use("/mentees", menteesRouter(db));
app.use("/mentors", mentorsRouter(db));
app.use("/login", authRouter(db));
// app.use('/appointments', appointmentsRouter(db));

module.exports = app;
