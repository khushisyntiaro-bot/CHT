
  # Career Hub Technology Website

  This is a code bundle for Career Hub Technology Website. The original project is available at https://www.figma.com/design/gtNia2PNuBNdFNq35joDon/Career-Hub-Technology-Website.

  ## Running the code

  Run `npm i` to install the dependencies.

  Run `npm run dev` to start the development server.

  ## Form email (Contact + Franchise)

  1) Create a `.env` file (see `.env.example`) and set `SMTP_USER` / `SMTP_PASS`.
  2) Start both servers together with `npm run dev:full` (recommended).

  Or run them separately:
  - `npm run server` (starts on `http://localhost:3001`)
  - `npm run dev` (the Vite dev server proxies `/api` to the backend)
  
