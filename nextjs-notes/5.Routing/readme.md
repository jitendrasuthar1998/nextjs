# 🧭 Routing in Next.js

Next.js provides a **file-system based routing** mechanism, which makes creating routes intuitive and simple. Your app’s URL structure is directly tied to the organization of files and folders inside the `app` directory.

---

## 📂 How Routing Works

- Next.js automatically maps files inside the `app` directory to corresponding routes.
- The structure of your folders and filenames directly reflects the URL path.

---

## 🔑 Routing Conventions

To enable routing in Next.js using the App Router:

1. All route-related files **must live inside the `app` folder**.
2. Each route **must include a `page.js` or `page.tsx`** file.
3. Every folder under `app/` **represents a segment of the URL path**.

> ✅ When these conventions are followed, each file becomes an accessible route automatically — no need to configure routing manually.

---

## 🏠 Scenario 1: Create a Home Page (`/`)

To show a page at `http://localhost:3000`:

### ✅ Steps:

1. Inside the `app/` directory, create a file named `page.tsx`.
2. Add a React component and export it as default.

```tsx
// app/page.tsx

export default function HomePage() {
  return (
    <main>
      <h1>Welcome to the Home Page!</h1>
    </main>
  );
}
````

✅ Now visiting `/` in your browser will load this component.

---

## 📄 Scenario 2: Create Additional Routes (`/about` and `/profile`)

### 🔹 `/about`

1. Inside the `app/` folder, create a new folder named `about`.
2. In `app/about/`, create a `page.tsx` file.

```tsx
// app/about/page.tsx

export default function AboutPage() {
  return (
    <main>
      <h1>About Us</h1>
    </main>
  );
}
```

Visiting `/about` in your browser now renders this page.

---

### 🔸 `/profile`

1. Inside `app/`, create a new folder named `profile`.
2. In `app/profile/`, create a `page.tsx` file.

```tsx
// app/profile/page.tsx

export default function ProfilePage() {
  return (
    <main>
      <h1>Profile Page</h1>
    </main>
  );
}
```

Now visiting `/profile` in your browser will render this page.

---

## 🧩 Recap: Route Structure Summary

| File Path                    | URL Route        |
| ---------------------------- | ---------------- |
| `app/page.tsx`               | `/`              |
| `app/about/page.tsx`         | `/about`         |
| `app/profile/page.tsx`       | `/profile`       |

---

## 📘 Learn More

* [Next.js Routing Docs](https://nextjs.org/docs/app/building-your-application/routing)

With file-based routing, building clean and scalable navigation is easier than ever with Next.js!
