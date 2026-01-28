# React Account Table

A ReactJS assignment project implementing an **account management table** with
filtering, pagination, Excel export, form validation, and responsive design.

This project is built as part of a **React Intern Assignment** and follows
best practices for clean code and usability.

---

## 🚀 Features

- Display account data in a tabular format
- Pagination (10 records per page)
- Global search / filtering
- Column sorting (ascending & descending)
- Add new account using a validated form
- Excel download functionality
  - Exports **filtered data only** if search is applied
- Mobile-responsive design
  - Desktop: full table view
  - Mobile: horizontally scrollable table

---

## 🛠️ Tech Stack

- **ReactJS**
- **Vite**
- **Redux Toolkit** (global state management)
- **React Hook Form** (form handling & validation)
- **XLSX** (Excel export)
- **CSS** (responsive styling)

---

## ▶️ How to Run Locally

```bash
npm install
npm run dev

The application will start at:

http://localhost:5173

📱 Responsive Design

Desktop: Full table view with pagination

Mobile: Horizontally scrollable table for better usability

📸 Screenshots
🖥️ Desktop View




📱 Mobile View

📂 Project Structure
react-account-table/
│
├── screenshots/
│   ├── desktop1.png
│   ├── desktop2.png
│   └── mobile.png
│
├── src/
│   ├── components/
│   │   └── AccountForm.jsx
│   ├── data/
│   │   └── accountsData.js
│   ├── store/
│   │   ├── accountsSlice.js
│   │   └── store.js
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
│
├── README.md
├── package.json
└── vite.config.js

👩‍💻 Author

Sugandha





