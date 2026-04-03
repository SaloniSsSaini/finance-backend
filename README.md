# 🚀 Finance Data Processing & Access Control Backend

## 📌 Overview

This project is a **production-grade backend system** built to manage financial data with **secure authentication, role-based access control, analytics, and scalable architecture**.

It simulates a real-world **finance dashboard backend**, where different users interact with financial records based on their roles and permissions.

---

## 🎯 Key Features

* 🔐 JWT Authentication & Authorization
* 👥 Role-Based Access Control (RBAC)
* 💰 Financial Records Management (CRUD)
* 🔍 Advanced Filtering & Pagination
* 📊 Dashboard Analytics (Aggregation)
* 🧾 Audit Logging System
* 📈 Prediction & Smart Insights
* 📤 CSV Data Export
* ⚡ Rate Limiting (Security)
* ⏱️ Cron Jobs (Background Tasks)
* 🧠 Clean Layered Architecture

---

## 🧱 Tech Stack

| Layer      | Technology         |
| ---------- | ------------------ |
| Backend    | Node.js, Express   |
| Database   | MongoDB (Mongoose) |
| Auth       | JWT                |
| Validation | Joi                |
| Security   | bcrypt, rate-limit |
| Scheduler  | node-cron          |

---

## 📁 Project Structure

```
src/
 ├── config/             # Database connection
 ├── constants/          # Roles & messages
 ├── controllers/        # Request handlers
 ├── jobs/               # Cron jobs
 ├── middleware/         # Auth, RBAC, rate limit
 ├── models/             # Database schemas
 ├── responses/          # Standard API responses
 ├── routes/             # API routes
 ├── services/           # Business logic layer
 ├── utils/              # Helper functions
 ├── validators/         # Joi validation schemas
 └── app.js

server.js                # Server entry
.env                     # Environment config
```

---

## 🔐 Authentication & Authorization

### Authentication (JWT)

* Users can register and login
* Token contains:

  * userId
  * role
* Token is required in all protected APIs

```
Authorization: Bearer <token>
```

---

### Role-Based Access Control (RBAC)

| Role    | Permissions                  |
| ------- | ---------------------------- |
| Admin   | Create, Read, Update, Delete |
| Analyst | Read                         |
| Viewer  | Read                         |

RBAC is enforced using middleware:

* `authMiddleware.js`
* `authorize.js`

---

## 👤 User Management

Each user includes:

* Name
* Email
* Password (hashed)
* Role
* Status

---

## 💰 Financial Records

Each record includes:

* Amount
* Type (income / expense)
* Category
* Date
* Notes
* User ownership
* Soft delete flag

### Features:

* Create record
* View records
* Update record
* Soft delete record

---

## 🔍 Advanced Query Features

### Filtering:

```
/api/records?type=expense&category=food&min=100&max=1000
```

### Pagination:

```
/api/records?page=1&limit=10
```

---

## 📊 Dashboard & Analytics

### APIs:

* `/api/dashboard/summary`
* `/api/dashboard/categories`
* `/api/dashboard/trends`

### Implemented Using:

* MongoDB Aggregation Pipeline

### Outputs:

* Total income
* Total expenses
* Net balance
* Category-wise totals
* Monthly trends

---

## 🧾 Audit Logging

All critical operations are logged:

* CREATE
* UPDATE
* DELETE

Log includes:

* userId
* action
* recordId
* timestamp

---

## 📈 Prediction & Smart Insights

The system analyzes user data to provide:

* Monthly expense prediction
* Spending insights

Example:

```
"You are spending most on food"
```

---

## 📤 Data Export

Export records as CSV:

```
GET /api/export/csv
```

---

## ⚡ Performance & Security

### Rate Limiting

* Prevents API abuse

### Password Security

* bcrypt hashing

### Validation

* Joi-based request validation

### Standard API Response

All responses follow:

```
{
  "success": true,
  "message": "string",
  "data": {}
}
```

---

## ⏱️ Background Jobs

Using `node-cron`:

* Daily scheduled tasks
* Extendable for reporting & cleanup

---

## 🧪 API Testing

Use Postman:

### Steps:

1. Register user
2. Login → get token
3. Add token in headers
4. Test APIs

---

## 🚀 Setup Instructions

### 1. Clone repository

```
git clone <repo-url>
cd finance-backend
```

---

### 2. Install dependencies

```
npm install
```

---

### 3. Create .env file

```
PORT=5000
MONGO_URI=your_mongo_url
JWT_SECRET=your_secret
```

---

### 4. Run server

```
npm run dev
```

---

## 🧠 Architecture

The project follows **layered architecture**:

```
Route → Controller → Service → Database
```

### Benefits:

* Clean separation of concerns
* Scalable design
* Maintainable code

---

## ✅ Feature Summary

✔ Authentication (JWT)
✔ RBAC Authorization
✔ CRUD Operations
✔ Filtering & Pagination
✔ Aggregation Dashboard
✔ Audit Logging
✔ Prediction & Insights
✔ CSV Export
✔ Rate Limiting
✔ Cron Jobs
✔ Validation Layer
✔ Standard Response System

---

## 🏆 Conclusion

This project demonstrates:

* Strong backend engineering fundamentals
* Secure and scalable API design
* Clean architecture and code structure
* Real-world problem-solving approach

It is designed to reflect **industry-level backend development practices**, beyond a basic CRUD application.

---

## 👩‍💻 Author

**Saloni Saini**

---
