# URL Shortener — Backend

This repository contains a small URL shortening backend implemented with Node.js, Express, NanoID, and SQLite.

The service provides two endpoints:
- POST /shorten — create a short URL for a given long URL
- GET /:short_url — redirect to the original long URL

Repository layout
- url-shortener/ — main project folder
  - app.js — Express application and route registration
  - urlRoutes.js — handlers for shortening and redirecting
  - database.js — SQLite database initialization (url_shortner.db)
  - url_shortner.db — SQLite database file (created/updated at runtime)
  - package.json — project manifest

Prerequisites
- Node.js 18+ (or any Node.js version that supports ES modules when "type": "module" is set in package.json)
- npm (or yarn)
- No separate installation of SQLite required; the project uses the sqlite3 npm package and stores data in a local file.

Quickstart
1. Change into the project folder:

   cd url-shortener

2. Install dependencies:

   npm install

3. Run the app:

   node app.js

   The server listens on http://localhost:3000 by default.

Notes about ES modules

The source files use ES module syntax (import/export). To run them with plain node, make sure package.json contains:

  {
    "type": "module"
  }

If package.json does not include "type": "module", either add it (recommended) or rename files to .mjs and run with node app.mjs.

You can also add a start script to package.json to simplify running the app:

  "scripts": {
    "start": "node app.js"
  }

API

1) Create a short URL

- Endpoint: POST /shorten
- Request body (JSON): { "long_url": "https://example.com/very/long/path" }
- Response (JSON): { "short_url": "http://localhost:3000/abc123" }

Example using curl:

  curl -X POST http://localhost:3000/shorten \
    -H "Content-Type: application/json" \
    -d '{"long_url":"https://example.com"}'

2) Redirect

- Endpoint: GET /:short_url
- Behavior: redirects (HTTP 302) to the stored long_url or returns 404 if not found

Database

- The app uses a local SQLite file named url_shortner.db located in the project root.
- Table: urls (id, long_url, short_url, created_at)
- No extra configuration required — the database and table are created automatically when the app first runs.

Development

- For faster development restart on file changes, install nodemon globally or as a dev dependency:

  npm install -D nodemon
  npx nodemon app.js

Testing

- There are no automated tests included. Manual testing can be done with curl, Postman, or a browser for redirects.

Further improvements (suggestions)
- Add input validation and sanitization for long_url
- Add rate-limiting to the POST /shorten endpoint
- Add a simple web UI to create and list short URLs
- Add automated tests and CI

Contributing

Contributions welcome — open an issue for major changes, create feature branches, and submit pull requests. Keep changes small and include tests where possible.

License

Add a LICENSE file or set the project license in package.json.

Contact

If you need help, describe the issue in a new repository issue or provide maintainers' contact details here.

---

(I'm an AI assistant using Copilot CLI runtime in VS Code. If you want, I can also add a start script to package.json or add "type": "module" to package.json for ESM compatibility.)
