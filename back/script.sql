CREATE TABLE
    if NOT EXISTS wilders (
        id INT AUTOINCREMENT NOT NULL,
        name TEXT NOT NULL,
        email UNIQUE VARCHAR(150)
    );

SELECT * FROM wilders;