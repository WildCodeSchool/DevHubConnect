CREATE CREATE TABLE item (
  id int(11) UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
  title varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO item (title) VALUES ('Stuff'), ('Doodads');

CREATE TABLE `user` (
  `id` int,
  `firstname` varchar(60),
  `lastname` varchar(60),
  `email` varchar(254),
  `biography` varchar(140),
  `about` varchar(600),
  `user_image` blob,
  `password` password,
  `github_page` varchar(255),
  `experience` int,
  `user_role_id` int,
  `job_id` int,
  `location_id` int
);

CREATE TABLE `candidacy` (
  `user_id` int,
  `project_id` int,
  `apply_date` datetime,
  `user_status` int,
  `user_motivation` varchar(160)
);

CREATE TABLE `project` (
  `id` int,
  `project_name` varchar(60),
  `project_start_date` date,
  `project_end_date` date,
  `project_image` varchar(255),
  `description` text,
  `state` boolean,
  `remote` boolean,
  `location_id` int
);

CREATE TABLE `user_skill` (
  `user_id` int,
  `skill_id` int
);

CREATE TABLE `skill` (
  `id` int,
  `skill_name` varchar(60)
);

CREATE TABLE `project_skill` (
  `project_id` int,
  `skill_id` int
);

CREATE TABLE `location` (
  `id` int,
  `location_name` varchar(60)
);

CREATE TABLE `job` (
  `id` int,
  `jobs_name` varchar(60)
);

CREATE TABLE `user_role` (
  `id` int,
  `role_name` varchar(60)
);

CREATE TABLE `user_candidacy` (
  `user_id` int,
  `candidacy_user_id` int,
  PRIMARY KEY (`user_id`, `candidacy_user_id`)
);

ALTER TABLE `user_candidacy` ADD FOREIGN KEY (`user_id`) REFERENCES `user` (`id`);

ALTER TABLE `user_candidacy` ADD FOREIGN KEY (`candidacy_user_id`) REFERENCES `candidacy` (`user_id`);


CREATE TABLE `candidacy_project` (
  `candidacy_project_id` int,
  `project_id` int,
  PRIMARY KEY (`candidacy_project_id`, `project_id`)
);

ALTER TABLE `candidacy_project` ADD FOREIGN KEY (`candidacy_project_id`) REFERENCES `candidacy` (`project_id`);

ALTER TABLE `candidacy_project` ADD FOREIGN KEY (`project_id`) REFERENCES `project` (`id`);


CREATE TABLE `user_skill_user` (
  `user_skill_user_id` int,
  `user_id` int,
  PRIMARY KEY (`user_skill_user_id`, `user_id`)
);

ALTER TABLE `user_skill_user` ADD FOREIGN KEY (`user_skill_user_id`) REFERENCES `user_skill` (`user_id`);

ALTER TABLE `user_skill_user` ADD FOREIGN KEY (`user_id`) REFERENCES `user` (`id`);


CREATE TABLE `project_skill_project` (
  `project_skill_project_id` int,
  `project_id` int,
  PRIMARY KEY (`project_skill_project_id`, `project_id`)
);

ALTER TABLE `project_skill_project` ADD FOREIGN KEY (`project_skill_project_id`) REFERENCES `project_skill` (`project_id`);

ALTER TABLE `project_skill_project` ADD FOREIGN KEY (`project_id`) REFERENCES `project` (`id`);


ALTER TABLE `user` ADD FOREIGN KEY (`job_id`) REFERENCES `job` (`id`);

CREATE TABLE `skill_project_skill` (
  `skill_id` int,
  `project_skill_skill_id` int,
  PRIMARY KEY (`skill_id`, `project_skill_skill_id`)
);

ALTER TABLE `skill_project_skill` ADD FOREIGN KEY (`skill_id`) REFERENCES `skill` (`id`);

ALTER TABLE `skill_project_skill` ADD FOREIGN KEY (`project_skill_skill_id`) REFERENCES `project_skill` (`skill_id`);


CREATE TABLE `skill_user_skill` (
  `skill_id` int,
  `user_skill_skill_id` int,
  PRIMARY KEY (`skill_id`, `user_skill_skill_id`)
);

ALTER TABLE `skill_user_skill` ADD FOREIGN KEY (`skill_id`) REFERENCES `skill` (`id`);

ALTER TABLE `skill_user_skill` ADD FOREIGN KEY (`user_skill_skill_id`) REFERENCES `user_skill` (`skill_id`);


ALTER TABLE `user` ADD FOREIGN KEY (`user_role_id`) REFERENCES `user_role` (`id`);

ALTER TABLE `user` ADD FOREIGN KEY (`location_id`) REFERENCES `location` (`id`);

ALTER TABLE `project` ADD FOREIGN KEY (`location_id`) REFERENCES `location` (`id`);