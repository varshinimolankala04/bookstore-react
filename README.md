📚 Book Store — React Version

A full rebuild of the Book Store website using React, turning the original static multi-page HTML/CSS/JS site into a single-page application with reusable components and live state-driven interactivity.

✨ Features

- Four pages (Home, Books, Events, Contacts) rendered through client-side page switching — no full page reloads
- Reusable `BookCard` and `EventCard` components, driven entirely by props
- Live book search/filter on the Books page using component state
- Contact form validation (checks for empty name and valid email) built with React state and conditional rendering
- Styled navbar with active page switching
- Fully responsive, dark-themed card layout matching the original site's design

🛠️ Technologies Used

- React (with Hooks: `useState`)
- Vite (build tool)
- TypeScript (`.tsx`)
- CSS3

📁 Project Structure

bookstore-react/
|── index.html
|── package.json
|── tsconfig.json
|── vite.config.ts
|── src/
|    |── App.tsx
|    |── App.css
|    |── main.tsx
|    |── index.css

🚀 How to Run Locally

1. Clone this repository.
2. Run `npm install` to install dependencies.
3. Run `npm run dev` to start a local development server.
4. Open the local URL shown in the terminal to view the app.

To build a production-ready version:
```
npm run build
```
This generates a `docs` folder containing the static, deployable site (used for GitHub Pages hosting).

📸 Preview

A single-page React application recreating the full Book Store experience — browsing books with live search, viewing upcoming events, and submitting a validated contact form — all within one seamless app.

👩‍💻 Author

Varshini Molankala 

⭐ If you like this project, consider giving it a star on GitHub!
