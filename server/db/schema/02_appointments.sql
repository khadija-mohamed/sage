-- schema/02_appointments.sql
DROP TABLE IF EXISTS appointments CASCADE;

-- CREATE appointments
CREATE TABLE appointments (
  id SERIAL PRIMARY KEY NOT NULL,
  appointment_date DATE,
  appointment_time VARCHAR(255) NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  mentee_id INTEGER REFERENCES mentees(id) ON DELETE CASCADE,
  mentor_id INTEGER REFERENCES mentors(id) ON DELETE CASCADE
);