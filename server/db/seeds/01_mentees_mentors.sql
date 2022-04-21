-- seeds/01_mentees_mentors.sql
-- mentees seeds
INSERT INTO mentees (first_name, last_name, location, email, password, photo_url, description, skill) VALUES ('Carmen', 'Kuang', 'Toronto','carmen@email.com', '12345', 'https://i.pinimg.com/originals/b3/4c/93/b34c93e00c171542d09bea554db84ce6.jpg', 'student at Lighthouse Labs', 'JavaScript, Html');
INSERT INTO mentees (first_name, last_name, location, email, password, photo_url, description, skill) VALUES ('Khadija', 'Mohamed', 'Montreal','khadija@email.com', '12345', 'https://i.pinimg.com/550x/79/8a/60/798a60ba073aca5b5f241ed2f8fbef1b.jpg', 'student at Lighthouse Labs','JavaScript, Html');
INSERT INTO mentees (first_name, last_name, location, email, password, photo_url, description, skill) VALUES ('Ashley', 'Smith', 'Ottawa','ashley@email.com', '12345', 'https://i.pinimg.com/564x/0a/b7/24/0ab724207bfccd198416e3e7737b2f73.jpg', 'student at Lighthouse Labs','Python, SQL');
INSERT INTO mentees (first_name, last_name, location, email, password, photo_url, description, skill) VALUES ('Josh', 'Richards', 'Toronto','josh@email.com', '12345', 'https://i.pinimg.com/564x/23/4d/b5/234db51f1c1b36344f79c22ee8d0b0e6.jpg', 'student at Lighthouse Labs', 'JavaScript, Html, React, PSQL');
INSERT INTO mentees (first_name, last_name, location, email, password, photo_url, description, skill) VALUES ('Louis', 'Orange', 'Calgary','louis@email.com', '12345', 'https://i.pinimg.com/originals/b3/4c/93/b34c93e00c171542d09bea554db84ce6.jpg', 'student at Lighthouse Labs','C++, Figma, Vue, NoSQ');

-- mentors seeds
INSERT INTO mentors (first_name, last_name, location, email, password, photo_url, description, skill) VALUES ('Sasu', 'Osayande', 'Toronto','sasu@gmail.com', '12345', 'https://images.unsplash.com/photo-1649389763689-58bfb960e4da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80', 'apple employee', 'JavaScript, C++, Ruby, Python');
INSERT INTO mentors (first_name, last_name, location, email, password, photo_url, description, skill) VALUES ('Alice', 'K','Vancouver', 'alice@gmail.com', '12345', 'https://images.unsplash.com/photo-1649132062307-38f97bfaea64?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=930&q=80', 'amazon employee', 'Python, React');
INSERT INTO mentors (first_name, last_name, location, email, password, photo_url, description, skill) VALUES ('Mark', 'H', 'Winnipeg','mark@gmail.com', '56789', 'https://images.unsplash.com/photo-1648708230364-b37c7ba10036?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80', 'apple employee', 'Ruby, Python');
INSERT INTO mentors (first_name, last_name, location, email, password, photo_url, description, skill) VALUES ('Rachel', 'Greens','Toronto', 'rachel@gmail.com', '12345', 'https://images.unsplash.com/photo-1648745999279-cb71e69f103d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=910&q=80', 'apple employee', 'HTML, JavaScript, Ruby, Python');
INSERT INTO mentors (first_name, last_name, location, email, password, photo_url, description, skill) VALUES ('Joe', 'L', 'Halifax','joe@gmail.com', '00000', 'https://images.unsplash.com/photo-1629186383291-2015c9227a4a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=685&q=80', 'funder', 'Java, Ruby, Python, React, PSQL');