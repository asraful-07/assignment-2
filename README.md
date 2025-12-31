# 🚀 Vehicle Rental System

**Live URL:** (https://assignment-2-atyq7p8jm-asrafuls-projects-80fa980c.vercel.app/)

---

## 📌 Overview

**Vehicle Rental System** is a modern web application designed to provide an efficient and user-friendly experience for managing vehicle rentals. The system allows users to browse available vehicles, make bookings, and manage their reservations, while administrators can manage vehicles, users, and bookings through a secure dashboard.

The project is built with clean architecture and follows industry-standard development practices to ensure scalability, security, and high performance.

---

## ✨ Features

- User authentication (Login / Registration)
- Role-based access (Admin / Customer)
- Secure API with JWT / Bearer Authentication
- CRUD operations (Create, Read, Update, Delete)
- Real-time status updates (if applicable)
- Error handling and validation

---

## 🛠 Technology Stack

**Backend:**

- Node.js
- Express.js

**Database:**

- PostgreSQL

**Authentication:**

- JWT / HTTP-Only Bearer

**Other Tools:**

- dotenv
- bcrypt

---

## ⚙️ Setup Instructions

Follow these steps to run the project locally:

### 1. Clone the repository

```bash
git clone (https://github.com/asraful-07/assignment-2)
```

### 2. Go to the project directory

```bash
cd project-folder-name
```

### 3. Install dependencies

```bash
npm install
```

### 4. Setup Environment Variables

Create a `.env` file in the root directory and add:

```
PORT=5001
DB_URL=postgresql://neondb_owner:npg_hrv5MLxQzOR1@ep-silent-bird-a8sf1uj1-pooler.eastus2.azure.neon.tech/neondb?sslmode=require&channel_binding=require
JWT_SECRET_KEY= "KMUFsIDTnFmyG3nMiGM6H9FNFUROf3wh7SmqJp-QV30"
```

### 5. Run the project

```bash
npm run dev
```

Server will start at:

```
http://localhost:5001
```

---
