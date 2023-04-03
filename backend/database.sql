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
  project_about varchar(200),
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
', 'mark-zuckerberg.jpg', '$argon2id$v=19$m=65536,t=5,p=1$NJJuWXB2avclJ+7N+ccowQ$nDIEriUSE99xq5e1sXJ3OoBbbsJViyi19bccI/W69QY', 'https://github.com/markzuckerberg', 10, 3, 1, 1), 
('2','9402200B', 'Elon', 'Musk', 'elon.musk@spacex.com', 'PDG de SpaceX et Tesla', ' Bonjour, je suis Elon Musk, entrepreneur et ingénieur technologique. J ai fondé plusieurs entreprises de pointe, notamment Tesla, SpaceX et The Boring Company, avec pour objectif de rendre la vie meilleure pour tous les êtres humains.
Mon parcours a commencé par la fondation de Zip2, une entreprise de publication en ligne, vendue plus tard à Compaq pour 307 millions de dollars. Depuis, j ai continué de développer des entreprises qui utilisent la technologie pour résoudre les défis les plus importants de notre temps, notamment la transition vers des sources d énergie propres et la colonisation de Mars.
Je suis convaincu que nous avons la capacité de faire une réelle différence dans le monde et je travaille sans relâche pour atteindre cet objectif. Je suis enthousiaste à l idée de voir ce que nous pourrons accomplir ensemble dans les années à venir.
.', 'elon-musk.jpg', '$argon2id$v=19$m=65536,t=5,p=1$fyx9xPZ2shUbiWj47fxoHg$2/FWCO4U8da5+TvcroQ8h8LhjpHQ6EjIitMUUGgpavw', 'https://github.com/elonmusk', 20, 3, 2, 2),
 ('3','1000100C', 'Steve', 'Jobs', 'steve.jobs@apple.com', 'Co-fondateur d Apple', 'Je suis Steve Jobs, co-fondateur et ancien PDG d Apple Inc. J ai également fondé NeXT et Pixar. Mon parcours a été marqué par une passion pour la simplicité et la créativité, ainsi que par un amour pour les produits étonnants qui touchent les gens de manière profonde. 
 Je suis persuadé que la technologie peut changer le monde pour le mieux et je me suis consacré à ce but tout au long de ma carrière. Mon engagement en faveur de la simplicité, de l excellence design et de la pertinence a aidé à façonner l industrie de la technologie telle que nous la connaissons aujourd hui. ', 'steve-jobs.jpg', '$argon2id$v=19$m=65536,t=5,p=1$daK6iuI3+n/IpmIA6PaiRA$bZTkHFu4o+/ZXxdRDPJRlNtYJcXEFZt9khjsYKj//KI', 'https://github.com/stevejobs', 15, 3, 3, 3), 
('4','1000200D', 'Bill', 'Gates', 'bill.gates@microsoft.com', 'Co-fondateur de Microsoft', 'Je suis Bill Gates, co-fondateur de Microsoft et fondateur de la fondation Bill et Melinda Gates. J ai passé de nombreuses années à développer et à commercialiser des logiciels pour les ordinateurs personnels, ce qui a contribué à changer le monde en fournissant une technologie accessible à tous. Aujourd hui, je me concentre sur l utilisation de la philanthropie pour faire une différence dans le monde en matière de santé, 
d éducation et de développement économique.', 'bill-gates.jpg', '$argon2id$v=19$m=65536,t=5,p=1$YtmAuT6EiCjEUzjdQRFdCw$VGJGbRJR7OYIUkd8bp4EH7Kb5nWjwY32fKFT5JB/DEg', 'https://github.com/billgates', 25, 3, 4, 4),
('5','1000300A', 'Larry', 'Page', 'larry.page@google.com', 'Co-fondateur de Google', 'Je suis Larry Page, co-fondateur de Google. Mon objectif est de rendre l information accessible à tous et de créer un monde plus connecté grâce à la technologie. En tant que PDG de Alphabet Inc., la société mère de Google, je continue de diriger l entreprise en explorant de nouvelles opportunités pour améliorer la vie des gens à travers la technologie. ', 'larry-page.jpg', '$argon2id$v=19$m=65536,t=5,p=1$AkAkScpU6cJSUuT/vq0RQA$naKpOcbyYPjSeAxf6xQIWI/6XymcKNpWKGJGroSScGA', 'https://github.com/larrypage', 20, 3, 5, 5),
('6','3333330D', 'Jack', 'Dorsey', 'jack.dorsey@twitter.com', 'Co-founder of Twitter', ' Je suis Jack Dorsey, co-fondateur de Twitter et fondateur de Square. Je suis passionné par la création de produits simples et puissants qui connectent les gens et les aident à communiquer de manière plus efficace. Twitter a été fondé sur cette idée et depuis, il a évolué pour devenir un moyen de communication incroyablement puissant pour les individus, les organisations et les gouvernements à travers le monde. 
Avec Square, j ai voulu fournir aux petites entreprises une technologie simple et accessible pour gérer leurs finances et atteindre leur plein potentiel. ', 'jack-dorsey.jpg', '$argon2id$v=19$m=65536,t=5,p=1$8N3amcYoGFZnDDCEjZz56w$ynEmaJob+XB7Em+sMnCkPwzC6jZVub89eB57EbkMVuY', 'https://github.com/jackdorsey', 15, 3, 6, 6),
('7','4443567M', 'Jeff', 'Bezos', 'jeff.bezos@amazon.com', 'Co-fondateur de Amazon','Bonjour, je suis Jeff Bezos, fondateur et CEO d Amazon.com. J ai fondé Amazon en 1994 en tant qu entreprise de commerce électronique en ligne et nous avons rapidement grandi pour devenir l un des plus grands détaillants en ligne du monde. 
Je suis également investisseur dans d autres entreprises telles que Blue Origin, une entreprise de tourisme spatial, et The Washington Post. Mon objectif est de toujours améliorer la vie des gens en utilisant la technologie pour résoudre les défis les plus complexes.', 'jeff-bezos.jpg', '$argon2id$v=19$m=65536,t=5,p=1$ncifmFKmxjAQqhm8kddQ/A$ZHkEH7vg98rRlrr1++v2fDdwzquEQs7NqVZUknpO6no','https://github.com/jeffbezos', 15, 3, 7, 7),
('8','4568964J','Tim', 'Cook','tim.cook@apple.com', 'CEO de Apple', 'Bonjour, je suis Tim Cook, CEO d Apple. J ai rejoint Apple en 1998 et j ai été nommé CEO en 2011, succédant à Steve Jobs. Sous ma direction, Apple a continué à se concentrer sur la conception d un matériel et d un logiciel de qualité supérieure pour ses clients. J ai également mis en œuvre des initiatives en matière de responsabilité sociale, telles que l utilisation d énergies renouvelables pour alimenter nos centres de données. 
Je suis passionné par le pouvoir de la technologie pour améliorer la vie des gens.', 'tim-cook.jpg', '$argon2id$v=19$m=65536,t=5,p=1$9zYHLw+OTfiGldaYFoKN/w$tE8gyB09bEHgw/alOnRJLIaXhzKSNXRUP9v19R2yoxY','https://github.com/timcook', 11, 3, 8, 8),
('9','7500111P', 'Marie', 'Ekeland', 'marie.ekeland@gmail.com', 'Investisseur et co-fondatrice de Daphni', 'Je suis une investisseuse française dans les start-ups, co-fondatrice de Daphni, un fonds d''investissement en capital risque qui investit dans des startups européennes. 
Je suis engagée en faveur de la promotion de l''entrepreneuriat et du numérique en France, notamment en tant que présidente de France Digitale, un collectif qui rassemble des startups et des investisseurs en France', 'marie-ekeland.jpg', 'hashedpassword123', 'https://github.com/marieekeland', 10, 3, 9, 9),
('10', '7501312A', 'Roxanne', 'Varza', 'roxanne.varza@stationf.co', 'Directrice de Station F', 'Passionnée d''entrepreneuriat et de tech, j''ai travaillé chez Microsoft Ventures, j''ai fondé une start-up et j''ai conseillé des start-ups et des gouvernements. 
j'' ai également été nommée l''une des femmes les plus puissantes de la tech en Europe par Forbes en 2019.', 'roxanne-varza.png', 'password10', 'https://github.com/roxannevarza', 8, 1, 10, 10),
('11', '8075009B', 'Céline', 'Lazorthes', 'celine.lazorthes@leetchi.com', 'Fondatrice de Leetchi', 'J''ai fondé Leetchi en 2009, qui a été rachetée par le Crédit Mutuel Arkéa en 2015. En 2020, j''ai lancé une nouvelle start-up, Madine France.', 'celine-lazorthes.jpg', 'password11', 'https://github.com/celinelazorthes', 12, 3, 11, 11),
('12', '7975011C', 'Joséphine', 'Goube', 'josephine.goube@techfugees.com', 'Fondatrice de Techfugees', 'Je suis passionnée par la tech et l''humanitaire et j''ai créé Techfugees pour réunir ces deux univers.', 'josephine-goube.jpg', 'password12', '', 10, 3, 12, 12),
('13', '7875003D', 'Délphine', 'Plisson', 'delphine@lamaisonplisson.com', 'Fondatrice de la Maison Plisson', 'J''ai créé La Maison Plisson pour promouvoir les produits de qualité et soutenir les producteurs locaux.', 'delphine-plisson.jpg', 'password13', '', 8, 3, 13, 13),
('14', '8175010E', 'Emilie', 'Sallé', 'emilie@valomat.co', 'Co-fondatrice de Valomat', 'Je suis passionnée par l''entrepreneuriat et j''ai créé Valomat pour aider les entreprises à améliorer leur communication.', 'emilie-sallé.jpg', 'password14', 'https://github.com/emilie', 5, 3, 14, 14),
('15', '8275009F', 'Hyojeong', 'Kim', 'hyojeong@nomadher.com', 'Fondatrice de NomadHer', 'Je suis passionnée par le voyage et j''ai créé NomadHer pour encourager les femmes à explorer le monde.', 'kyojeong-kim.png', 'password15', 'https://github.com/hyojeong', 7, 3, 15, 15),
('16', '7275000G', 'Hafoussoi', 'Vandewalle', 'hafoussoi@zawema.com', 'Fondatrice de Zawema', 'Je suis passionnée par la beauté et l''artisanat. J''ai fondé Zawema pour offrir des produits cosmétiques artisanaux de qualité supérieure aux femmes du monde entier.', 'hafoussoi-vandewalle.jpg', 'password16', 'https://github.com/hafoussoi', 5, 3, 16, 16);


INSERT INTO project (id, project_name, project_start_date, project_end_date, project_image, project_about, project_description, project_state, project_remote, region_id, creator_id)
VALUES 
(1, 'Facebook', '2018-02-04', '2024-01-01', 'facebook.png', 'Notre projet est de créer une plateforme de réseau social en ligne qui permet aux utilisateurs de se connecter, partager du contenu et interagir avec d''autres personnes', 'Bonjour à tous,\n\nJe suis ravi de vous présenter notre projet Facebook en développement. Notre objectif est de créer une plateforme de médias sociaux qui permettra aux utilisateurs de se connecter, de partager des informations, de communiquer et de se divertir.\n\nNotre plateforme sera conçue pour être facile à utiliser et à naviguer. Nous mettrons l''accent sur une interface utilisateur intuitive et une expérience utilisateur agréable pour attirer et fidéliser les utilisateurs.\n\nNous avons également l''intention d''intégrer de nombreuses fonctionnalités utiles et intéressantes. Par exemple, notre plateforme permettra aux utilisateurs de créer des profils complets avec des informations de base, des images et des intérêts, afin que les autres utilisateurs puissent mieux les connaître.\n\nNous allons également permettre aux utilisateurs de publier des messages, des photos, des vidéos et d''autres types de contenu pour partager leurs idées et leurs expériences avec d''autres personnes. Les utilisateurs pourront interagir avec ces publications en les aimant, en les commentant et en les partageant.\n\nNotre plateforme inclura également des fonctionnalités de messagerie instantanée qui permettront aux utilisateurs de communiquer en temps réel avec leurs amis, leur famille et d''autres contacts. Nous prévoyons également de proposer des groupes de discussion pour permettre aux utilisateurs de se connecter avec d''autres personnes partageant les mêmes centres d''intérêt.\n\nNous sommes convaincus que notre plateforme Facebook sera un grand succès et nous avons hâte de la voir en action. Nous sommes actuellement à la recherche de développeurs talentueux pour rejoindre notre équipe et nous aider à créer la meilleure expérience utilisateur possible.\n\nSi vous êtes intéressé par ce projet et que vous êtes un développeur passionné avec de l''expérience en développement web, nous vous encourageons à postuler pour rejoindre notre équipe.\n\nNous sommes impatients de travailler avec vous pour créer une plateforme de médias sociaux incroyable qui connectera les gens du monde entier.', 1, 0, 1, 1),
(2, 'Virtual Reality', '2024-06-06', '2027-12-12', 'virtual-reality.png', 'La réalité virtuelle (VR) est une technologie qui permet à l''utilisateur de vivre une expérience immersive dans un monde artificiel généré par ordinateur.', 'Projet de développement de la réalité virtuelle', 1, 1, 1, 9),
(3, 'OpenAI', '2021-06-06', '2025-12-12', 'openai.png', 'Le projet OpenAI consiste à développer des systèmes d''IA avancés de manière éthique et transparente afin de résoudre des problèmes complexes et améliorer la vie de l''humanité.', 'Projet de développement d''IA', 1, 1, 1, 2),
(4, 'SpaceX', '2024-02-02', '2028-01-01', 'space-x.jpg', 'Le projet SpaceX consiste à développer des fusées et des véhicules spatiaux réutilisables pour rendre l''exploration spatiale plus abordable et accessible à tous.', 'Projet de transport en orbite', 0, 0, 2, 2),
(5, 'Tesla', '2003-03-03', '2021-01-01', 'tesla.png', 'Tesla est une entreprise américaine spécialisée dans la conception et la production de voitures électriques, de panneaux solaires et de solutions de stockage d''énergie.', 'Projet de voitures électriques', 0, 0, 2, 2),
(6, 'Neuralink', '2016-06-06', '2022-12-12', 'neuralink.png', 'Neuralink est une entreprise de neurotechnologie fondée par Elon Musk qui développe des interfaces cerveau-machine pour améliorer les capacités humaines.', 'Projet de développement de la connectivité cerveau-machine', 1, 1, 2, 2),
(7, 'Apple', '1976-04-01', '2011-08-24', 'apple.jpg', 'Apple est une entreprise multinationale américaine qui conçoit, développe et commercialise des produits électroniques, des logiciels et des services en ligne.', 'Projet de développement de l''ordinateur personnel', 1, 0, 3, 8),
(8, 'iPod', '2001-10-23', '2014-09-07', 'ipod.png', 'Créer un lecteur de musique portable révolutionnaire avec un design élégant et facile à utiliser, permettant de stocker et de lire des milliers de chansons.', 'Projet de développement de l''iPod', 1, 0, 3, 3),
(9, 'iPhone', '2007-06-29', '2021-01-01', 'iphone.jpg', 'Le projet iPhone consiste à concevoir un smartphone innovant avec un écran tactile, une caméra, une connectivité sans fil et une interface conviviale et une expérience utilisateur exceptionnelle.', 'Projet de développement de l''iPhone', 1, 0, 3, 3),
(10, 'Microsoft', '1975-04-04', '2020-12-31', 'microsoft.jpg', 'Créer une entreprise de technologie à succès avec des logiciels, des appareils et des services pour améliorer la productivité et faciliter la vie des gens à travers le monde', 'Projet de développement de logiciels pour l''ordinateur personnel', 1, 0, 4, 4),
(11, 'Windows', '1985-11-20', '2021-01-01', 'windows.jpg', 'Le projet Microsoft Windows consiste à développer un système d''exploitation convivial et performant pour les ordinateurs personnels et les entreprises.', 'Projet de développement de l''OS Windows', 0, 0, 4, 4),
(12, 'XBox', '2001-11-15', '2021-01-01', 'xbox.jpg', 'Le projet Xbox consiste à concevoir une console de jeu de haute qualité avec des graphismes impressionnants et une expérience de jeu fluide pour les joueurs du monde entier', 'Projet de développement de la console Xbox', 1, 0, 4, 4),
(13, 'Google', '1998-09-04', '2021-01-01', 'google.jpg', 'Le projet Google consiste à créer un moteur de recherche efficace, capable d''indexer et de classer des millions de pages web pour faciliter l''accès à l''information en ligne.', 'Projet de création d''un moteur de recherche en ligne', 0, 0, 5, 5),
(14, 'Google AI', '2022-06-06', '2025-12-12', 'google-ai.jpg', 'Le projet Google AI consiste à développer des systèmes d''intelligence artificielle avancés pour améliorer les produits Google et résoudre des problèmes du monde réel.', 'Projet de développement de l''IA', 1, 1, 5, 15),
(15, 'Twitter', '2006-03-21', '2022-12-12', 'twitter.jpg', 'Le projet Twitter consiste à créer une plateforme de réseau social qui permet aux utilisateurs de partager des messages courts et de suivre les dernières actualités en temps réel', 'Twitter est un réseau social en ligne qui permet aux utilisateurs de partager de courtes messages appelés "tweets" avec leur public.', 1, 0, 1, 6),
(16, 'Mars Colonization', '2022-06-01', '2028-12-12', 'mars-colonization.png', 'Le projet de colonisation de Mars vise à établir une communauté humaine permanente sur la planète rouge en utilisant des technologies avancées pour survivre et s''adapter aux conditions extrêmes', 'Le projet Mars Colonization vise à coloniser la planète Mars avec des humains pour en faire une nouvelle colonie viable.', 1, 0, 2, 2),
(17, 'Hyperloop', '2024-08-12', '2030-12-12', 'hyperloop.jpg', 'Hyperloop est un projet de transport à grande vitesse qui utilise des capsules pour réduire les coûts et les temps de trajet. L''objectif est de créer un système de transport durable.', 'Hyperloop est un système de transport à grande vitesse qui utilise des capsules de transport en position déprimée pour permettre des vitesses élevées tout en réduisant les coûts.', 1, 0, 2, 2),
(18, 'Amazon Web Service', '2006-03-14', '2023-12-31','amazon-web-service.png', 'Amazon Web Services (AWS) sera une plateforme de cloud computing qui fournira une large gamme de services pour aider les entreprises à se développer.', 'Le projet Amazon Web Service (AWS) a pour but de créer une plateforme de services cloud conçue pour fournir une infrastructure de cloud computing fiable et évolutive aux entreprises et aux organisations de toutes tailles. En utilisant AWS, les utilisateurs pourront accéder à une gamme complète de services de cloud computing, tels que le stockage, le traitement de données, les bases de données, l''analyse, l''apprentissage automatique, l''Internet des objets et bien plus encore, avec une grande facilité et à moindre coût. \n\n Le projet AWS offrira également des outils de gestion et de surveillance pour aider les utilisateurs à suivre les performances de leurs applications et à optimiser leur utilisation des ressources de cloud. \n\n Avec AWS, les entreprises pourront bénéficier de la flexibilité, de l''évolutivité et de la fiabilité de la plateforme cloud la plus utilisée au monde, tout en réduisant leurs coûts informatiques et en améliorant leur efficacité opérationnelle.', 1, 1, 6, 7),
(19, 'Google Maps', '2005-02-08', '2023-06-30', 'google-maps.jpg', 'Créer un service de cartographie en ligne qui fournit des images satellites, des vues panoramiques à 360 degrés et des informations sur les entreprises locales.', 'Google Maps est un service de cartographie en ligne proposé par Google. \n\n Il permet aux utilisateurs de rechercher des lieux, de calculer des itinéraires, de trouver des informations sur les transports en commun et de visualiser des cartes en 2D et en 3D. \n\n Google Maps utilise des images satellite, des données géographiques et des informations de navigation en temps réel pour fournir des informations précises et utiles. \n\n Il est disponible sur le Web et sur les appareils mobiles, ce qui en fait un outil incontournable pour les voyageurs, les automobilistes et les piétons du monde entier. De plus, les développeurs peuvent utiliser les API de Google Maps pour intégrer des cartes et des fonctionnalités de localisation dans leurs propres applications web et mobiles.\n\nNous sommes convaincus que notre projet Google Maps est un outil puissant pour aider les gens à naviguer dans le monde entier, et nous avons hâte de voir comment les utilisateurs l'' utiliseront pour explorer le monde.', 1, 1, 7, 5);
INSERT INTO project_skill (project_id, skill_id)
VALUES
(1, 1),
(1, 3),
(1, 5),
(2, 2),
(2, 6),
(2, 8),
(3, 3),
(3, 5),
(3, 7),
(4, 9),
(4, 11),
(4, 13),
(5, 4),
(5, 8),
(5, 10),
(6, 5),
(6, 11),
(6, 13),
(7, 2),
(7, 12),
(7, 14),
(8, 15),
(8, 17),
(8, 19),
(9, 6),
(9, 16),
(9, 18),
(10, 3),
(10, 7),
(10, 20),
(11, 4),
(11, 14),
(11, 18),
(12, 6),
(12, 2),
(12, 16),
(13, 1),
(13, 11),
(13, 19),
(14, 4),
(14, 8),
(14, 14),
(15, 7),
(15, 17),
(15, 12),
(16, 2),
(16, 5),
(16, 15),
(17, 3),
(17, 9),
(17, 19),
(17, 7),
(17, 20),
(18, 9),
(18, 11),
(18, 13),
(18, 4),
(19, 1),
(19, 2),
(19, 3);

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
(3, 19),
(4, 5),
(4, 8),
(4, 18),
(4, 15),
(5, 9),
(5, 13),
(5, 16),
(5, 17),
(6, 10),
(6, 14),
(6, 15),
(6, 3),
(7, 9),
(7, 11),
(7, 13),
(7, 15),
(8, 5),
(8, 10),
(8, 16),
(8, 17),
(9, 6),
(9, 8),
(9, 12),
(9, 14),
(10, 3),
(10, 5),
(10, 16),
(10, 17),
(11, 6),
(11, 18),
(11, 19),
(11, 20),
(12, 7),
(12, 9),
(12, 11),
(12, 13),
(13, 8),
(13, 1),
(13, 12),
(13, 14),
(14, 15),
(14, 17),
(14, 19),
(14, 20),
(15, 3),
(15, 5),
(15, 16),
(15, 18);

INSERT INTO candidacy (user_id, project_id, apply_date, user_status, user_motivation)
VALUES
(5, 1, '2022-01-01', 2, 'Intéressé par la création de réseaux sociaux'),
(1, 2, '2022-02-01', 3, 'Intéressé par la réalité virtuelle'),
(4, 3, '2022-03-01', 2, 'Expérience en développement d IA'),
(3, 4, '2022-04-01', 1, 'Passionné par l espace'),
(4, 5, '2022-05-01', 3, 'Intéressé par les voitures électriques'),
(3, 6, '2022-06-01', 1, 'Expérience en connectivité cerveau-machine'),
(7, 7, '2022-07-01', 3, 'Intéressé par l histoire de l ordinateur personnel'),
(1, 8, '2022-08-01', 2, 'Expérience en développement de produits Apple'),
(3, 9, '2022-09-01', 1, 'Passionné par les smartphones'),
(10, 10, '2022-10-01', 2, 'Intéressée par les logiciels pour ordinateurs'),
(1, 11, '2022-11-01', 3, 'Expérience en développement de systèmes d exploitation'),
(11, 12, '2022-12-01', 3, 'Passionnée par les jeux vidéo'),
(4, 13, '2023-01-01', 2, 'Intéressé par les moteurs de recherche'),
(1, 14, '2023-01-02', 2, 'Expérience en développement d IA'),
(3, 15, '2023-01-03', 3, 'Intéressé par les réseaux sociaux'),
(11, 16, '2023-01-04', 2, 'Passionnée par l exploration spatiale'),
(1, 17, '2023-01-05', 3, 'Intéressé par les transports à grande vitesse'),
(7, 1, '2023-03-23', 1, 'Expérience en développement de services web'),
(1, 18, '2023-03-23', 3, 'Expérience en développement d applications web'),
(8, 19, '2023-03-23', 2, 'Passionné par la cartographie'),
(4, 6, '2023-03-23', 2, 'Intéressé par les technologies de connectivité cerveau-machine'),
(6, 18, '2023-03-23', 2, 'Expérience en développement de services web'),
(7, 19, '2023-03-23', 2, 'Passionné par les cartes et la géolocalisation'),
(9, 3, '2023-01-05', 2, 'Je suis passionnée par l''intelligence artificielle et je crois fermement en son potentiel pour améliorer notre monde.'),
(12, 3, '2023-03-23', 2, 'J''aimerais contribuer à cette mission en mettant mes compétences en programmation et en résolution de problèmes à disposition de l''équipe d''OpenAI pour aider à développer des systèmes d''IA innovants.'),
(9, 4, '2023-03-23', 2, 'J''ai toujours été fascinée par l''espace et l''exploration spatiale.'),
(13, 4, '2023-03-23', 2, 'Je suis motivée par la perspective de travailler sur des projets ambitieux qui repoussent les limites de la technologie et de l''ingénierie pour nous permettre de découvrir de nouveaux horizons.'),
(14, 4, '2023-03-23', 2, 'J''aimerais rejoindre l''équipe de SpaceX pour contribuer à réaliser la vision de la colonisation de Mars et de l''expansion de l''humanité dans l''espace.'),
(15, 5, '2023-03-23', 2, 'je suis passionnée par les technologies propres et durables, ainsi que par la mission de l''entreprise de rendre la mobilité électrique accessible à tous.'),
(16, 5, '2023-03-23', 2, 'Je suis motivée par l''opportunité de contribuer à la conception et au développement de véhicules électriques innovants qui réduisent l''impact environnemental des transports.'),
(9, 5, '2023-03-23', 2, 'J''aimerais rejoindre l''équipe de Tesla pour contribuer à l''avancement de la mobilité durable.'),
(7, 6, '2023-03-23', 2, 'Je suis passionnée par la possibilité de fusionner l''intelligence humaine avec l''intelligence artificielle pour améliorer notre vie quotidienne.'),
(10, 6, '2023-03-23', 2, 'Je crois que Neuralink est à la pointe de cette technologie et j''aimerais y contribuer.'),
(6, 7, '2023-03-23', 2, 'Je suis fasciné par la capacité d''Apple à créer des produits innovants qui changent la vie des gens. '),
(10, 7, '2023-03-23', 2, 'Travailler chez Apple serait un rêve devenu réalité pour moi car j''aimerais contribuer à la conception de produits qui ont un impact significatif sur le monde.'),
(11, 8, '2023-03-23', 2, 'J''ai grandi en utilisant un iPod et je suis convaincue que cet appareil a changé la façon dont nous écoutons de la musique.'),
(12, 8, '2023-03-23', 2, 'Je suis passionnée par la conception de produits qui ont un impact significatif sur la vie des gens et je pense que travailler sur l''iPod serait une expérience incroyable.'),
(13, 9, '2023-03-23', 2, 'Je suis convaincue que l''iPhone est l''un des produits les plus influents de notre époque.'),
(14, 9, '2023-03-23', 2, 'Je suis passionnée par la conception de produits qui ont un impact sur la vie des gens et je pense qu''il n''y a pas de meilleure entreprise pour travailler sur cette mission que chez Apple.'),
(11, 10, '2023-03-23', 2, 'Je suis fascinée par la façon dont Microsoft a réussi à révolutionner le monde de la technologie.'),
(15, 10, '2023-03-23', 2, 'J''aimerais travailler pour une entreprise qui valorise l''innovation et la créativité et je pense que Microsoft serait l''endroit idéal pour moi.'),
(5, 11, '2023-03-23', 2, 'Je suis passionné par la technologie et je pense que Windows est l''un des systèmes d''exploitation les plus influents de notre époque.'),
(9, 11, '2023-03-23', 2, 'J''aimerais contribuer à la conception de produits qui ont un impact significatif sur la vie des gens et je pense que travailler sur Windows serait une expérience incroyable.'),
(8, 12, '2023-03-23', 2, 'J''aime les jeux vidéo depuis que je suis enfant et je suis convaincue que la Xbox est l''une des consoles de jeux les plus innovantes sur le marché'),
(10, 12, '2023-03-23', 2, 'Je suis passionnée par la conception de produits qui ont un impact significatif sur la vie des gens et je pense que travailler sur la Xbox serait une expérience incroyable.'),
(11, 13, '2023-03-23', 2, 'Je suis fascinée par la façon dont Google a révolutionné la recherche sur Internet et je pense que c''est l''une des entreprises les plus influentes de notre époque. '),
(13, 13, '2023-03-23', 2, 'J''aimerais travailler pour une entreprise qui valorise l''innovation et la créativité et je pense que Google serait l''endroit idéal pour moi.'),
(5, 14, '2023-03-23', 2, 'Je suis passionné par l''intelligence artificielle et je pense que Google est à la pointe de cette technologie.'),
(12, 14, '2023-03-23', 2, 'J''aimerais contribuer à la conception de produits qui ont un impact significatif sur la vie des gens et je pense que travailler sur Google AI serait une expérience incroyable.'),
(14, 15, '2023-03-23', 2, 'Je suis convaincue que Twitter est l''un des réseaux sociaux les plus influents de notre époque.'),
(15, 15, '2023-03-23', 2, 'Je suis passionnée par la conception de produits qui ont un impact significatif sur la vie des gens et je pense que travailler sur Twitter serait une expérience incroyable.'),
(16, 16, '2023-03-23', 2, 'Je suis fascinée par l''espace et je pense que la colonisation de Mars est l''un des projets les plus ambitieux de notre époque.'),
(8, 1, '2023-03-23', 1, 'Je suis passionné par la possibilité d''avoir un impact significatif sur la vie de milliards de personnes à travers le monde en travaillant sur ce projet'),
(12, 1, '2023-03-23', 1, 'La mission de Facebook de rapprocher le monde est inspirante et alignée avec mes valeurs personnelles.'),
(13, 1, '2023-03-23', 1, 'je suis convaincue que Facebook a un potentiel énorme pour améliorer la vie des gens et résoudre des problèmes mondiaux complexes'),
(14, 1, '2023-03-23', 1, 'Je suis fascinée par la manière dont Facebook utilise les données pour connecter les gens et créer une communauté mondiale.'),
(2, 1, '2023-03-23', 1, 'Je suis convaincu que ma solide expérience me permettra de contribuer de manière significative à la croissance et à l''impact de l''entreprise.');