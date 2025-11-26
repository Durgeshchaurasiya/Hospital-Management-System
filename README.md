# 🏥 Hospital Management System – Full Stack Web Application

**Hospital Management System (HMS)** is a full-stack web app designed to streamline hospital operations — from managing patients, doctors, and appointments to billing and payments.  
It includes **three modules**: **Frontend (User Portal)**, **Backend (Server)**, and **Admin Panel** for overall management and analytics.

---

## 🌟 Table of Contents
- [Overview](#-overview)
- [Modules](#-modules)
- [Tech Stack](#-tech-stack)
- [Setup Instructions](#-setup-instructions)
- [Environment Variables](#-environment-variables)
- [Features](#-features)
- [Project Structure](#-project-structure)
- [Deployment](#-deployment)
- [Author](#-author)

---

## 📋 Overview

This Hospital Management System enables:
- 👨‍⚕️ **Doctors** to manage patient records and appointments  
- 🧍‍♂️ **Patients** to register, book consultations, and make payments  
- 🏢 **Admins** to monitor operations, manage departments, and oversee billing  

It ensures **secure authentication**, **data consistency**, and **fast performance**, using **React** on the frontend and **Node.js + MongoDB** on the backend.

---

## 🧩 Modules

1. **Frontend (User Portal)** – Patient-facing interface for appointments, reports, and payments  
2. **Backend (Server)** – Handles APIs, authentication, and database operations  
3. **Admin Panel** – For hospital staff to manage doctors, patients, and billing

---

## 🛠️ Tech Stack

### **Frontend & Admin**
- ⚛️ React (Vite)
- 🎨 Tailwind CSS
- 🌐 Axios
- 🧭 React Router DOM
- 🔔 React Toastify

### **Backend**
- 🧱 Express.js
- 🍃 MongoDB + Mongoose
- 🔐 JWT Authentication
- ☁️ Cloudinary + Multer (for uploads)
- 💳 Razorpay (for payments)
- 🧂 dotenv (config)
- 🔁 Nodemon (dev server)
- 🔒 bcryptjs (password encryption)
- 🧾 Validator (form validation)

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the repository
git clone https://github.com/yourusername/Hospital-Management-System.git  
cd Hospital-Management-System

---

### 2️⃣ Install dependencies

#### Frontend
cd frontend  
npm install  

#### Backend
cd ../backend  
npm install  

#### Admin
cd ../admin  
npm install  

---

### 3️⃣ Run the servers

#### Start Backend
npm run dev  

#### Start Frontend
cd ../frontend  
npm run dev  

#### Start Admin Panel
cd ../admin  
npm run dev  

---

## 🔐 Environment Variables

### Backend `.env`
PORT=5000  
MONGO_URI=your_mongodb_connection_string  
JWT_SECRET=your_secret_key  
CLOUDINARY_CLOUD_NAME=your_cloud_name  
CLOUDINARY_API_KEY=your_api_key  
CLOUDINARY_API_SECRET=your_api_secret  
RAZORPAY_KEY_ID=your_razorpay_key  
RAZORPAY_KEY_SECRET=your_razorpay_secret  

---

## ✨ Features

- 🧾 Patient Registration & Login  
- 🩺 Doctor Management & Scheduling  
- 📅 Appointment Booking System  
- 💳 Online Payments (Razorpay)  
- ☁️ Cloud-based Medical Report Uploads  
- 🔒 Secure Authentication (JWT + bcrypt)  
- 🧑‍💼 Admin Dashboard for Hospital Control  
- 📱 Responsive Design using Tailwind CSS  

---

## 📂 Project Structure

Hospital-Management-System/  
├── frontend/         # React + Vite frontend (Patient Portal)  
├── admin/            # React + Vite admin dashboard  
├── backend/          # Express + MongoDB backend  
└── README.md         # Documentation  

---

## 🚀 Deployment

- **Frontend & Admin:** Vercel / Netlify  
- **Backend:** Render / Railway / AWS  
- **Database:** MongoDB Atlas  
