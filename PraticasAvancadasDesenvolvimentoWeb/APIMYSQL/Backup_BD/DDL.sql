CREATE DATABASE API;


CREATE TABLE IF NOT EXISTS USUARIOS(
    ID INT NOT NULL AUTO_INCREMENT,
    NOME VARCHAR(255) NOT NULL,
    IDADE INT NOT NULL,
    CIDADE VARCHAR(150) NOT NULL,
    PRIMARY KEY (ID)
);