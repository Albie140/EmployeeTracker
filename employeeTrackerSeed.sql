USE employeeTracker_db;

-- department
INSERT INTO department(departmentName)
VALUES ("Engineering"),("Sales"), ("Accounting"), ("Human Resources"), ("Legal"); 

-- role
INSERT INTO role (title, salary, department_id)
VALUES ("Lead Engineer", 80000, 1), ("Sales Manager", 75000, 2), ("Accounting Manager", 78500, 3), ("HR Manager", 74500, 4), ("Lead Attorney", 85000, 5), ("Engineer", 69000, 1), ("Salesperson", 62000, 2), ("Accountant", 55000, 3), ("HR Assistant", 58000, 4), ("Legal Assistant", 52000, 5)

-- employee
INSERT INTO employee(first_name, last_name, role_id, manager_id)
VALUES ("Susan", "Baker", 1, null ), ("Abel", "Chen", 2, null ), ("Maxine", "Johnson", 3, null ), ("Noah", "Parker", 4, null ), ("Janelle", "Rainier", 5,null), ("Amy", "Sanchez", 6, 1), ("Rocco", "Brown", 7, 2), ("Sam", "Peterson", 8, 3), ("Colby", "Anderson", 9, 4), ("Cameron", "James", 10, 5)

