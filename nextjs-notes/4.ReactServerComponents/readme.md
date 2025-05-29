# ⚙️ React Server Components (RSC) in Next.js

React Server Components (RSC) introduce a powerful new architecture that enhances performance and developer experience by splitting components into two distinct types:

- **Server Components**
- **Client Components**

Next.js adopted this architecture early, allowing developers to seamlessly blend server and client logic in their applications.

---

## 📌 What Are React Server Components?

React Server Components enable rendering parts of your UI on the server, sending serialized HTML and data to the client with reduced JavaScript bundle sizes. This results in:

- Faster initial page loads
- Less client-side JavaScript
- Improved performance

---

## 🖥️ Server Components

✅ **Default behavior in Next.js**

- Every component is treated as a **Server Component** by default.
- Server components can:
  - Fetch data directly from a database
  - Read files from the filesystem
  - Perform server-side logic

🚫 **Limitations:**

- Cannot use React **hooks** like `useState`, `useEffect`, etc.
- Cannot handle **user interactions** directly (e.g., button clicks).

```tsx
// This is a Server Component (default)
export default async function ServerComponent() {
  const data = await fetchDataFromDB();

  return (
    <div>
      <h1>Data from Server</h1>
      <p>{data}</p>
    </div>
  );
}
````

---

## 🧠 Client Components

✅ To make a component a **Client Component**, you must include the `"use client"` directive at the very top of the file.

* Client components can:

  * Use **React hooks**
  * Handle **user interactions** (e.g., onClick events)
  * Maintain **local state**

🚫 **Limitations:**

* Cannot perform server-side operations like database access or file reading.

```tsx
// This is a Client Component
'use client';

import { useState } from 'react';

export default function ClientComponent() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      Clicked {count} times
    </button>
  );
}
```

---

## 🧩 When to Use What?

| Feature/Task                | Server Component | Client Component |
| --------------------------- | ---------------- | ---------------- |
| Fetch data from DB          | ✅ Yes            | ❌ No             |
| Use `useState`, `useEffect` | ❌ No             | ✅ Yes            |
| Handle button clicks        | ❌ No             | ✅ Yes            |
| Reduce JS bundle size       | ✅ Yes            | ❌ No             |

---

## 🛠 Best Practices

* Keep most of your logic in **Server Components** for better performance.
* Use **Client Components** only when needed (for interactions or state).
* Break your UI into a mix of server and client parts where appropriate.

---

## 📚 Resources

* [React Server Components – Official RFC](https://github.com/reactjs/rfcs/pull/188)
* [Next.js – App Router & Server Components](https://nextjs.org/docs/app/building-your-application/rendering/server-components)

---

React Server Components mark a shift in how we think about building modern React apps. By using them effectively, you can build apps that are faster and more scalable out of the box with Next.js.

