INSERT INTO department (id, name)
    VALUES (1, "Legal"),
           (2, "Sales"),
           (3, "Finance"),
           (4, "Engineering")

INSERT INTO role (id, title, salary, department_id)    
    VALUES (1, "Sales Lead", "100000", 2),
           (2, "Salesperson", "80000", 2),
           (2, "Lead Engineer", "150000", 4),
           (3, "Software Engineer", "120000", 4),
           (4, "Account Manager", "160000", 3),
           (5, "Acountant", "125000", 3),
           (6, "Legal Team Lead", "250000", 1),
           (7, "Lawyer", "190000", 1),
           (8, "Sales Lead", "100000", 2) 
         
INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
    VALUES (1, "Jeffrey", "Knight", 00,),
           (2, "Juwan", "Dolbrice", 01, 09),
           (3, "Jordan" "Scott", 02,),
           (4, "Kyle", "Phipps", 03, 11),
           (5, "Maria", "Roberts", 04,)
           (6, "Serina", "")
