CREATE DATABASE uc3_estudantes;
USE uc3_estudantes;

CREATE TABLE students (
	id INT PRIMARY KEY AUTO_INCREMENT,
    name_student VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL
);

CREATE TABLE instructors (
	id INT PRIMARY KEY AUTO_INCREMENT,
    name_instructor VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL
);

CREATE TABLE departments (
	code VARCHAR(20) PRIMARY KEY NOT NULL,
    name VARCHAR(40) NOT NULL
);

CREATE TABLE courses (
    code VARCHAR(20) PRIMARY KEY NOT NULL,
    title VARCHAR(40) NOT NULL,
    descricpition TEXT NOT NULL,
    idStudent INT NOT NULL,
    idInstructor INT NOT NULL,
    codeDepartment VARCHAR(20) NOT NULL,
    FOREIGN KEY (idStudent) REFERENCES students(id),
    FOREIGN KEY (idInstructor) REFERENCES instructors(id),
    FOREIGN KEY (codeDepartment) REFERENCES departments(code)
);