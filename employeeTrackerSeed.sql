USE employeeTracker_db;

-- department
INSERT INTO department(departmentName)
VALUES ("Engineering");
-- role
INSERT INTO role (title, salary, department_id)
VALUES ("Engineer", 80000, 1);
-- employee
INSERT INTO employee(first_name, last_name, role_id, manager_id)
VALUES ("Susan", "Baker", 1, null );

-- department
INSERT INTO department(departmentName)
VALUES ("Sales");
-- role
INSERT INTO role (title, salary, department_id)
VALUES ("Sales Manager", 75000, 2);
-- employee
INSERT INTO employee(first_name, last_name, role_id, manager_id)
VALUES ("Abel", "Chen", 2, null );

-- department
INSERT INTO department(departmentName)
VALUES ("Accounting");
-- role
INSERT INTO role (title, salary, department_id)
VALUES ("Accounting Manager", 78500, 3);
-- employee
INSERT INTO employee(first_name, last_name, role_id, manager_id)
VALUES ("Maxine", "Johnson", 2, null );

-- department
INSERT INTO department(departmentName)
VALUES ("Human Resources");
-- role
INSERT INTO role (title, salary, department_id)
VALUES ("HR Manager", 74500, 4);
-- employee
INSERT INTO employee(first_name, last_name, role_id, manager_id)
VALUES ("Noah", "Parker", 4, null );