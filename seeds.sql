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
         
INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
    VALUES (1, "Jeffrey", "Knight", 1,),
           (2, "Juwan", "Dolbrice", 2, 1),
           (3, "Jordan" "Scott", 3,),
           (4, "Kyle", "Phipps", 4, 3),
           (5, "Maria", "Roberts", 5,),
           (6, "Serina", "Smith", 6, 5),
           (7, "Corie", "Knight", 7,),
           (8, "Aliah", "Knight" 8, 7),
           (9, "Diane", "Scott", 9, 3);
