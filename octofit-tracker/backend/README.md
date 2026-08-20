# OctoFit Tracker API

The logic tier is an Express and TypeScript API backed by MongoDB.

## Run

```bash
npm install
npm run dev

To reset and populate the local database with test data, run:

```bash
npm run seed
```

The seed script clears the five application collections before inserting linked sample records.
```

The API listens on port `8000`. Set `MONGODB_URI` to override the default `mongodb://localhost:27017/octofit_db` connection. In Codespaces, `GET /api/config/` returns the public API URL derived from `CODESPACE_NAME`.
- `GET` and `POST` `/api/workouts/`
- `GET` `/api/health/`
- `GET` `/api/config/`
