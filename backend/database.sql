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
  user_image blob,
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
  FOREIGN KEY (region_id) REFERENCES region (id)
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
(8, 'Franche-Comt??'),
(9, 'Alsace'),
(10, 'Lorraine'),
(11, 'Languedoc-Roussillon'),
(12, 'Provence-Alpes-C??te d Azur'),
(13, 'Rh??ne-Alpes'),
(14, 'Aquitaine'),
(15, 'Midi-Pyr??n??es'),
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
(1, 'D??veloppeur web'),
(2, 'Designer UX/UI'),
(3, 'Int??grateur web'),
(4, 'D??veloppeur Front-End'),
(5, 'D??veloppeur Back-End'),
(6, 'Chef de projet web'),
(7, 'Analyste en s??curit?? web'),
(8, 'D??veloppeur Full Stack'),
(9, 'Expert SEO'),
(10, 'D??veloppeur mobile'),
(11, 'Scrum Master'),
(12, 'Testeur web'),
(13, 'DevOps Engineer'),
(14, 'Data Analyst'),
(15, 'Expert en e-commerce'),
(16, 'Scrum Master'),
(17, 'Product Owner'),
(18, 'Coach Agile'),
(19, 'Facilitateur Agile'),
(20, 'D??veloppeur Agile'),
(21, 'Testeur Agile'),
(22, 'Analyste Agile'),
(23, 'Designer Agile');

INSERT INTO project (id, project_name, project_start_date, project_end_date, project_image, project_description, project_state, project_remote, region_id)
VALUES 
(1, 'Facebook', '2004-02-04', '2021-01-01', 'facebook.jpg', 'Projet de cr??ation d''un r??seau social', 1, 0, 1),
(2, 'Virtual Reality', '2015-06-06', '2022-12-12', 'virtual-reality.jpg', 'Projet de d??veloppement de la r??alit?? virtuelle', 1, 1, 1),
(3, 'OpenAI', '2015-06-06', '2022-12-12', 'openai.jpg', 'Projet de d??veloppement d''IA', 1, 1, 1),
(4, 'SpaceX', '2002-02-02', '2021-01-01', 'spacex.jpg', 'Projet de transport en orbite', 1, 0, 2),
(5, 'Tesla', '2003-03-03', '2021-01-01', 'tesla.jpg', 'Projet de voitures ??lectriques', 1, 0, 2),
(6, 'Neuralink', '2016-06-06', '2022-12-12', 'neuralink.jpg', 'Projet de d??veloppement de la connectivit?? cerveau-machine', 1, 1, 2),
(7, 'Apple', '1976-04-01', '2011-08-24', 'apple.jpg', 'Projet de d??veloppement de l''ordinateur personnel', 1, 0, 3),
(8, 'iPod', '2001-10-23', '2014-09-07', 'ipod.jpg', 'Projet de d??veloppement de l''iPod', 1, 0, 3),
(9, 'iPhone', '2007-06-29', '2021-01-01', 'iphone.jpg', 'Projet de d??veloppement de l''iPhone', 1, 0, 3),
(10, 'Microsoft', '1975-04-04', '2020-12-31', 'microsoft.jpg', 'Projet de d??veloppement de logiciels pour l''ordinateur personnel', 1, 0, 4),
(11, 'Windows', '1985-11-20', '2021-01-01', 'windows.jpg', 'Projet de d??veloppement de l''OS Windows', 1, 0, 4),
(12, 'XBox', '2001-11-15', '2021-01-01', 'xbox.jpg', 'Projet de d??veloppement de la console Xbox', 1, 0, 4),
(13, 'Google', '1998-09-04', '2021-01-01', 'google.jpg', 'Projet de cr??ation d''un moteur de recherche en ligne', 1, 0, 5),
(14, 'Google AI', '2015-06-06', '2022-12-12', 'google-ai.jpg', 'Projet de d??veloppement de l''IA', 1, 1, 5),
(15, 'Twitter', '2006-03-21', '2022-12-12', 'twitter.jpg', 'Twitter est un r??seau social en ligne qui permet aux utilisateurs de partager de courtes messages appel??s "tweets" avec leur public.', 1, 0, 1),
(16, 'Mars Colonization', '2022-06-01', '2022-12-12', 'mars.jpg', 'Le projet Mars Colonization vise ?? coloniser la plan??te Mars avec des humains pour en faire une nouvelle colonie viable.', 1, 0, 2),
(17, 'Hyperloop', '2013-08-12', '2022-12-12', 'hyperloop.jpg', 'Hyperloop est un syst??me de transport ?? grande vitesse qui utilise des capsules de transport en position d??prim??e pour permettre des vitesses ??lev??es tout en r??duisant les co??ts.', 1, 0, 2);

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

INSERT INTO user_role (role_name) VALUES
('Administrator'),
('Moderator'),
('Member'),
('Guest');

INSERT INTO user (id, cp, firstname, lastname, email, biography, about, hashedPassword, github_page, experience, user_role_id, job_id, region_id) VALUES 
('1','9400000A', 'Mark', 'Zuckerberg', 'mark.zuckerberg@facebook.com', 'Co-fondateur de Facebook', ' Bonjour, je suis Mark Zuckerberg, fondateur de Facebook. J ai grandi en banlieue de New York et j ai d??couvert ma passion pour la technologie et la connectivit?? sociale pendant mes ??tudes ?? Harvard. Apr??s avoir lanc?? Facebook en 2004, j ai travaill?? sans rel??che pour construire la plus grande plateforme de m??dias sociaux au monde.
Aujourd hui, je continue de diriger Facebook en utilisant la technologie pour connecter des personnes et favoriser la communication et la collaboration ?? l ??chelle mondiale. Je suis ??galement impliqu?? dans de nombreux projets philanthropiques, notamment la fondation Chan Zuckerberg Initiative, qui vise ?? aider ?? r??soudre les plus grands d??fis mondiaux ?? travers la science et la technologie.
', '$argon2id$v=19$m=65536,t=5,p=1$NJJuWXB2avclJ+7N+ccowQ$nDIEriUSE99xq5e1sXJ3OoBbbsJViyi19bccI/W69QY', 'https://github.com/markzuckerberg', 10, 1, 1, 1), 
('2','9402200B', 'Elon', 'Musk', 'elon.musk@spacex.com', 'PDG de SpaceX et Tesla', ' Bonjour, je suis Elon Musk, entrepreneur et ing??nieur technologique. J ai fond?? plusieurs entreprises de pointe, notamment Tesla, SpaceX et The Boring Company, avec pour objectif de rendre la vie meilleure pour tous les ??tres humains.
Mon parcours a commenc?? par la fondation de Zip2, une entreprise de publication en ligne, vendue plus tard ?? Compaq pour 307 millions de dollars. Depuis, j ai continu?? de d??velopper des entreprises qui utilisent la technologie pour r??soudre les d??fis les plus importants de notre temps, notamment la transition vers des sources d ??nergie propres et la colonisation de Mars.
Je suis convaincu que nous avons la capacit?? de faire une r??elle diff??rence dans le monde et je travaille sans rel??che pour atteindre cet objectif. Je suis enthousiaste ?? l id??e de voir ce que nous pourrons accomplir ensemble dans les ann??es ?? venir.
.', '$argon2id$v=19$m=65536,t=5,p=1$fyx9xPZ2shUbiWj47fxoHg$2/FWCO4U8da5+TvcroQ8h8LhjpHQ6EjIitMUUGgpavw', 'https://github.com/elonmusk', 20, 2, 2, 2),
 ('3','1000100C', 'Steve', 'Jobs', 'steve.jobs@apple.com', 'Co-fondateur d Apple', 'Je suis Steve Jobs, co-fondateur et ancien PDG d Apple Inc. J ai ??galement fond?? NeXT et Pixar. Mon parcours a ??t?? marqu?? par une passion pour la simplicit?? et la cr??ativit??, ainsi que par un amour pour les produits ??tonnants qui touchent les gens de mani??re profonde. Je suis persuad?? que la technologie peut changer le monde pour le mieux et je me suis consacr?? ?? ce but tout au long de ma carri??re. Mon engagement en faveur de la simplicit??, de l excellence design et de la pertinence a aid?? ?? fa??onner l industrie de la technologie telle que nous la connaissons aujourd hui. ', '$argon2id$v=19$m=65536,t=5,p=1$daK6iuI3+n/IpmIA6PaiRA$bZTkHFu4o+/ZXxdRDPJRlNtYJcXEFZt9khjsYKj//KI', 'https://github.com/stevejobs', 15, 2, 3, 3), 
('4','1000200D', 'Bill', 'Gates', 'bill.gates@microsoft.com', 'Co-fondateur de Microsoft', 'Je suis Bill Gates, co-fondateur de Microsoft et fondateur de la fondation Bill et Melinda Gates. J ai pass?? de nombreuses ann??es ?? d??velopper et ?? commercialiser des logiciels pour les ordinateurs personnels, ce qui a contribu?? ?? changer le monde en fournissant une technologie accessible ?? tous. Aujourd hui, je me concentre sur l utilisation de la philanthropie pour faire une diff??rence dans le monde en mati??re de sant??, d ??ducation et de d??veloppement ??conomique.', '$argon2id$v=19$m=65536,t=5,p=1$YtmAuT6EiCjEUzjdQRFdCw$VGJGbRJR7OYIUkd8bp4EH7Kb5nWjwY32fKFT5JB/DEg', 'https://github.com/billgates', 25, 2, 4, 4),
('5','1000300A', 'Larry', 'Page', 'larry.page@google.com', 'Co-fondateur de Google', 'Je suis Larry Page, co-fondateur de Google. Mon objectif est de rendre l information accessible ?? tous et de cr??er un monde plus connect?? gr??ce ?? la technologie. En tant que PDG de Alphabet Inc., la soci??t?? m??re de Google, je continue de diriger l entreprise en explorant de nouvelles opportunit??s pour am??liorer la vie des gens ?? travers la technologie. ', '$argon2id$v=19$m=65536,t=5,p=1$AkAkScpU6cJSUuT/vq0RQA$naKpOcbyYPjSeAxf6xQIWI/6XymcKNpWKGJGroSScGA', 'https://github.com/larrypage', 20, 2, 5, 5),
('6','3333330D', 'Jack', 'Dorsey', 'jack.dorsey@twitter.com', 'Co-founder of Twitter', ' Je suis Jack Dorsey, co-fondateur de Twitter et fondateur de Square. Je suis passionn?? par la cr??ation de produits simples et puissants qui connectent les gens et les aident ?? communiquer de mani??re plus efficace. Twitter a ??t?? fond?? sur cette id??e et depuis, il a ??volu?? pour devenir un moyen de communication incroyablement puissant pour les individus, les organisations et les gouvernements ?? travers le monde. Avec Square, j ai voulu fournir aux petites entreprises une technologie simple et accessible pour g??rer leurs finances et atteindre leur plein potentiel. ', '$argon2id$v=19$m=65536,t=5,p=1$8N3amcYoGFZnDDCEjZz56w$ynEmaJob+XB7Em+sMnCkPwzC6jZVub89eB57EbkMVuY', 'https://github.com/jackdorsey', 15, 1, 1, 1),
('7','4443567M', 'Jeff', 'Bezos', 'jeff.bezos@amazon.com', 'Co-fondateur de Amazon','Bonjour, je suis Jeff Bezos, fondateur et CEO d Amazon.com. J ai fond?? Amazon en 1994 en tant qu entreprise de commerce ??lectronique en ligne et nous avons rapidement grandi pour devenir l un des plus grands d??taillants en ligne du monde. Je suis ??galement investisseur dans d autres entreprises telles que Blue Origin, une entreprise de tourisme spatial, et The Washington Post. Mon objectif est de toujours am??liorer la vie des gens en utilisant la technologie pour r??soudre les d??fis les plus complexes.', '$argon2id$v=19$m=65536,t=5,p=1$ncifmFKmxjAQqhm8kddQ/A$ZHkEH7vg98rRlrr1++v2fDdwzquEQs7NqVZUknpO6no','https://github.com/jeffbezos', 15, 2, 4, 4),
('8','4568964J','Tim', 'Cook','tim.cook@apple.com', 'CEO de Apple', 'Bonjour, je suis Tim Cook, CEO d Apple. J ai rejoint Apple en 1998 et j ai ??t?? nomm?? CEO en 2011, succ??dant ?? Steve Jobs. Sous ma direction, Apple a continu?? ?? se concentrer sur la conception d un mat??riel et d un logiciel de qualit?? sup??rieure pour ses clients. J ai ??galement mis en ??uvre des initiatives en mati??re de responsabilit?? sociale, telles que l utilisation d ??nergies renouvelables pour alimenter nos centres de donn??es. Je suis passionn?? par le pouvoir de la technologie pour am??liorer la vie des gens.', '$argon2id$v=19$m=65536,t=5,p=1$9zYHLw+OTfiGldaYFoKN/w$tE8gyB09bEHgw/alOnRJLIaXhzKSNXRUP9v19R2yoxY','https://github.com/timcook', 11, 4, 1, 1);



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
(1, 1, '2022-01-01', 2, 'Int??ress?? par la cr??ation de r??seaux sociaux'),
(1, 2, '2022-02-01', 3, 'Int??ress?? par la r??alit?? virtuelle'),
(2, 3, '2022-03-01', 2, 'Exp??rience en d??veloppement d IA'),
(3, 4, '2022-04-01', 1, 'Passionn?? par l espace'),
(4, 5, '2022-05-01', 3, 'Int??ress?? par les voitures ??lectriques'),
(3, 6, '2022-06-01', 1, 'Exp??rience en connectivit?? cerveau-machine'),
(2, 7, '2022-07-01', 3, 'Int??ress?? par l histoire de l ordinateur personnel'),
(1, 8, '2022-08-01', 2, 'Exp??rience en d??veloppement de produits Apple'),
(3, 9, '2022-09-01', 1, 'Passionn?? par les smartphones'),
(4, 10, '2022-10-01', 2, 'Int??ress?? par les logiciels pour ordinateurs'),
(1, 11, '2022-11-01', 3, 'Exp??rience en d??veloppement de syst??mes d exploitation'),
(2, 12, '2022-12-01', 1, 'Passionn?? par les jeux vid??o'),
(4, 13, '2023-01-01', 2, 'Int??ress?? par les moteurs de recherche'),
(1, 14, '2023-01-02', 1, 'Exp??rience en d??veloppement d IA'),
(3, 15, '2023-01-03', 3, 'Int??ress?? par les r??seaux sociaux'),
(2, 16, '2023-01-04', 2, 'Passionn?? par l exploration spatiale'),
(1, 17, '2023-01-05', 1, 'Int??ress?? par les transports ?? grande vitesse');

