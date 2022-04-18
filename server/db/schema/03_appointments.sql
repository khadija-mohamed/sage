-- schema/03_appointments.sql
DROP TABLE IF EXISTS appointments CASCADE;

-- CREATE appointments
CREATE TABLE appointments (
  id SERIAL PRIMARY KEY NOT NULL,
  time TIMESTAMP,
  created_at TIMESTAMP,
  mentee_id INTEGER REFERENCES mentees(id) ON DELETE CASCADE,
  mentor_id INTEGER REFERENCES mentors(id) ON DELETE CASCADE,
);