CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (

	ID INT NOT NULL AUTO_INCREMENT,
	Burger_Name varchar(200) NOT NULL,
	Devoured  BOOLEAN NOT NULL DEFAULT 0,
	LAST_UPDATE_DATE TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
	PRIMARY KEY (ID)
);