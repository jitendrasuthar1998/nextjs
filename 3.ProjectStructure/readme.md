# 🧱 Understanding Next.js App Project Structure (with App Router & `src/` directory)

When you create a new Next.js project with the `App Router` and `src/` directory options, the folder structure is modern, organized, and designed for scalability.

This README will help you understand each part of the project.

---

## 📁 Folder Structure Overview

```

my-nextjs-app/
├── public/
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── globals.css
│   ├── styles/
│   └── components/ (optional)
├── .eslintrc.json
├── next.config.js
├── tsconfig.json
├── package.json
└── README.md

```

---

## 🗂️ Folder & File Breakdown

### 1. `public/`

- Static files like images, `favicon.ico`, `robots.txt`, etc.
- Accessible from the root URL. For example, `public/logo.png` becomes `http://localhost:3000/logo.png`

---

### 2. `src/`

This is where the source code for your app lives.

#### ➤ `src/app/`

The core folder when using **App Router**.

- **`page.tsx`**  
  The main route component for `/`. Equivalent to the home page.

- **`layout.tsx`**  
  Defines shared layout (e.g. header, footer, theme, providers). Wraps all child routes.

- **`globals.css`**  
  Used for global CSS styles and imported inside `layout.tsx`.

> 💡 Every folder inside `app/` represents a route. For example, `src/app/about/page.tsx` becomes `/about`.

#### ➤ Nested Routes (Example)

```

src/app/
├── page.tsx               → '/'
├── about/
│   └── page.tsx           → '/about'
├── blog/
│   ├── page.tsx           → '/blog'
│   └── \[slug]/
│       └── page.tsx       → '/blog/\:slug'

````

> ✅ Dynamic routes use square brackets like `[slug]`.

---

### 3. `src/styles/` (optional)

- Store custom CSS/SCSS files if you're not using Tailwind or other utility libraries.

---

### 4. `src/components/` (optional)

- Reusable components like `Header`, `Footer`, `Button`, etc.
- Organize your UI in a scalable and modular way.

---

## 🔧 Configuration Files

### - `.eslintrc.json`

- Configuration for ESLint (code quality and style checks).

### - `next.config.js`

- Customize Next.js behavior (e.g. enabling experimental features, redirects, etc.).

### - `tsconfig.json`

- TypeScript configuration file (auto-generated if you select TypeScript).

---

## 🧪 Scripts in `package.json`

Common scripts you'll use:

```json
"scripts": {
  "dev": "next dev",           // Start dev server
  "build": "next build",       // Build for production
  "start": "next start",       // Start production server
  "lint": "next lint"          // Run ESLint
}
````

---

## 📦 Dependencies

Installed by default:

* `next` – The Next.js framework
* `react` & `react-dom` – Core React libraries
* `typescript`, `@types/react`, etc. – If TypeScript is enabled
* `eslint` – Linting tool (if selected)

---

## 🌐 Routing Summary (App Router)

| Folder Path                           | URL Route             |
| ------------------------------------- | --------------------- |
| `src/app/page.tsx`                    | `/`                   |
| `src/app/about/page.tsx`              | `/about`              |
| `src/app/blog/[slug]/page.tsx`        | `/blog/:slug`         |
| `src/app/dashboard/settings/page.tsx` | `/dashboard/settings` |

---

## 🧠 Summary

* The `app/` directory follows **file-based routing**.
* Every folder in `app/` can represent a route and contain a `page.tsx` or `layout.tsx`.
* `layout.tsx` allows consistent layout across nested routes.
* Static assets go inside `public/`.
* Reusable components and styles can be organized inside `src/components/` and `src/styles/`.

---

## 📚 Resources

* [Next.js Documentation – App Router](https://nextjs.org/docs/app)
* [Routing Fundamentals](https://nextjs.org/docs/app/building-your-application/routing)

---

Happy Hacking with Next.js! 💻🚀
