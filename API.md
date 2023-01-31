# API DevHub Connect

## Description

Bienvenue dans la documentation de notre API RESTful pour notre base de données de projets, utilisateurs et compétences. Cette API vous permet de créer, lire, mettre à jour et supprimer des informations relatives aux utilisateurs, aux projets, aux candidatures, aux compétences et aux emplacements. Elle est construite en utilisant les normes REST et est accessible via des requêtes HTTP standard. Les données sont retournées au format JSON pour une utilisation facile dans n'importe quelle application ou site web. Dans les sections suivantes, nous allons détailler les différentes fonctionnalités et routes de l'API ainsi que les exemples de requêtes et de réponses.

## Endpoints :

**Utilisateurs :**

- Récupérer toutes les utilisateurs : **_GET /users_**
- Récupérer un utilisateur par ID : **_GET /users/:id_**
- Créer un utilisateur : **_POST /users_**
- Mettre à jour un utilisateur : **_PUT /users/:id_**
- Supprimer un utilisateur : **_DELETE /users/:id_**

**Candidatures :**

- Récupérer toutes les candidatures : **_GET /candidacies_**
- Récupérer une candidature par ID : **_GET /candidacies/:id_**
- Créer une candidature : **_POST /candidacies_**
- Mettre à jour une candidature : **_PUT /candidacies/:id_**
- Supprimer une candidature : **_DELETE /candidacies/:id_**

**Projets :**

- Récupérer tous les projets : **_GET /projects_**
- Récupérer un projet par ID : **_GET /projects/:id_**
- Créer un projet : **_POST /projects_**
- Mettre à jour un projet : **_PUT /projects/:id_**
- Supprimer un projet : **_DELETE /projects/:id_**

**Compétences utilisateur :**

- Récupérer toutes les compétences utilisateur : **_GET /user_skills_**
- Récupérer une compétence utilisateur par ID : **_GET /user_skills/:id_**
- Créer une compétence utilisateur : **_POST /user_skills_**
- Mettre à jour une compétence utilisateur : **_PUT /user_skills/:id_**
- Supprimer une compétence utilisateur : **_DELETE /user_skills/:id_**

**Compétences projet :**

- Récupérer toutes les compétences projet : **_GET /project_skills_**
- Récupérer une compétence projet par ID : **_GET /project_skills/:id_**
- Créer une compétence projet : **_POST /project_skills_**
- Mettre à jour une compétence projet : **_PUT /project_skills/:id_**
- Supprimer une compétence projet : **_DELETE /project_skills/:id_**

**Compétences :**

- Récupérer toutes les compétences : **_GET /skills_**
- Récupérer une compétence par ID : **_GET /skills/:id_**
- Créer une compétence : **_POST /skills_**
- Mettre à jour une compétence : **_PUT /skills/:id_**
- Supprimer une compétence : **_DELETE /skills/:id_**

**Regions SNCF :**

- Récupérer toutes les régions : **_GET /locations_**
- Récupérer une région par ID : **_GET /locations/:id_**
- Créer une région : **_POST /locations_**
- Mettre à jour une régions : **_PUT /locations/:id_**
- Supprimer une région : **_DELETE /locations/:id_**

**Emplois :**

- Récupérer tous les emplois : **_GET /jobs_**
- Récupérer un emploi par ID : **_GET /jobs/:id_**
- Créer un emploi : **_POST /jobs_**
- Mettre à jour un emploi : **_PUT /jobs/:id_**
- Supprimer un emploi : **_DELETE /jobs/:id_**

**Rôles utilisateur :**

- Récupérer tous les rôles utilisateur : **_GET /user_roles_**
- Récupérer un rôle utilisateur par ID : **_GET /user_roles/:id_**
- Créer un rôle utilisateur : **_POST /user_roles_**
- Mettre à jour un rôle utilisateur : **_PUT /user_roles_**
- Supprimer un rôle utilisateur :**_DELETE /user_roles_**

## Exemple Utilisateurs

### Récupérer tous les utilisateurs

Requête :

```
GET /users
```

Réponse :

```
{
    "users": [
        {
            "id": 1,
            "firstname": "Adrien",
            "lastname": "Sergent",
            "email": "as@example.com",
            "biography": "Je suis développeur web",
            "about": "Je suis passionné par le développement web depuis plusieurs années...",
            "user_image": "https://example.com/images/1.jpg",
            "password": "hashed_password",
            "github_page": "https://github.com/johndoe",
            "experience": 5,
            "user_role_id": 1,
            "job_id": 1,
            "location_id": 1
        },
        {
            "id": 2,
            "firstname": "Jane",
            "lastname": "Smith",
            "email": "janesmith@example.com",
            "biography": "Je suis développeur mobile",
            "about": "Je suis passionné par le développement mobile depuis plusieurs années...",
            "user_image": "https://example.com/images/2.jpg",
            "password": "hashed_password",
            "github_page": "https://github.com/janesmith",
            "experience": 3,
            "user_role_id": 2,
            "job_id": 2,
            "location_id": 2
        }
    ]
}
```

### Récupérer un utilisateur par son ID

Requête :

```
GET /users/:id
```

Réponse :

```
{
    "id": 1,
    "firstname": "John",
    "lastname": "Doe",
    "email": "johndoe@example.com",
    "biography": "Je suis développeur web",
    "about": "Je suis passionné par le développement web depuis plusieurs années...",
    "user_image": "https://example.com/images/1.jpg",
    "password": "hashed_password",
    "github_page": "https://github.com/johndoe",
    "experience": 5,
    "user_role_id": 1,
    "job_id": 1,
    "location_id": 1
}
```

### Ajouter un utilisateur

Requête :

```
POST /users
```

Avec un corps de requête :

```
{
  "firstname": "John",
  "lastname": "Doe",
  "email": "johndoe@email.com",
  "biography": "A software developer with 5 years of experience.",
  "about": "I am a motivated and passionate developer who is always looking to improve my skills and learn new technologies.",
  "user_image": "image_data_as_a_blob",
  "password": "password_hash",
  "github_page": "https://github.com/johndoe",
  "experience": 5,
  "user_role_id": 1,
  "job_id": 2,
  "location_id": 3
}
```

### Mise à jour d'un utilisateur

Requête :

```
PUT https://example.com/api/users/42

Body :
{
    "firstname": "John",
    "lastname": "Doe",
    "email": "johndoe@example.com",
    "biography": "A software developer with 10 years of experience.",
    "about": "I love coding and I'm always looking for new challenges.",
    "user_image": "https://example.com/images/johndoe.jpg",
    "password": "mysecretpassword",
    "github_page": "https://github.com/johndoe",
    "experience": 10,
    "user_role_id": 2,
    "job_id": 1,
    "location_id": 5
}
```

Avec un corps de requête :

```
HTTP/1.1 200 OK

Body :
{
    "id": 42,
    "firstname": "John",
    "lastname": "Doe",
    "email": "johndoe@example.com",
    "biography": "A software developer with 10 years of experience.",
    "about": "I love coding and I'm always looking for new challenges.",
    "user_image": "https://example.com/images/johndoe.jpg",
    "password": "mysecretpassword",
    "github_page": "https://github.com/johndoe",
    "experience": 10,
    "user_role_id": 2,
    "job_id": 1,
    "location_id": 5
}
```

### Effacer un utilisateur

Requête :

```
DELETE https://api.example.com/users/42
```

Avec un corps de requête :

```
HTTP/1.1 200 OK
```

## Gestion des erreurs

Pour la gestion des erreurs, l'API doit retourner le maximum d'informations pour que le développeur puisse comprendre l'erreur et effectuer une correction mais également suffisament d'informations pour que le développeur puisse les utiliser dans son programme pour retourner les problèmes fonctionnels à l'utilisateur final.

Par exemple dans une API Rest, il est important que les différents cas d'erreur soit explicités:

```
400 - BadRequest: The request is malformed.
404 - NotFound: The resource backup can't be found
401 - Unauthorized: The user is not authentified.
403 - Forbidden: The user is not authorized to access to the resource backup.
```

## Gestion des filtres par URL

à faire

## Typage

à faire
