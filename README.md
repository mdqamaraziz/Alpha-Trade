# 🚀 Alpha Trade — Full Stack Stock Trading Platform

Alpha is a full-stack trading web application. This project focuses on modern web architecture, secure authentication, and cloud-based deployment.

---

## 🌐 Live Demo

👉 Experience the platform live: [Alpha Trade Demo](https://alpha-trade-1-kx8a.onrender.com)

---

## 💻 Repository

Source code: [GitHub Repo](https://github.com/mdqamaraziz/Alpha-Trade)

---

## 📌 Project Overview

This project is a functional trading platform, designed to simulate real-world financial software architecture. It features a robust backend for user management and a dynamic frontend for data visualization.

### Key Highlights:

- **End-to-End Communication:** Seamless integration between React frontend and Node.js/Express backend.
- **Secure Authentication:** Implementation of JWT-based login and signup flows.
- **Cloud Infrastructure:** Fully deployed using Vercel, Render, and MongoDB Atlas.

---

## 🛠 Tech Stack

| Component      | Technology                                               |
| :------------- | :------------------------------------------------------- |
| **Frontend**   | React.js, Bootstrap, Axios, React Router, React Toastify |
| **Backend**    | Node.js, Express.js                                      |
| **Database**   | MongoDB Atlas (NoSQL)                                    |
| **Auth**       | JSON Web Tokens (JWT) & Bcrypt.js                        |
| **Deployment** | Render (Backend), Vercel (Frontend)                      |

---

## ✨ Features

- [x] **User Signup & Login:** Secure account creation and credential validation
- [x] **JWT Authentication:** Token-based session management
- [x] **Protected Routes:** Dashboard access restricted to authorized users
- [x] **RESTful API:** Clean API design for holdings, positions, and user data
- [x] **Real-time Notifications:** Feedback via React Toastify

---

## 🔐 Authentication Flow

1. User submits login/signup form
2. Backend validates credentials
3. JWT token is generated
4. Token stored in localStorage
5. Token sent in API requests

---

## 📚 Key Learnings

- Full-stack architecture design
- Environment variable management
- Secure password hashing using Bcrypt.js
- Handling CORS between frontend and backend

---

## ⭐ Future Improvements

- HTTP-Only Cookies for better security
- Refresh token implementation
- Live stock market API integration
- Docker containerization

---

## ⚙️ Local Setup

### 1. Clone repository

```bash
git clone https://github.com/mdqamaraziz/Alpha-Trade.git
cd Alpha-Trade
```

---

### 2. Install dependencies

```bash
cd frontend
npm install

cd ../backend
npm install
```

---

### 3. Setup environment variables

#### 📁 frontend/.env

```env
REACT_APP_API_URL=your_backend_url_here
```

#### 📁 backend/.env

```env
PORT=5000
MONGO_URI=your_mongodb_url
JWT_SECRET=your_secret
```

---

### 4. Run project

```bash
# frontend
cd frontend
npm start

# backend
cd backend
npm run dev
```

---

## 👨‍💻 Author

**Md Qamar Aziz**

🔗 GitHub: https://github.com/mdqamaraziz
🔗 LinkedIn: https://www.linkedin.com/in/mdqamaraziz

---
