CREATE DATABASE uc3_filme;
USE uc3_filme;

CREATE TABLE director (
	idDirector INT PRIMARY KEY AUTO_INCREMENT,
    name_director VARCHAR(40) NOT NULL,
    gender_director VARCHAR(6) NOT NULL,
    place_birth_director VARCHAR(20),
    country_director VARCHAR(20),
    year_birth_director YEAR NOT NULL
);

CREATE TABLE studio (
	idStudio INT PRIMARY KEY AUTO_INCREMENT,
    company_name VARCHAR(40) NOT NULL,
    city VARCHAR (20),
    founded date,
    company_type VARCHAR(40) NOT NULL
);

CREATE TABLE actors (
	idActor INT PRIMARY KEY AUTO_INCREMENT,
    name_actor VARCHAR(40) NOT NULL,
    education VARCHAR(15) NOT NULL,
    gender_actor VARCHAR(6),
    nationality VARCHAR(20) NOT NULL,
    year_of_birth YEAR NOT NULL
);

CREATE TABLE movies (
	idMovie INT PRIMARY KEY AUTO_INCREMENT,
    idDirector INT NOT NULL,
    idStudio INT NOT NULL,
    name_movie VARCHAR(40) NOT NULL,
    country_realese VARCHAR(20) NOT NULL,
    languagee VARCHAR(15) NOT NULL,
    year_release YEAR NOT NULL,
    category VARCHAR(20) NOT NULL,
    FOREIGN KEY (idDirector) REFERENCES director(idDirector),
    FOREIGN KEY (idStudio) REFERENCES studio(idStudio)
);

CREATE TABLE casts (
	idCasts INT PRIMARY KEY AUTO_INCREMENT,
    idMovie INT NOT NULL,
    idActor INT NOT NULL,
    roletype VARCHAR(20),
	FOREIGN KEY (idMovie) REFERENCES movies(idMovie),
    FOREIGN KEY (idActor) REFERENCES actors(idActor)
);
		