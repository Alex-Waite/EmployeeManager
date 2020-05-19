USE employees_db;


INSERT INTO department(name)
VALUES ("Restaurant Team");

INSERT INTO department(name)
VALUES ("IT");



INSERT INTO role(title, salary, department_id)
VALUES ("Bossman", 400000, 1);

INSERT INTO role(title, salary, department_id)
VALUES ("Bartender", 20000, 1);

INSERT INTO role(title, salary, department_id)
VALUES ("Chef", 32000, 1);

INSERT INTO role(title, salary, department_id)
VALUES ("Front End Developer", 50000, 2);

INSERT INTO role(title, salary, department_id)
VALUES ("Back End Developer", 55000, 2);



INSERT INTO employee(first_name, last_name, role_id, manager_id)
VALUES ("Jordan", "Reiha", 1, NULL);

INSERT INTO employee(first_name, last_name, role_id, manager_id)
VALUES ("Adam", "Cavuoto", 2, 1);

INSERT INTO employee(first_name, last_name, role_id, manager_id)
VALUES ("Brodie", "Baker", 2, 1);

INSERT INTO employee(first_name, last_name, role_id, manager_id)
VALUES ("Isaiah", "Brown", 3, 1);

INSERT INTO employee(first_name, last_name, role_id, manager_id)
VALUES ("Sean", "Scholar", 4, NULL);

INSERT INTO employee(first_name, last_name, role_id, manager_id)
VALUES ("Mark", "Evans", 5, NULL);

SELECT * FROM employee;

