-- Active: 1678112592222@@127.0.0.1@3306

CREATE TABLE
    if NOT EXISTS wilders (
        id INT AUTOINCREMENT NOT NULL,
        name TEXT NOT NULL,
        email UNIQUE VARCHAR(150)
    );

SELECT * FROM wilders;