INSERT INTO department (id, name)
    VALUES (00, "Legal"),
           (01, "Sales"),
           (02, "Finance"),
           (03, "Engineering")

INSERT INTO role (id, title, salary, department_id)    
    VALUES (00, "Sales Lead", "100000", 01),
           (01, "Salesperson", "80000", 01),
           (02, "Lead Engineer", "150000", 03),
           (03, "Software Engineer", "120000", 03),
           (04, "Account Manager", "160000", 02),
           (05, "Acountant", "125000", 02),
           (06, "Legal Team Lead", "250000", 00),
           (07, "Lawyer", "190000", 00),
           (08, "Sales Lead", "100000", 01) 
         