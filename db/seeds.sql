INSERT INTO department (name)
    VALUES ("Legal"),
           ("Sales"),
           ("Finance"),
           ("Engineering")

INSERT INTO role (title, salary, department_id)    
    VALUES ("Sales Lead", "100000", 2),
           ("Salesperson", "80000", 2),
           ("Lead Engineer", "150000", 4),
           ("Software Engineer", "120000", 4),
           ("Account Manager", "160000", 3),
           ("Acountant", "125000", 3),
           ("Legal Team Lead", "250000", 1),
           ("Lawyer", "190000", 1),
           ("Sales Lead", "100000", 2);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
    VALUES ("Jeffrey", "Knight", 1, null),
           ("Juwan", "Dolbrice", 2, 1),
           ("Jordan" "Scott", 3, ,null),
           ("Kyle", "Phipps", 4, 3),
           ("Maria", "Roberts", 5, null),
           ("Serina", "Smith", 6, 5),
           ("Corie", "Knight", 7, null),
           ("Aliah", "Knight", 8, 7 ),
           ("Diane", "Scott", 9, null );

        --    need to fix view employee table, id, fn, ln, title, department, salary, manager
