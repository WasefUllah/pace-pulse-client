# 🌟 Pace Pulse

**Live Site:** [https://pace-pulse.web.app/](https://pace-pulse.web.app/)

**Pace Pulse** is a dynamic web platform designed to streamline the registration and management of marathon events. Built with modern technologies like React, Tailwind CSS, Firebase, and MongoDB, it delivers a seamless user experience for both organizers and participants.

---

## 🚀 Key Features

- 🏃 **Marathon Showcase & Registration** – Browse upcoming events and register easily.
- 📊 **Personal Dashboard** – Authenticated users can view their registrations and manage marathon info.
- ⏱️ **Live Countdown & Date Handling** – Real-time timers powered by `date-fns` and `react-countdown-circle-timer`.
- 🛠️ **Interactive UI** – Enhanced with Tailwind CSS, Framer Motion, Lottie animations, and React Tooltip.
- 🔐 **Secure Authentication** using Firebase and JWT token validation for protected routes.

---

## 🧩 Tech Stack

### 🖥️ Frontend
- React
- Tailwind CSS
- Framer Motion
- Lottie React
- React Router
- React Tooltip
- SweetAlert2

### 🔧 Backend
- Node.js
- Express.js
- MongoDB
- Firebase Admin SDK

### 🔐 Auth & Hosting
- Firebase Authentication
- Firebase Hosting

### 📦 Utilities
- Axios
- Date-fns
- Countdown Timer
- CountUp
- React DatePicker

---

## 📦 Dependencies

```json
"@tailwindcss/vite": "^4.1.9",
"axios": "^1.9.0",
"date-fns": "^4.1.0",
"firebase": "^11.9.1",
"framer-motion": "^12.17.0",
"lottie-react": "^2.4.1",
"ogl": "^1.0.11",
"react": "^19.1.0",
"react-countdown-circle-timer": "^3.2.1",
"react-countup": "^6.5.3",
"react-datepicker": "^8.4.0",
"react-dom": "^19.1.0",
"react-icon": "^1.0.0",
"react-router": "^7.6.2",
"react-tooltip": "^5.29.0",
"sweetalert2": "^11.22.0",
"tailwindcss": "^4.1.9"
```

---

## 📁 Project Structure

```
root/
├── client/               # Frontend React app
│   ├── src/
│   └── public/
├── server/               # Backend Express API
├── .env                  # Environment variables
├── vercel.json           # (If applicable) Vercel deployment config
```

---

## 🚀 Run Locally

### Client Setup

```bash
git clone [https://github.com/your-username/pace-pulse.git](https://github.com/WasefUllah/b11-a11-pace-pulse-client-side.git)
cd b11-a11-pace-pulse-client-side
npm install
npm run dev
```

### Server Setup

```bash
cd ../server
npm install
npm run start
```

Make sure to configure your `.env` file with proper Firebase and MongoDB credentials before running.

---

## 🧩 Setup Notes

- Requires **Node.js** and **npm**
- Tailwind CSS is configured via `tailwind.config.js`
- Make sure Firebase project settings and MongoDB connection URI are correctly added in `.env`

---

## 🤝 Contribution Guidelines

Feel free to fork, clone, or open a pull request to suggest improvements.

Found a bug? Open an issue with a detailed explanation or reproduction steps.

---

## 📄 License

This project is open source and available under the **MIT License**.
