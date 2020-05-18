SELECT *FROM addresses;
SELECT * FROM courses;
SELECT * FROM person; 
SELECT * FROM professors;
SELECT * FROM professors_courses;
SELECT * FROM students;
SELECT * FROM students_courses;
SELECT * FROM subjects;

SELECT * FROM courses.course_code WHERE id = 1;

-- select students names, and addresses
SELECT first_name, last_name, addresses.* FROM person
JOIN addresses ON addresses.id =person.addresses_id 
JOIN students ON person.id =students.person_id; 

-- select professors names, and addresses
SELECT first_name, last_name, addresses.* FROM person
JOIN addresses ON addresses.id =person.addresses_id 
JOIN professors ON person.id =professors.person_id;

-- select student by id
--SELECT first_name, last_name FROM person
SELECT * FROM person
JOIN students ON person.id =students.person_id
WHERE students.person_id =2; 
--JOIN students_courses ON students_courses.courses_id =students_courses.students_id; 

 

-- CREATE table person 
CREATE TABLE person(
	id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY, 
	first_name VARCHAR(50),
	last_name VARCHAR(50),
	email VARCHAR(50),
	pass VARCHAR(50),
	phone VARCHAR(20),
	person_type INTEGER,  -- 1 FOR STUDENT, 2 FOR PROFESSOR.
	addresses_id INTEGER REFERENCES Addresses(id)    
);

INSERT INTO person(first_name, last_name, email, pass,phone,person_type,addresses_id)VALUES 
-- STUDENTS
('salem','Aouchiche','saouchiche@gmail.com','salempass','640-610-7614',1,1),
('Billy','Brown','bbrown@gmail.com','bbrownpass','777-700-2185',1,2),
('Cindy','Chevy','cchevy@gmail.com','cchevypass','981-271-4315',1,3),
('Danny','Davidson','ddavidson@gmail.com','ddavidsonpass','160-489-9582',1,4),
('Emily','Erikson','eerikson@gmail.com','eeriksonpass','555-840-7146',1,5),
-- PROFESSORS
('Arvin','Tomankiewicz','atomankiewicz0@prlog.org','V32C0MeV','564-546-8465',2,6),
('Abeu','Tuiller','atuiller1@cafepress.com','0xancu9Y','305-265-3264',2,7),
('Adelle','Coleby','acoleby2@dagondesign.com','LWGaGoOp','788-329-7960',2,8),
('Raquela','Crebo','rcrebo3@fotki.com','plYYSLMOQ4m','393-407-1696',2,9);
/*
5,Hesther,Frangleton,hfrangleton4@creativecommons.org,remwBnsvYP,817-105-8030,5
6,Isaiah,Kinchington,ikinchington5@booking.com,Dq5Id22fB,730-462-9937,6
7,Kania,Greenshields,kgreenshields6@craigslist.org,o8Q6SyOP85H,781-850-9391,7
8,Ilsa,Rushmare,irushmare7@examiner.com,cricMLit9r,368-348-6737,8
9,Alexio,Caush,acaush8@google.es,wbhjkU3t,912-664-0998,9
*/
-- CREATE STUDENTS TABLE
CREATE TABLE students(
	id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY, 
	person_type INTEGER,
	person_id INTEGER REFERENCES person(id) 
);
 

-- INSERT INTO students VALUES.
INSERT INTO students(person_type,person_id)VALUES 
(1,1),
(1,2),
(1,3),
(1,4),
(1,5);

-- CREATE PROFESSORS TABLE 
CREATE TABLE professors(
	id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY, 
	person_type INTEGER,
	person_id INTEGER REFERENCES person(id) 
);
-- INSERT INTO PROFESSORS VALUES.
INSERT INTO professors(person_type,person_id)VALUES 
(2,6),
(2,7),
(2,8),
(2,9);
-- CREATE ADDRESSES TABLE 
CREATE TABLE Addresses(
	id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
	street VARCHAR(100),
	city VARCHAR(50), 
	state VARCHAR(50),
	zipcode INTEGER
);

-- INSERT INTO TABLE ADDRESSES VALUES
INSERT INTO addresses(street, city, state, zipcode) VALUES
('34 Cambridge Trail','Saint Paul','Minnesota',55108),
('87 South Drive','Sacramento','California',94237),
('857 Fremont Place','Peoria','Illinois',61614),
('272 Cottonwood Park','Silver Spring','Maryland',20904),
('47262 Fallview Place','Huntington','West Virginia',25770),
('16 Columbus Center','Tucson','Arizona',85737),
('87 Waxwing Avenue','Seminole','Florida',34642),
('8672 Little Fleur Plaza','Boynton Beach','Florida',33436),
('54861 Kings Circle','South Bend','Indiana',46620),
('3 Del Mar Pass','Houston','Texas',77020);

-- CREATE COURSES TABLE--
CREATE TABLE courses (
	id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY, 
	course_code VARCHAR(20), 
	course_name VARCHAR(50), 
	course_unit INTEGER,  
	description TEXT, 
	subjects_id INTEGER REFERENCES subjects(id)
);

-- INSERT INTO COURSES VALUES
INSERT INTO courses(course_code, course_name, course_unit, description, subjects_id) VALUES
-- mathematics:
	('MATH150', 'Calculus with Analytic Geometry I', '5', 'This course is an introduction to university-level calculus requiring a strong background 
		in algebra and trigonometry.',1),
	('MATH151', 'Calculus with Analytic Geometry II', '4', 'This is the second course in the calculus and analytic geometry sequence.',1),
	('MATH252', 'Calculus with Analytic Geometry III', '4', 'This course includes the algebra and geometry of 2 and 3 dimensional Euclidean vectors,
	 the algebra and calculus of multivariable functions including composition of functions.',1),
-- computer science :
 	('CS190', 'Java Programming', '4', 'This course is an introduction to programming using Java. 
		The course covers the fundamentals of object-oriented programming utilizing the Java programming language 
		for general purpose business programs and interactive World Wide Web-based Internet programs. ',2),
	('CS187', 'C# Programming', '4', 'This course presents basic programming concepts using the C# programming language. ',2),
	('CS210', 'System Analysis and Design', '4',' object-oriented software development life cycle (OOSDLC), 
		software architecture; project management; user interface considerations.',2),
-- English: 
	('ENGL101', 'Reading and Composition', '3', 'This course is designed for transfer-level students or for those who want to develop competence
		in college level reading and composition.',3),
	('ENGL105', 'Composition and literature', '3', 'This is a composition course using literature as a background for improving writing skills.',3),
	('ENGL205', 'Critical Thinking and Intermidiate Composition', '3', ' This intermediate-level college reading and writing course uses 
		the principles of rhetoric to build research and critical thinking skills required for success at four-year institutions.',3);

-- CREATE STUDENTS_COURSES TABLE--
CREATE TABLE students_courses(
	students_id INTEGER REFERENCES students(id),
	courses_id  INTEGER REFERENCES courses(id),
	PRIMARY KEY (students_id,courses_id)
);


-- INSERT INTO STUDENTS_COURSES TABLE 
INSERT INTO students_courses(students_id, courses_id)VALUES 
(1,1),
(1,4),
(1,7),
(2,2),
(2,4),
(2,5),
(3,2),
(3,7),
(4,5); 


-- CREATE PROFESSORS_COURSES TABLE--
CREATE TABLE professors_courses(
	professors_id INTEGER REFERENCES professors(id),
	courses_id  INTEGER REFERENCES courses(id),
	PRIMARY KEY (professors_id,courses_id)
);


-- INSERT INTO PROFESSORS_COURSES TABLE 
INSERT INTO professors_courses(professors_id, courses_id)VALUES 
--  PROFESSOR WITH ID 1 TEACHES COURSES 1, 2
(1,1),
(1,2),
--PROFESSOR WITH ID 2 TEACHES COURSES 2, 3
(2,2),
(2,3),
--PROFESSOR WITH ID 4 TEACHES COURSES  4, 5,6
(3,4),
(3,5),
(3,6),
--PROFESSOR WITH ID 4 TEACHES COURSES  4, 5
(4,4),
(4,5);


-- CREATE SUBJECTS TABLE--
CREATE TABLE subjects(
	id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY, 
	subjects_name varchar (50)
);

-- INSERT INTO SUBJECTS VALUES
INSERT INTO subjects(subjects_name) VALUES
('Mathematics'),
('Computer Sciences'),
('English'); 
--DROP TABLE subjects;

