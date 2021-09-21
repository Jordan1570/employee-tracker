DROP DATABASE IF EXISTS company_db;
CREATE DATABASE company_db;

USE company_db;


CREATE TABLE department(
    id INT PRIMARY KEY,
    name VARCHAR(30) 
);

CREATE TABLE role(
    id INT PRIMARY KEY,
    title VARCHAR(30),
    FOREIGN KEY (department_id)
    REFERENCES department(id)
    salary DECIMAL,
);

CREATE TABLE employee(
    id INT PRIMARY KEY,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    FOREIGN KEY (title)
    REFERENCES role(title),
    FOREIGN KEY (department)
    REFERENCES department(name),
    FOREIGN KEY (salary)
    REFERENCES role(salary)
    FOREIGN KEY (manager)
    REFERENCES employee(first_name, last_name)
);