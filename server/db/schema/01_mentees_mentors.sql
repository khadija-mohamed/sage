-- schema/01_mentees_mentors.sql
DROP TABLE IF EXISTS mentees CASCADE;
DROP TABLE IF EXISTS mentors CASCADE;

-- CREATE mentees
CREATE TABLE mentees (
  id SERIAL PRIMARY KEY NOT NULL,
  first_name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  photo_url TEXT NOT NULL,
  description VARCHAR(500) NOT NULL,
  skill_id INTEGER REFERENCES skills(id) ON DELETE CASCADE
);

-- CREATE mentors
CREATE TABLE mentors (
  id SERIAL PRIMARY KEY NOT NULL,
  first_name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  photo_url TEXT NOT NULL,
  description VARCHAR(500) NOT NULL,
  skill_id INTEGER REFERENCES skills(id) ON DELETE CASCADE
);