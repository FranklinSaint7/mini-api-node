Mini API Node – Express

Une API REST simple développée avec **Node.js et Express**, structurée en **routes** et **contrôleurs**, et testée avec **Postman**.

Ce projet a été réalisé pour apprendre les bases du back-end :

* création d’un serveur Express,
* organisation du code,
* gestion des routes HTTP,
* et manipulation de données côté serveur.

---

Structure du projet

```
mini-api-node/
│
├── index.js
├── package.json
├── .gitignore
└── src/
   ├── routes/
   │   └── users.routes.js
   └── controllers/
       └── users.controller.js
```

---

Installation

1. Cloner le projet :

```bash
git clone https://github.com/TON-PSEUDO/mini-api-node.git
cd mini-api-node
```

2. Installer les dépendances :

```bash
npm install
```

3. Lancer le serveur :

```bash
npx nodemon index.js
```

Le serveur démarre sur :
👉 `http://localhost:3000`

---

Endpoints disponibles

### ✅ GET tous les utilisateurs

```
GET /users
```

### ✅ GET un utilisateur par ID

```
GET /users/:id
```

### ✅ POST créer un utilisateur

```
POST /users
```

**Body (JSON) exemple :**

```json
{
  "name": "Andy",
  "poste": "Running Back"
}
```

### ✅ DELETE un utilisateur

```
DELETE /users/:id
```

---

 Tests

Les endpoints ont été testés avec **Postman**.

---

Objectif du projet

Ce projet sert de base pour comprendre :

* le fonctionnement d’une API REST,
* la séparation des responsabilités (routes / contrôleurs),
* et l’utilisation d’Express dans un projet Node.js.

---

 Auteur

Yohan
Apprenant en développement web – Back-end Node.js
