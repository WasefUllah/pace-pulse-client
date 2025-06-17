# 🌟 Pace Pulse

**Live Site:** [https://pace-pulse.web.app/](https://pace-pulse.web.app/)

Pace Pulse is a dynamic web platform designed to streamline the registration and management of marathon events. Built with modern technologies like React, Tailwind CSS, Firebase, and MongoDB, it delivers a seamless user experience for both organizers and participants.

## 🚀 Key Features

- 🔐 **Secure Authentication** using Firebase with JWT token validation for protected routes.
- 🏃 **Marathon Showcase & Registration** – View featured and upcoming events, and register easily with just a few clicks.
- 📊 **Personal Dashboard** – Authenticated users can view and manage their own applied marathons and see event details.
- 📅 **Live Countdown & Date Handling** – Utilizes `date-fns` and `react-countdown-circle-timer` for real-time event timers.
- 🛠️ **Interactive UI** – Beautifully styled with Tailwind CSS and enhanced with Framer Motion, Lottie animations, and React Tooltip.

## 🧩 Tech Stack

- **Frontend:** React, Tailwind CSS, Framer Motion, Lottie React
- **Backend:** Node.js, Express.js, MongoDB, Firebase Admin SDK
- **Auth & Hosting:** Firebase Authentication, Firebase Hosting
- **Utilities:** Axios, Date-fns, SweetAlert2

## 📂 Project Structure

- `client/` – Frontend React App
- `server/` – Backend Express API connected to MongoDB
- `.env` – Environment variables for secure credentials
- `vercel.json` – Configuration for Vercel deployment (if applicable)
