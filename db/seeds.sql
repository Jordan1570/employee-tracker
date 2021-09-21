INSERT INTO department (id, name)
    VALUES (1, "Legal"),
           (2, "Sales"),
           (3, "Finance"),
           (4, "Engineering")

INSERT INTO role (id, title, salary, department_id)    
    VALUES (1, "Sales Lead", "100000", 2),
           (2, "Salesperson", "80000", 2),
           (3, "Lead Engineer", "150000", 4),
           (4, "Software Engineer", "120000", 4),
           (5, "Account Manager", "160000", 3),
           (6, "Acountant", "125000", 3),
           (7, "Legal Team Lead", "250000", 1),
           (8, "Lawyer", "190000", 1),
           (9, "Sales Lead", "100000", 2);
         
INSERT INTO employee (id, first_name, last_name, title, department, salary, manager)
    VALUES (1, "Jeffrey", "Knight", "Saled Lead", "Sales", "100000", "null"),
           (2, "Juwan", "Dolbrice", "Salesperson" , "Sales", "80000", "Jeffrey Knight" ),
           (3, "Jordan" "Scott", "Lead Engineer", "Engineering", "150000", "null" ),
           (4, "Kyle", "Phipps", "Software Engineer", "Engineering", "120000", "Jordan Scott" ),
           (5, "Maria", "Roberts", "Account Manager", "Finance", "160000", "null"),
           (6, "Serina", "Smith", "Accountant", "Finance", "125000", "Maria Roberts"),
           (7, "Corie", "Knight", "Legal Team Lead", "Legal", "250000", "null"),
           (8, "Aliah", "Knight", "Lawyer", "Legal", "190000", "Corie Knight"),
           (9, "Diane", "Scott", "Sales Lead", "Sales", "100000", "null" );
