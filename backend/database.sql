CREATE DATABASE devhub_connect;
USE devhub_connect;

CREATE TABLE user_role (
  id int PRIMARY KEY,
  role_name varchar(60)
);

CREATE TABLE job ( 
  id int PRIMARY KEY,
  jobs_name varchar(60) NOT NULL
);

CREATE TABLE location (
  id int PRIMARY KEY,
  location_name varchar(60)
);

CREATE TABLE user (
  id int(11) UNSIGNED PRIMARY KEY AUTO_INCREMENT,
  cp varchar(8) NOT NULL,
  firstname varchar(60) NOT NULL,
  lastname varchar(60) NOT NULL,
  email varchar(254) NOT NULL,
  biography varchar(140),
  about varchar(600),
  user_image blob,
  user_password varchar(60) NOT NULL,
  github_page varchar(255),
  experience int,
  user_role_id int,
  job_id int,
  location_id int,
  FOREIGN KEY (user_role_id) REFERENCES user_role (id),
  FOREIGN KEY (job_id) REFERENCES job (id),
  FOREIGN KEY (location_id) REFERENCES location (id)
);


CREATE TABLE skill (
  id int PRIMARY KEY,
  skill_name varchar(60)
);

CREATE TABLE user_skill (
  user_id int(11) UNSIGNED NOT NULL,
  skill_id int NOT NULL,
  PRIMARY KEY (user_id, skill_id),
  FOREIGN KEY (user_id) REFERENCES user (id),
  FOREIGN KEY (skill_id) REFERENCES skill (id)
);

CREATE TABLE project (
  id int PRIMARY KEY,
  project_name varchar(60) NOT NULL,
  project_start_date date NOT NULL,
  project_end_date date NOT NULL,
  project_image varchar(255),
  project_description text,
  project_state boolean,
  project_remote boolean,
  location_id int,
  FOREIGN KEY (location_id) REFERENCES location (id)
);

CREATE TABLE project_skill (
  project_id int,
  skill_id int,
  PRIMARY KEY (project_id, skill_id),
  FOREIGN KEY (project_id) REFERENCES project (id),
  FOREIGN KEY (skill_id) REFERENCES skill (id)
);

CREATE TABLE candidacy (
  user_id int(11) UNSIGNED,
  project_id int,
  apply_date datetime,
  user_status int,
  user_motivation varchar(160),
  PRIMARY KEY (user_id, project_id),
  FOREIGN KEY (user_id) REFERENCES user (id),
  FOREIGN KEY (project_id) REFERENCES project (id)
);
