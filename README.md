# 📝 TodoList - FullStack App (Angular 19 + Spring Boot 3.4 + Java 21 + PostgreSQL)

![Angular Version](https://img.shields.io/badge/Angular-19-red)
![Spring Boot Version](https://img.shields.io/badge/SpringBoot-3.4-blue)
![Java Version](https://img.shields.io/badge/Java-21-orange)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-✔️-blue)
![Build](https://img.shields.io/badge/Build-Passing-brightgreen)
![License](https://img.shields.io/badge/License-MIT-yellow)

## 📌 Description

Ce projet est une application **Full Stack** permettant de gérer une liste de tâches (**TodoList**).

L'application permet de :

- ✅ Créer des tâches
- ✅ Lire et afficher la liste des tâches
- ✅ Modifier des tâches
- ✅ Supprimer des tâches

Elle est composée d'un **frontend Angular** et d'un **backend Spring Boot REST API**, le tout connecté à une **base de données PostgreSQL** pour la persistance des données.

---

## 🧩 Stack Technique

### Frontend

- **Angular** v19
- **TypeScript**
- **Signal**
- **CSS**

### Backend

- **Spring Boot** v3.4
- **Java** v21
- **Spring Data JPA**
- **PostgreSQL Driver**

### Base de données

- **PostgreSQL**

---

## 📂 Architecture

```
├── Front (Angular 19)
│   ├── src/
│   ├── angular.json
│   ├── package.json
│   └── ...
└── Back (Spring Boot 3.4 / Java 21)
    ├── src/
    │   └── main/java/com/example/todos/
    ├── pom.xml
    └── ...
```

---

## 🛠 Fonctionnalités

### Frontend

- Liste des todos en temps réel
- Ajout de nouvelles tâches
- Modification des tâches existantes
- Suppression des tâches
- Sélection d'une tâche 

### Backend

- API RESTful (CRUD)
- Persistance via JPA et PostgreSQL
- Table générée automatiquement via `@Entity`
- Gestion des CORS pour communication avec Angular

### Base de données

- PostgreSQL avec table auto-générée
- Champs : id (PK), title (string), done (boolean)

---

## 🚀 Lancer le projet

### Prérequis

- Node.js & Angular CLI
- Java 21
- PostgreSQL
- Maven

---

### 📦 Installation

#### 1️⃣ Base de données

Créer la base PostgreSQL :

```sql
CREATE DATABASE todolist;
```

Configurer `application.properties` :

```properties
spring.datasource.url=jdbc:postgresql://localhost:5432/todolist
spring.datasource.username=postgres
spring.datasource.password=your_password
spring.jpa.hibernate.ddl-auto=update
```

#### 2️⃣ Backend (Spring Boot)

```bash
cd Back
mvn spring-boot:run
```

Accessible sur : `http://localhost:8080`

#### 3️⃣ Frontend (Angular)

```bash
cd Front
npm install
ng serve
```

Accessible sur : `http://localhost:4200`

---

## 📡 API Endpoints (Backend)

| Méthode | URL | Description |
|---------|-----|-------------|
| GET | /todos | Récupérer tous les todos |
| POST | /todos | Ajouter un todo |
| PUT | /todos/{id} | Modifier un todo |
| DELETE | /todos/{id} | Supprimer un todo |

---

## 📎 Versions

- **Angular**: 19
- **Spring Boot**: 3.4
- **Java**: 21
- **PostgreSQL**: 16+

---

## 📎 Auteur

Projet réalisé dans le cadre d'un exercice formateur pour apprendre à combiner **Angular**, **Spring Boot** et **PostgreSQL**.

---

