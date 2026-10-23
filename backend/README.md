For a clean workspace run in a venv:

    Python -m venv .vevn

For required files:

    pip install -r requirements.txt

## How to Run with the Tester 

From the ./backend folder run:

    python manage.py test

The response should be "ok" 
## How to Run Manually 

To run the server locally use this command in the backend file:

   "python manage.py runserver"

To test the Health Endpoint do:

    "curl -i http://127.0.0.1:8000/api/health"

The response should be {"status": "ok"} 
