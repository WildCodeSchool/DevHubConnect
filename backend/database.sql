-- SQLBook: Code
DROP DATABASE IF EXISTS devhub_connect;
CREATE DATABASE devhub_connect;

USE devhub_connect;

DROP TABLE IF EXISTS user_role;
CREATE TABLE user_role (
  id int PRIMARY KEY AUTO_INCREMENT,
  role_name varchar(60)
);

DROP TABLE IF EXISTS job;
CREATE TABLE job ( 
  id int PRIMARY KEY AUTO_INCREMENT,
  job_name varchar(60) NOT NULL
);

DROP TABLE IF EXISTS skill;
CREATE TABLE skill (
  id int UNSIGNED PRIMARY KEY AUTO_INCREMENT,
  skill_name varchar(60)
);

DROP TABLE IF EXISTS region;
CREATE TABLE region (
  id int UNSIGNED PRIMARY KEY AUTO_INCREMENT,
  region_name varchar(60)
);

DROP TABLE IF EXISTS user;
CREATE TABLE user (
  id int(11) UNSIGNED PRIMARY KEY AUTO_INCREMENT,
  cp varchar(8) NOT NULL,
  firstname varchar(60) NOT NULL,
  lastname varchar(60) NOT NULL,
  email varchar(254) UNIQUE NOT NULL, -- UNIQUE pour login
  biography varchar(140),
  about varchar(1000),
  user_image varchar(1000),
  hashedPassword varchar(255) NOT NULL, -- 255 pour le hachage
  github_page varchar(255),
  experience int,
  user_role_id int,
  job_id int,
  region_id int UNSIGNED,
  FOREIGN KEY (region_id) REFERENCES region (id) ON DELETE CASCADE,
  FOREIGN KEY (user_role_id) REFERENCES user_role (id) ON DELETE CASCADE,
  FOREIGN KEY (job_id) REFERENCES job (id) ON DELETE CASCADE
);

DROP TABLE IF EXISTS project;
CREATE TABLE project (
  id int PRIMARY KEY AUTO_INCREMENT,
  project_name varchar(60) NOT NULL,
  project_start_date date,
  project_end_date date,
  project_image varchar(255),
  project_description text,
  project_state boolean,
  project_remote boolean,
  region_id int UNSIGNED,
  creator_id int UNSIGNED NOT NULL,
  FOREIGN KEY (region_id) REFERENCES region (id),
  FOREIGN KEY (creator_id) REFERENCES user (id) ON DELETE CASCADE
);


/* JOINTURE */

DROP TABLE IF EXISTS user_skill;
CREATE TABLE user_skill (
  id int PRIMARY KEY AUTO_INCREMENT,
  user_id int(11) UNSIGNED,
  skill_id int UNSIGNED,
  FOREIGN KEY (user_id) REFERENCES user (id),
  FOREIGN KEY (skill_id) REFERENCES skill (id)
);

DROP TABLE IF EXISTS project_skill;
CREATE TABLE project_skill (
  id int PRIMARY KEY AUTO_INCREMENT,
  project_id int,
  skill_id int UNSIGNED,
  FOREIGN KEY (project_id) REFERENCES project (id),
  FOREIGN KEY (skill_id) REFERENCES skill (id)
);

DROP TABLE IF EXISTS candidacy;
CREATE TABLE candidacy (
  id int PRIMARY KEY AUTO_INCREMENT,
  user_id int(11) UNSIGNED,
  project_id int,
  apply_date date,
  user_status int,
  user_motivation varchar(240),
  FOREIGN KEY (user_id) REFERENCES user (id) ON DELETE CASCADE,
  FOREIGN KEY (project_id) REFERENCES project (id) ON DELETE CASCADE
);


/* INSERT INTO */

INSERT INTO region (id, region_name)
VALUES
(1, 'Ile-de-France'),
(2, 'Nord-Pas-de-Calais'),
(3, 'Champagne-Ardenne'),
(4, 'Picardie'),
(5, 'Haute-Normandie'),
(6, 'Basse-Normandie'),
(7, 'Bourgogne'),
(8, 'Franche-Comté'),
(9, 'Alsace'),
(10, 'Lorraine'),
(11, 'Languedoc-Roussillon'),
(12, 'Provence-Alpes-Côte d Azur'),
(13, 'Rhône-Alpes'),
(14, 'Aquitaine'),
(15, 'Midi-Pyrénées'),
(16, 'Poitou-Charentes'),
(17, 'Centre'),
(18, 'Bretagne'),
(19, 'Pays de la Loire'),
(20, 'Limousin'),
(21, 'Auvergne');

INSERT INTO skill (id, skill_name) VALUES
(1, 'HTML/CSS'),
(2, 'JavaScript'),
(3, 'PHP'),
(4, 'SQL'),
(5, 'Ruby on Rails'),
(6, 'Java'),
(7, 'Python'),
(8, 'C#'),
(9, 'AngularJS'),
(10, 'ReactJS'),
(11, 'Vue.js'),
(12, 'Node.js'),
(13, 'Express'),
(14, 'Django'),
(15, 'Flask'),
(16, 'ASP.NET'),
(17, 'Laravel'),
(18, 'Spring'),
(19, 'MongoDB'),
(20, 'Firebase');

INSERT INTO job (id, job_name) VALUES
(1, 'Développeur web'),
(2, 'Designer UX/UI'),
(3, 'Intégrateur web'),
(4, 'Développeur Front-End'),
(5, 'Développeur Back-End'),
(6, 'Chef de projet web'),
(7, 'Analyste en sécurité web'),
(8, 'Développeur Full Stack'),
(9, 'Expert SEO'),
(10, 'Développeur mobile'),
(11, 'Scrum Master'),
(12, 'Testeur web'),
(13, 'DevOps Engineer'),
(14, 'Data Analyst'),
(15, 'Expert en e-commerce'),
(16, 'Scrum Master'),
(17, 'Product Owner'),
(18, 'Coach Agile'),
(19, 'Facilitateur Agile'),
(20, 'Développeur Agile'),
(21, 'Testeur Agile'),
(22, 'Analyste Agile'),
(23, 'Designer Agile');

INSERT INTO user_role (role_name) VALUES
('Administrator'),
('Moderator'),
('Member'),
('Guest');

INSERT INTO user (id, cp, firstname, lastname, email, biography, about, user_image, hashedPassword, github_page, experience, user_role_id, job_id, region_id) VALUES 
('1','9400000B', 'Mark', 'Zuckerberg', 'mark.zuckerberg@facebook.com', 'Co-fondateur de Facebook', ' Bonjour, je suis Mark Zuckerberg, fondateur de Facebook. J ai grandi en banlieue de New York et j ai découvert ma passion pour la technologie et la connectivité sociale pendant mes études à Harvard. Après avoir lancé Facebook en 2004, j ai travaillé sans relâche pour construire la plus grande plateforme de médias sociaux au monde.
Aujourd hui, je continue de diriger Facebook en utilisant la technologie pour connecter des personnes et favoriser la communication et la collaboration à l échelle mondiale. Je suis également impliqué dans de nombreux projets philanthropiques, notamment la fondation Chan Zuckerberg Initiative, qui vise à aider à résoudre les plus grands défis mondiaux à travers la science et la technologie.
', 'https://randomuser.me/api/portraits/women/19.jpg', '$argon2id$v=19$m=65536,t=5,p=1$NJJuWXB2avclJ+7N+ccowQ$nDIEriUSE99xq5e1sXJ3OoBbbsJViyi19bccI/W69QY', 'https://github.com/markzuckerberg', 10, 1, 1, 1), 
('2','9402200B', 'Elon', 'Musk', 'elon.musk@spacex.com', 'PDG de SpaceX et Tesla', ' Bonjour, je suis Elon Musk, entrepreneur et ingénieur technologique. J ai fondé plusieurs entreprises de pointe, notamment Tesla, SpaceX et The Boring Company, avec pour objectif de rendre la vie meilleure pour tous les êtres humains.
Mon parcours a commencé par la fondation de Zip2, une entreprise de publication en ligne, vendue plus tard à Compaq pour 307 millions de dollars. Depuis, j ai continué de développer des entreprises qui utilisent la technologie pour résoudre les défis les plus importants de notre temps, notamment la transition vers des sources d énergie propres et la colonisation de Mars.
Je suis convaincu que nous avons la capacité de faire une réelle différence dans le monde et je travaille sans relâche pour atteindre cet objectif. Je suis enthousiaste à l idée de voir ce que nous pourrons accomplir ensemble dans les années à venir.
.', 'https://randomuser.me/api/portraits/women/56.jpg', '$argon2id$v=19$m=65536,t=5,p=1$fyx9xPZ2shUbiWj47fxoHg$2/FWCO4U8da5+TvcroQ8h8LhjpHQ6EjIitMUUGgpavw', 'https://github.com/elonmusk', 20, 2, 2, 2),
 ('3','1000100C', 'Steve', 'Jobs', 'steve.jobs@apple.com', 'Co-fondateur d Apple', 'Je suis Steve Jobs, co-fondateur et ancien PDG d Apple Inc. J ai également fondé NeXT et Pixar. Mon parcours a été marqué par une passion pour la simplicité et la créativité, ainsi que par un amour pour les produits étonnants qui touchent les gens de manière profonde. Je suis persuadé que la technologie peut changer le monde pour le mieux et je me suis consacré à ce but tout au long de ma carrière. Mon engagement en faveur de la simplicité, de l excellence design et de la pertinence a aidé à façonner l industrie de la technologie telle que nous la connaissons aujourd hui. ', 'https://randomuser.me/api/portraits/women/68.jpg', '$argon2id$v=19$m=65536,t=5,p=1$daK6iuI3+n/IpmIA6PaiRA$bZTkHFu4o+/ZXxdRDPJRlNtYJcXEFZt9khjsYKj//KI', 'https://github.com/stevejobs', 15, 2, 3, 3), 
('4','1000200D', 'Bill', 'Gates', 'bill.gates@microsoft.com', 'Co-fondateur de Microsoft', 'Je suis Bill Gates, co-fondateur de Microsoft et fondateur de la fondation Bill et Melinda Gates. J ai passé de nombreuses années à développer et à commercialiser des logiciels pour les ordinateurs personnels, ce qui a contribué à changer le monde en fournissant une technologie accessible à tous. Aujourd hui, je me concentre sur l utilisation de la philanthropie pour faire une différence dans le monde en matière de santé, d éducation et de développement économique.', 'https://randomuser.me/api/portraits/women/50.jpg', '$argon2id$v=19$m=65536,t=5,p=1$YtmAuT6EiCjEUzjdQRFdCw$VGJGbRJR7OYIUkd8bp4EH7Kb5nWjwY32fKFT5JB/DEg', 'https://github.com/billgates', 25, 2, 4, 4),
('5','1000300A', 'Larry', 'Page', 'larry.page@google.com', 'Co-fondateur de Google', 'Je suis Larry Page, co-fondateur de Google. Mon objectif est de rendre l information accessible à tous et de créer un monde plus connecté grâce à la technologie. En tant que PDG de Alphabet Inc., la société mère de Google, je continue de diriger l entreprise en explorant de nouvelles opportunités pour améliorer la vie des gens à travers la technologie. ', 'https://randomuser.me/api/portraits/women/27.jpg', '$argon2id$v=19$m=65536,t=5,p=1$AkAkScpU6cJSUuT/vq0RQA$naKpOcbyYPjSeAxf6xQIWI/6XymcKNpWKGJGroSScGA', 'https://github.com/larrypage', 20, 2, 5, 5),
('6','3333330D', 'Jack', 'Dorsey', 'jack.dorsey@twitter.com', 'Co-founder of Twitter', ' Je suis Jack Dorsey, co-fondateur de Twitter et fondateur de Square. Je suis passionné par la création de produits simples et puissants qui connectent les gens et les aident à communiquer de manière plus efficace. Twitter a été fondé sur cette idée et depuis, il a évolué pour devenir un moyen de communication incroyablement puissant pour les individus, les organisations et les gouvernements à travers le monde. Avec Square, j ai voulu fournir aux petites entreprises une technologie simple et accessible pour gérer leurs finances et atteindre leur plein potentiel. ', 'https://randomuser.me/api/portraits/women/46.jpg', '$argon2id$v=19$m=65536,t=5,p=1$8N3amcYoGFZnDDCEjZz56w$ynEmaJob+XB7Em+sMnCkPwzC6jZVub89eB57EbkMVuY', 'https://github.com/jackdorsey', 15, 1, 1, 1),
('7','4443567M', 'Jeff', 'Bezos', 'jeff.bezos@amazon.com', 'Co-fondateur de Amazon','Bonjour, je suis Jeff Bezos, fondateur et CEO d Amazon.com. J ai fondé Amazon en 1994 en tant qu entreprise de commerce électronique en ligne et nous avons rapidement grandi pour devenir l un des plus grands détaillants en ligne du monde. Je suis également investisseur dans d autres entreprises telles que Blue Origin, une entreprise de tourisme spatial, et The Washington Post. Mon objectif est de toujours améliorer la vie des gens en utilisant la technologie pour résoudre les défis les plus complexes.', 'https://randomuser.me/api/portraits/women/84.jpg', '$argon2id$v=19$m=65536,t=5,p=1$ncifmFKmxjAQqhm8kddQ/A$ZHkEH7vg98rRlrr1++v2fDdwzquEQs7NqVZUknpO6no','https://github.com/jeffbezos', 15, 2, 4, 4),
('8','4568964J','Tim', 'Cook','tim.cook@apple.com', 'CEO de Apple', 'Bonjour, je suis Tim Cook, CEO d Apple. J ai rejoint Apple en 1998 et j ai été nommé CEO en 2011, succédant à Steve Jobs. Sous ma direction, Apple a continué à se concentrer sur la conception d un matériel et d un logiciel de qualité supérieure pour ses clients. J ai également mis en œuvre des initiatives en matière de responsabilité sociale, telles que l utilisation d énergies renouvelables pour alimenter nos centres de données. Je suis passionné par le pouvoir de la technologie pour améliorer la vie des gens.', 'https://randomuser.me/api/portraits/women/22.jpg', '$argon2id$v=19$m=65536,t=5,p=1$9zYHLw+OTfiGldaYFoKN/w$tE8gyB09bEHgw/alOnRJLIaXhzKSNXRUP9v19R2yoxY','https://github.com/timcook', 11, 4, 1, 1);



INSERT INTO project (id, project_name, project_start_date, project_end_date, project_image, project_description, project_state, project_remote, region_id, creator_id)
VALUES 
(1, 'Facebook', '2018-02-04', '2024-01-01', 'facebook.jpg', 'Projet de création d''un réseau social', 1, 0, 1, 1),
(2, 'Virtual Reality', '2024-06-06', '2027-12-12', 'virtual-reality.jpg', 'Projet de développement de la réalité virtuelle', 2, 1, 1, 2),
(3, 'OpenAI', '2021-06-06', '2025-12-12', 'openai.jpg', 'Projet de développement d''IA', 1, 1, 1, 3),
(4, 'SpaceX', '2024-02-02', '2028-01-01', 'spacex.jpg', 'Projet de transport en orbite', 2, 0, 2, 4),
(5, 'Tesla', '2003-03-03', '2021-01-01', 'tesla.jpg', 'Projet de voitures électriques', 3, 0, 2, 5),
(6, 'Neuralink', '2016-06-06', '2022-12-12', 'neuralink.jpg', 'Projet de développement de la connectivité cerveau-machine', 3, 1, 2, 6),
(7, 'Apple', '1976-04-01', '2011-08-24', 'apple.jpg', 'Projet de développement de l''ordinateur personnel', 3, 0, 3, 7),
(8, 'iPod', '2001-10-23', '2014-09-07', 'ipod.jpg', 'Projet de développement de l''iPod', 3, 0, 3, 8),
(9, 'iPhone', '2007-06-29', '2021-01-01', 'iphone.jpg', 'Projet de développement de l''iPhone', 3, 0, 3, 1),
(10, 'Microsoft', '1975-04-04', '2020-12-31', 'microsoft.jpg', 'Projet de développement de logiciels pour l''ordinateur personnel', 3, 0, 4, 2),
(11, 'Windows', '1985-11-20', '2021-01-01', 'windows.jpg', 'Projet de développement de l''OS Windows', 3, 0, 4, 3),
(12, 'XBox', '2001-11-15', '2021-01-01', 'xbox.jpg', 'Projet de développement de la console Xbox', 3, 0, 4, 4),
(13, 'Google', '1998-09-04', '2021-01-01', 'google.jpg', 'Projet de création d''un moteur de recherche en ligne', 3, 0, 5, 5),
(14, 'Google AI', '2022-06-06', '2025-12-12', 'google-ai.jpg', 'Projet de développement de l''IA', 1, 1, 5, 6),
(15, 'Twitter', '2006-03-21', '2022-12-12', 'twitter.jpg', 'Twitter est un réseau social en ligne qui permet aux utilisateurs de partager de courtes messages appelés "tweets" avec leur public.', 3, 0, 1, 7),
(16, 'Mars Colonization', '2022-06-01', '2028-12-12', 'mars.jpg', 'Le projet Mars Colonization vise à coloniser la planète Mars avec des humains pour en faire une nouvelle colonie viable.', 1, 0, 2, 3),
(17, 'Hyperloop', '2024-08-12', '2030-12-12', 'hyperloop.jpg', 'Hyperloop est un système de transport à grande vitesse qui utilise des capsules de transport en position déprimée pour permettre des vitesses élevées tout en réduisant les coûts.', 2, 0, 2, 2);

INSERT INTO project_skill (project_id, skill_id)
VALUES
(1, 1),
(2, 2),
(3, 3),
(4, 1),
(5, 4),
(6, 5),
(7, 2),
(8, 5),
(9, 6),
(10, 3),
(11, 4),
(12, 6),
(13, 1),
(14, 4),
(15, 7),
(16, 2),
(17, 5),
(17, 7);

INSERT INTO user_skill (user_id, skill_id) VALUES
(1, 1),
(1, 2),
(1, 3),
(1, 4),
(2, 2),
(2, 4),
(2, 7),
(2, 12),
(2, 20),
(3, 1),
(3, 2),
(3, 4),
(3, 6),
(3, 7),
(3, 19);

INSERT INTO candidacy (user_id, project_id, apply_date, user_status, user_motivation)
VALUES
(1, 1, '2022-01-01', 2, 'Intéressé par la création de réseaux sociaux'),
(1, 2, '2022-02-01', 3, 'Intéressé par la réalité virtuelle'),
(2, 3, '2022-03-01', 2, 'Expérience en développement d IA'),
(3, 4, '2022-04-01', 1, 'Passionné par l espace'),
(4, 5, '2022-05-01', 3, 'Intéressé par les voitures électriques'),
(3, 6, '2022-06-01', 1, 'Expérience en connectivité cerveau-machine'),
(2, 7, '2022-07-01', 3, 'Intéressé par l histoire de l ordinateur personnel'),
(1, 8, '2022-08-01', 2, 'Expérience en développement de produits Apple'),
(3, 9, '2022-09-01', 1, 'Passionné par les smartphones'),
(4, 10, '2022-10-01', 2, 'Intéressé par les logiciels pour ordinateurs'),
(1, 11, '2022-11-01', 3, 'Expérience en développement de systèmes d exploitation'),
(2, 12, '2022-12-01', 1, 'Passionné par les jeux vidéo'),
(4, 13, '2023-01-01', 2, 'Intéressé par les moteurs de recherche'),
(1, 14, '2023-01-02', 1, 'Expérience en développement d IA'),
(3, 15, '2023-01-03', 3, 'Intéressé par les réseaux sociaux'),
(2, 16, '2023-01-04', 2, 'Passionné par l exploration spatiale'),
(1, 17, '2023-01-05', 1, 'Intéressé par les transports à grande vitesse');