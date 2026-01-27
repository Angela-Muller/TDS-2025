CREATE DATABASE uc3_restaurante;
USE uc3_restaurante;


CREATE TABLE Users (
	id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(40) NOT NULL,
    email VARCHAR(50) UNIQUE KEY NOT NULL,
    password VARCHAR(255) NOT NULL,
    role ENUM('Chief', 'Costumer') NOT NULL
);

CREATE TABLE Orders (
	id INT PRIMARY KEY AUTO_INCREMENT,
    createdAt DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    userId INT NOT NULL,
    status ENUM('Whait for','In Process', 'Done') NOT NULL,
    FOREIGN KEY (userId) REFERENCES Users(id)
);

CREATE TABLE Dishes (
	id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(30) NOT NULL,
    price DECIMAL(9,2) NOT NULL,
    description TEXT,
    avalieble BOOLEAN NOT NULL DEFAULT TRUE
);

CREATE TABLE Order_Itens (
	id INT PRIMARY KEY AUTO_INCREMENT,
    ordemId INT NOT NULL,
    dishId INT NOT NULL ,
    quantity INT NOT NULL,
    FOREIGN KEY (ordemId) REFERENCES Orders(id),
    FOREIGN KEY (dishId) REFERENCES Dishes(id)
)