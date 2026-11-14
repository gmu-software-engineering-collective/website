Django backend for the SEC website. It connects to a local PostgreSQL database and provides `GET /api/health`, which confirms the application is running.

All commands below are run from the `backend/` directory unless noted otherwise.

## Prerequisites

- Python 3.14 (check with `python3.14 --version`)
- PostgreSQL 18 (installed locally)
- Git

## 1. Install and start PostgreSQL

    brew install postgresql@18
    brew services start postgresql@18

## 2. Create a development database and user

Open a PostgreSQL shell:

    psql postgres

Run the following SQL statements, replacing the placeholders with your own values. 

    CREATE USER your_db_user WITH PASSWORD 'your-local-password';
    CREATE DATABASE your_db_name OWNER your_db_user;
    \q

## 3. Set up the Python environment

    cd backend
    python3.14 -m venv .venv
    source .venv/bin/activate
    pip install -r requirements.txt

## 4. Configure environment variables

Copy the example file and fill in your own values:

    cp .env.example .env

The file will look like this

     
    ```
    DJANGO_SECRET_KEY=your-secret-key-here
    POSTGRES_DB=your-database-name
    POSTGRES_USER=your-database-user
    POSTGRES_PASSWORD=your-database-password
    POSTGRES_HOST=localhost
    POSTGRES_PORT=5432
    ```

## 5. Run migrations

    python manage.py migrate

## 6. Run the server

    python manage.py runserver

## 7. Verify the health endpoint

With the server running, open a second terminal and run:

    curl -i http://127.0.0.1:8000/api/health

Expected response:

    ```
    HTTP/1.1 200 OK
    Content-Type: application/json

    {"status": "ok"}
    ```

## Run tests

    python manage.py test

## Backend CI

A GitHub Actions workflow (`.github/workflows/backend-ci.yml`) automatically checks the Django backend. It runs on pull requests targeting `main` when files in `backend/` (or the workflow file itself) change.

The check does four things, in order:

1. Sets up Python 3.14.
2. Installs dependencies from `requirements.txt`.
3. Runs `python manage.py check` to catch configuration problems.
4. Runs `python manage.py test` to run the test suite.

### Why it uses a temporary database

The Django tests need a real PostgreSQL database. The workflow starts a throwaway PostgreSQL container for each run and waits for its health check to pass before the tests begin. The database is deleted when the job ends, so tests never touch real data and don't depend on anyone's local setup.

The database and Django settings in the workflow are test-only placeholder values. No real passwords, secret keys, or GitHub secrets are used.

### Viewing results and failure logs

1. Open your pull request and go to the **Checks** tab.
2. Select the **Backend CI** workflow.
3. If a step failed, click it to expand its log and read the error.

Fix the problem, push again, and the check re-runs automatically.
