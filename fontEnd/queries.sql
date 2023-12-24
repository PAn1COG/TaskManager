-- Create the 'tasks' table
CREATE TABLE tasks (
    id INT AUTO_INCREMENT PRIMARY KEY,
    Taskname VARCHAR(255) NOT NULL,
    Priority INT DEFAULT 0,
    Timestamps TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create the 'projects' table
CREATE TABLE projects (
    project_id INT AUTO_INCREMENT PRIMARY KEY,
    project_name VARCHAR(255) NOT NULL
);

-- Add the 'project_id' column as a foreign key in the 'tasks' table
ALTER TABLE tasks
ADD COLUMN project_id INT,
ADD FOREIGN KEY (project_id) REFERENCES projects(project_id);



INSERT INTO tasks (Taskname,status,project_id) VALUES ("Task1","inc",13);
INSERT INTO tasks (Taskname,status,project_id) VALUES ("Task5","inc",13);
INSERT INTO tasks (Taskname,status,project_id) VALUES ("Task6","inc",13);
INSERT INTO tasks (Taskname,status,project_id) VALUES ("Task8","inc",13);