# 🎓 University Management — Full Stack Application

Application Web Full Stack de gestion des étudiants, développée avec un frontend Angular et un backend Node.js/Express connecté à MongoDB Atlas. L'interface propose un thème sombre personnalisé d'inspiration **Cybersecurity / Terminal Dark** pour une expérience utilisateur moderne et lisible.

---

## 🎨 Aperçu de l'Interface
- **Design :** Dark Mode (Cybersecurity / Terminal UI)
- **Palette :** Fond très sombre, accents néon vert/cyan (`#00ffcc`), boutons rouges de suppression et textes de tableaux en blanc éclatant (`#ffffff`).

---

## 🚀 Fonctionnalités
- ➕ **Ajout d'étudiants :** Formulaire interactif pour enregistrer le Nom, l'Email et le Niveau de l'étudiant.
- 📋 **Consultation en temps réel :** Affichage dynamique de la liste des étudiants récupérée depuis la base de données MongoDB Atlas.
- 🗑️ **Suppression d'entrées :** Retrait d'un étudiant de la base de données via une API REST backend.

---

## 🛠️ Technologies & Outils

### Frontend
- **Framework :** Angular (Standalone Components, Forms, HttpClient)
- **Styles :** CSS3 personnalisé (Typographie monospacée, effets néons)

### Backend
- **Environnement :** Node.js & Express.js
- **Base de données :** MongoDB Atlas via Mongoose ORM
- **CORS :** Configuré pour autoriser les requêtes du frontend Angular

---

## 📁 Structure du Projet

```text
UniversityManagement/
├── backend/
│   ├── config/          # Configuration de la base de données (db.js)
│   ├── controllers/     # Logique métier des étudiants
│   ├── models/          # Schéma Mongoose (Student.js)
│   ├── routes/          # Routes API REST (/api/students)
│   ├── server.js        # Point d'entrée du serveur Express
│   └── package.json
│
└── frontend/
    ├── src/
    │   └── app/         # Composants et services Angular
    └── package.json
```

---

## ⚙️ Installation et Lancement Local

### 1. Cloner le dépôt
```bash
git clone https://github.com/Hayder-Ben-Abdelhamid/UniversityManagement.git
cd UniversityManagement
```

### 2. Configurer et lancer le Backend
```bash
cd backend
npm install
npm run dev
# Le serveur démarrera sur http://localhost:5000 (ou votre port configuré)
```

### 3. Configurer et lancer le Frontend
Ouvrez un second terminal :
```bash
cd frontend
npm install
ng serve -o
# L'application s'ouvrira automatiquement sur http://localhost:4200
```

---

## 👨‍💻 Auteur
**Hayder Ben Abdelhamid** — *Cybersecurity Engineering Student*
- GitHub : [@Hayder-Ben-Abdelhamid](https://github.com/Hayder-Ben-Abdelhamid)
