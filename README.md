# 🐾 PawMart — Pet Adoption & Supply Portal

### 🌐 Live Website  
🔗 **Client:** [https://pawmart-adf30.web.app](https://pawmart-adf30.web.app)

### 🖥️ Server Link  
🔗 **Server (Hosted on Vercel):** [https://pawmart-server-black.vercel.app](https://pawmart-server-black.vercel.app)

---

## 🌟 Overview

**PawMart** is a single-page, community-driven platform connecting pet lovers, owners, and shops.  
It allows users to **adopt pets**, **purchase pet supplies**, and **create listings** with a smooth, modern experience.  
The platform is designed to promote responsible pet ownership while offering a user-friendly marketplace.

---

## ✨ Key Features

- 🐕 **Pet Adoption & Product Marketplace**  
  Browse and adopt pets or explore a variety of pet supplies in an organized, categorized layout.

- 🔒 **Secure Firebase Authentication**  
  Login and register using **Email/Password** or **Google Sign-in** with protected private routes.

- 🧾 **Add & Manage Listings**  
  Authenticated users can add, edit, and delete their own listings with confirmation alerts.

- 📄 **Order & Report System**  
  Users can adopt pets or order supplies and **download personalized order reports as PDFs** using jsPDF + AutoTable.

- 🌈 **Modern Responsive Design**  
  A visually appealing, mobile-first design built with **React, Tailwind CSS, and Framer Motion**, including **Dark/Light mode**.

---

## ⚙️ Technologies Used

| Category | Technologies |
|-----------|--------------|
| **Frontend** | React, Vite, Tailwind CSS, DaisyUI |
| **Backend** | Node.js, Express.js, MongoDB |
| **Authentication** | Firebase (Email/Password & Google Login) |
| **PDF Generator** | jsPDF, jsPDF-AutoTable |
| **Notifications** | React Hot Toast, SweetAlert2 |
| **Hosting** | Firebase (Client) • Vercel (Server) |

---

## 🗂️ Core Pages & Routes

| Page | Description |
|-------|--------------|
| 🏠 **Home** | Banner, category cards, recent listings, and awareness sections |
| 🐾 **Pets & Supplies** | Displays all listings with search and filter options |
| 🐕 **Listing Details** | Shows complete product/pet details with an Order/Adopt form |
| ➕ **Add Listing** | Add new listings (Private Route) |
| 📋 **My Listings** | Manage user-created listings (update/delete) |
| 📦 **My Orders** | View adoption/orders and **download PDF reports** |
| ⚠️ **404 Page** | Custom Not Found page (no navbar/footer) |

---

## 🔐 Authentication Workflow

- **Public Routes:** Home, Pets & Supplies, Login, Register, 404  
- **Private Routes:** Add Listing, My Listings, My Orders, Listing Details  
- Firebase Authentication ensures secure access and **persists login sessions**.  
- Authorized domains added for **Firebase Hosting compatibility**.

---

## 🧩 Highlights

- Dynamic page titles per route  
- Custom loading spinner for API calls  
- SweetAlert & Toast notifications (no default JS alerts)  
- Fully responsive layout across all devices  
- Consistent fonts, grid spacing, and UI alignment  

---

> 🐾 _“Adopt, Don’t Shop — Because every pet deserves a loving home.”_ ❤️
