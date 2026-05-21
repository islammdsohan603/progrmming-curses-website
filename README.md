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

**EduBangli** is a full-featured, Bengali-language online education platform that offers project-based tech courses, live mentorship, and career preparation support. Built with modern web technologies, it provides a premium learning experience with live classes, real-world project assignments, code reviews, and career guidance — all in Bangla.

---

## ✨ Features

### 🏠 Landing Page
- Hero banner with animated stats (12K+ learners, 48+ courses, 4.9/5 rating)
- Course search functionality
- Career track categories (Web Dev, MERN Stack, UI/UX Design, Programming Basics)
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
- Learning progress stats (running courses, completed, learning hours, certificates)
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

## Live Demo: https://programing-curors.vercel.app


## 🛠️ Tech Stack

| Layer              | Technology                                                              |
| ------------------ | ----------------------------------------------------------------------- |
| **Framework**      | [Next.js 16](https://nextjs.org/) (App Router)                         |
| **UI Library**     | [React 19](https://react.dev/)                                         |
| **Styling**        | [Tailwind CSS 4](https://tailwindcss.com/) + [DaisyUI 5](https://daisyui.com/) |
| **UI Components**  | [HeroUI](https://heroui.com/)                                          |
| **Animations**     | [Framer Motion](https://motion.dev/)                                   |
| **Icons**          | [Lucide React](https://lucide.dev/) + [Radix Icons](https://icons.radix-ui.com/) |
| **Authentication** | [Better Auth](https://www.better-auth.com/) (Email + Google OAuth)     |
| **Database**       | [MongoDB Atlas](https://www.mongodb.com/atlas)                         |
| **Fonts**          | [Geist](https://vercel.com/font) (Sans + Mono)                        |
| **Notifications**  | [React Toastify](https://fkhadra.github.io/react-toastify/)           |
| **Deployment**     | [Vercel](https://vercel.com/)                                          |
| **Compiler**       | [React Compiler](https://react.dev/learn/react-compiler) (enabled)     |

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** ≥ 18.x
- **npm** ≥ 9.x (or yarn / pnpm / bun)
- **MongoDB Atlas** account (or local MongoDB instance)
- **Google Cloud Console** project (for OAuth)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/islammdsohan603/progrmming-curses-website.git
   cd progrmming-curses-website/client-side
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**

   Create a `.env` file in the root directory (see [Environment Variables](#environment-variables)):

   ```bash
   cp .env.example .env
   ```

4. **Run the development server**

   ```bash
   npm run dev
   ```

5. **Open in browser**

   Navigate to [http://localhost:3000](http://localhost:3000)

---

## 📁 Project Structure

```
client-side/
├── public/                     # Static assets
│   ├── banner.jpg              # Hero banner image
│   ├── dashboard.png           # Dashboard illustration
│   └── *.svg                   # Icons & logos
│
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── (auth)/             # Auth route group
│   │   │   ├── login/          # Login page
│   │   │   └── signup/         # Signup page
│   │   ├── api/                # API routes
│   │   │   └── auth/           # Better Auth API handler
│   │   ├── blog/               # Blog page
│   │   ├── checkout/           # Checkout/payment page
│   │   ├── courses/            # Courses catalog page
│   │   ├── details/            # Course details page
│   │   ├── mentors/            # Mentors page
│   │   ├── profile/            # User profile/dashboard
│   │   ├── globals.css         # Global styles
│   │   ├── layout.js           # Root layout (Navbar + Footer)
│   │   └── page.js             # Home page
│   │
│   ├── comonentes/             # Reusable UI components
│   │   ├── AddtoButtons.jsx    # Add-to-cart/wishlist buttons
│   │   ├── Coursescontainer.jsx# Course listing container
│   │   ├── CursorCard.jsx      # Course card component
│   │   ├── Dashboard.jsx       # Full dashboard with tabs
│   │   ├── Footer.jsx          # Site footer
│   │   ├── MobailMenu.jsx      # Mobile navigation menu
│   │   ├── NavLink.jsx         # Navigation link component
│   │   ├── Navbar.jsx          # Main navigation bar
│   │   ├── OrderButton.jsx     # Order/purchase button
│   │   └── SosailLoginButton.jsx # Social login buttons
│   │
│   ├── db/
│   │   └── data.js             # Data fetching utilities
│   │
│   └── lib/
│       ├── auth.js             # Better Auth server config
│       └── auth-client.js      # Better Auth client config
│
├── .env                        # Environment variables (not committed)
├── .gitignore                  # Git ignore rules
├── eslint.config.mjs           # ESLint configuration
├── jsconfig.json               # JS path aliases (@/)
├── next.config.mjs             # Next.js configuration
├── package.json                # Dependencies & scripts
└── postcss.config.mjs          # PostCSS configuration
```

---

## 🔑 Environment Variables

Create a `.env` file in the project root with the following variables:

```env
# ─── Better Auth ───────────────────────────────────────
BETTER_AUTH_SECRET=your_random_secret_key_here
BETTER_AUTH_URL=http://localhost:3000
NEXT_PUBLIC_BETTER_AUTH_URL=http://localhost:3000

# ─── MongoDB ───────────────────────────────────────────
MONGO_URI=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/?retryWrites=true&w=majority

# ─── Google OAuth ──────────────────────────────────────
GOOGLE_CLIENT_ID=your_google_client_id.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=your_google_client_secret

# ─── Backend API ───────────────────────────────────────
NEXT_PUBLIC_SERVER_URL=https://your-backend-server.vercel.app
```

> **⚠️ Important:** Never commit your `.env` file to version control. It is already included in `.gitignore`.

---

## 📜 Available Scripts

| Command          | Description                              |
| ---------------- | ---------------------------------------- |
| `npm run dev`    | Start development server on `localhost:3000` |
| `npm run build`  | Create optimized production build        |
| `npm run start`  | Start production server                  |
| `npm run lint`   | Run ESLint for code quality checks       |

---

## 🌐 Deployment

This project is deployed on **Vercel** with a separate backend server.

> **🔗 Live Production URL:** [https://programing-curors.vercel.app](https://programing-curors.vercel.app)

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
- **Color Palette:** Slate-based neutrals with Blue, Emerald, Amber, and Rose accents
- **Components:** DaisyUI + HeroUI component library
- **Layout:** Responsive grid system (mobile-first)
- **Effects:** Glassmorphism navbar, hover animations, smooth transitions
- **Language:** Bengali (bn) as primary language with English for technical terms

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
