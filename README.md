<p align="center">
  <img src="public/banner.jpg" alt="EduBangli Banner" width="100%" />
</p>

<h1 align="center">🎓 EduBangli — Programming Courses Platform</h1>

<p align="center">
  <strong>বাংলা ভাষায় প্রজেক্ট-বেইজড টেক কোর্স ও মেন্টরশিপ প্ল্যাটফর্ম</strong>
</p>

<p align="center">
  <a href="https://programing-curors.vercel.app" target="_blank"><strong>🌐 Live Demo</strong></a> •
  <a href="#features">Features</a> •
  <a href="#tech-stack">Tech Stack</a> •
  <a href="#getting-started">Getting Started</a> •
  <a href="#project-structure">Project Structure</a> •
  <a href="#environment-variables">Environment Variables</a> •
  <a href="#deployment">Deployment</a> •
  <a href="#contributing">Contributing</a> •
  <a href="#license">License</a>
</p>

<p align="center">
  <a href="https://programing-curors.vercel.app"><img src="https://img.shields.io/badge/🔴_LIVE-programing--curors.vercel.app-blue?style=for-the-badge" alt="Live Demo" /></a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js" alt="Next.js" />
  <img src="https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react" alt="React" />
  <img src="https://img.shields.io/badge/TailwindCSS-4-06B6D4?style=for-the-badge&logo=tailwindcss" alt="TailwindCSS" />
  <img src="https://img.shields.io/badge/MongoDB-Atlas-47A248?style=for-the-badge&logo=mongodb" alt="MongoDB" />
  <img src="https://img.shields.io/badge/Vercel-Deployed-000?style=for-the-badge&logo=vercel" alt="Vercel" />
</p>

---

## 📖 Overview

**EduBangli** is a full-featured, Bengali-language online education platform
that offers project-based tech courses, live mentorship, and career preparation
support. Built with modern web technologies, it provides a premium learning
experience with live classes, real-world project assignments, code reviews, and
career guidance — all in Bangla.

---

## ✨ Features

### 🏠 Landing Page

- Hero banner with animated stats (12K+ learners, 48+ courses, 4.9/5 rating)
- Course search functionality
- Career track categories (Web Dev, MERN Stack, UI/UX Design, Programming
  Basics)
- Featured courses showcase with pricing, duration, and skill tags
- Step-by-step learning flow explanation
- Mentorship highlights section
- CTA section for new batch enrollment

### 📚 Course Catalog

- Browse all available courses
- Course cards with detailed info (price, duration, lessons, ratings)
- Dynamic course data fetched from backend API

### 📝 Course Details

- Individual course page with full description
- Skill tags, pricing, and enrollment options

### 🔐 Authentication

- Email & password registration/login
- Google OAuth social login
- Session management with **Better Auth**
- Protected routes for authenticated users

### 👤 User Dashboard

- Personalized welcome message
- Learning progress stats (running courses, completed, learning hours,
  certificates)
- Enrolled courses with progress bars
- Upcoming live class schedule
- Certificates management
- Wishlist tracking
- Account settings

### 👨‍🏫 Mentors Page

- Browse available mentors and their expertise

### 📰 Blog

- Educational blog posts and articles

### 🧭 Navigation

- Responsive navbar with glassmorphism effect
- Mobile hamburger menu
- Dynamic auth state (login/signup buttons or user avatar)
- Sticky footer with platform info

---

## Live Demo: https://programing-curors.vercel.app/




### Prerequisites

- **Node.js** ≥ 18.x
- **npm** ≥ 9.x (or yarn / pnpm / bun)
- **MongoDB Atlas** account (or local MongoDB instance)
- **Google Cloud Console** project (for OAuth)

 

## 🌐 Deployment

This project is deployed on **Vercel** with a separate backend server.

> **🔗 Live Production URL:**
> [https://programing-curors.vercel.app](https://programing-curors.vercel.app)

### Deploy to Vercel

1. Push your code to GitHub
2. Go to [vercel.com/new](https://vercel.com/new)
3. Import your repository
4. Add all environment variables in the Vercel dashboard
5. Deploy!

### Architecture

```
┌─────────────────────┐         ┌─────────────────────┐
│   Client (Next.js)  │ ◄─────► │  Backend API Server  │
│   Vercel Hosting    │  HTTP   │   Vercel Hosting     │
└────────┬────────────┘         └──────────┬──────────┘
         │                                 │
         │  Better Auth                    │  REST API
         │                                 │
         └────────────┐   ┌───────────────┘
                      ▼   ▼
              ┌───────────────────┐
              │  MongoDB Atlas    │
              │  (Cloud Database) │
              └───────────────────┘
```

---

## 🎨 Design System

- **Typography:** Geist Sans & Geist Mono (Vercel fonts)
- **Color Palette:** Slate-based neutrals with Blue, Emerald, Amber, and Rose
  accents
- **Components:** DaisyUI + HeroUI component library
- **Layout:** Responsive grid system (mobile-first)
- **Effects:** Glassmorphism navbar, hover animations, smooth transitions
- **Language:** Bengali (bn) as primary language with English for technical
  terms

---

## 🤝 Contributing

Contributions are welcome! Here's how to get started:

1. **Fork** this repository
2. **Create** a feature branch: `git checkout -b feature/amazing-feature`
3. **Commit** your changes: `git commit -m "feat: add amazing feature"`
4. **Push** to the branch: `git push origin feature/amazing-feature`
5. **Open** a Pull Request

### Commit Convention

We follow [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` — New feature
- `fix:` — Bug fix
- `docs:` — Documentation changes
- `style:` — Code style (formatting, no logic change)
- `refactor:` — Code refactoring
- `test:` — Adding or updating tests

---

## 📄 License

This project is private and not licensed for public redistribution.

---

<p align="center">
  Built with ❤️ by <strong>Islam Md Sohan</strong> • <a href="https://github.com/islammdsohan603">@islammdsohan603</a>
</p>
