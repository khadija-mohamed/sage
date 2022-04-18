-- schema/02_categories_skills.sql
DROP TABLE IF EXISTS skills CASCADE;

-- CREATE categories
CREATE TABLE categories (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
);

-- CREATE skills
CREATE TABLE skills (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  category_id INTEGER REFERENCES categories(id) ON DELETE CASCADE
);