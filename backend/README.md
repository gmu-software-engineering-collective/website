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

# Projects API

## 1.  Apply migrations

    python manage.py migrate

# 2.  Create a local admin user

    python manage.py createsuperuser

    Enter a username, an optional email, and a password when prompted. This account exists only in your local database.

# 3. Manage projects in Django Admin

Start the server:

    python manage.py runserver

    Open http://127.0.0.1:8000/admin/, log in, and add a project. A project is only returned by the API when **Published** is checked. It is unchecked by default.

# 4. Get published projects

    curl -i http://127.0.0.1:8000/api/projects

Expected response: `HTTP/1.1 200 OK` with a JSON object containing a `projects` list, newest first. Unpublished projects are not included.

```json
{
  "projects": [
    {
      "title": "Example Project",
      "slug": "example-project",
      "summary": "A short summary.",
      "description": "A longer description.",
      "status": "planning",
      "repository_url": "",
      "created_at": "2026-11-13T12:00:00+00:00",
      "updated_at": "2026-11-13T12:00:00+00:00"
    }
  ]
}
```

The list is wrapped in a `projects` key so more fields can be added later without breaking clients. The route has no trailing slash, so `/api/projects/` returns `404`.

`status` is one of `planning`, `in_progress`, or `completed`.

# 5. Run the tests

    python manage.py test


The tests use a temporary database that Django creates and destroys automatically, so your local data is not affected. If you see `permission denied to create database`, give your PostgreSQL user permission in `psql postgres`:

ALTER USER your_db_user CREATEDB;
