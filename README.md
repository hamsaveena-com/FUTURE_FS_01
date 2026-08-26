# 🎬 Movie Ticket Booking System

A web-based **Movie Ticket Booking System** that allows users to select movies, choose seats, calculate the ticket amount, and store booking information in a PostgreSQL database.

## 🚀 Features

* 🎥 Movie selection
* 💺 Interactive seat selection
* 🚫 Prevents already booked seats from being selected
* 💰 Automatic ticket price calculation
* 🎟️ Movie ticket booking
* 🗄️ PostgreSQL database for storing bookings
* 🔗 Node.js and Express backend API
* 🌐 Simple and responsive frontend
* 🔐 Environment variables protected using `.gitignore`

## 🛠️ Tech Stack

### Frontend

* HTML
* CSS
* JavaScript

### Backend

* Node.js
* Express.js

### Database

* PostgreSQL
* Supabase

### Other Tools

* Git
* GitHub
* VS Code

## 📁 Project Structure

```text
FUTURE_FS_01/
│
├── index.html
├── style.css
├── script.js
├── README.md
├── .gitignore
│
└── movie-ticket-booking-backend/
    ├── server.js
    ├── package.json
    ├── .env
    ├── config/
    │   └── db.js
    └── routes/
        └── bookingRoutes.js
```

> **Note:** The `.env` file contains sensitive database credentials and is not uploaded to GitHub.

## ⚙️ How to Run the Project

### 1. Clone the repository

```bash
git clone https://github.com/hamsaveena-com/FUTURE_FS_01.git
```

### 2. Open the project

```bash
cd FUTURE_FS_01
```

### 3. Install backend dependencies

```bash
cd movie-ticket-booking-backend
npm install
```

### 4. Configure environment variables

Create a `.env` file inside the backend folder:

```env
PORT=5000
DATABASE_URL=your_postgresql_connection_string
```

### 5. Start the backend server

```bash
node server.js
```

The backend will run on:

```text
http://localhost:5000
```

### 6. Run the frontend

Open `index.html` using **VS Code Live Server**.

## 🗄️ Database

The project uses **PostgreSQL through Supabase** to store movie booking information.

The backend connects to PostgreSQL using the `pg` Node.js package.

Database credentials are stored in environment variables and are excluded from GitHub using `.gitignore`.

## 🔌 API Endpoints

### Book a Ticket

```text
POST /api/bookings/book
```

### Get Booked Seats

```text
GET /api/bookings/booked-seats
```

## 📸 Screenshots

Screenshots of the application can be added here to demonstrate:

* Movie selection
* Seat selection
* Booking confirmation
* Booked seats

## 🔮 Future Improvements

* 👤 User registration and login
* 🎭 Multiple theatres
* 💺 More seats and seat layouts
* 🎬 More movies
* 📅 Movie show-date selection
* 💳 Online payment integration
* 🔒 JWT-based authentication
* ⚡ Redis-based temporary seat locking
* 📱 Improved mobile responsiveness

## 👩‍💻 Author

**Hamsaveena**

Computer Science Student & Full Stack Developer

---

⭐ If you find this project useful, consider giving it a star!
