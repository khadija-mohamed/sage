const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const db = require('./configs/db.config');

const indexRouter = require('./routes/index');
const menteesRouter = require('./routes/mentees');
const mentorsRouter = require('./routes/mentors');
const appointmentsRouter = require('./routes/appointments');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/', indexRouter);
app.use('/mentees', menteesRouter(db));
app.use('/mentors', mentorsRouter(db));
app.use('/appointments', appointmentsRouter(db));

module.exports = app;
