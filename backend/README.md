For required files:
    pip install -r requirements.txt

## How to Run

To run the server locally use this command in the backend file:

   "python manage.py runserver"

To test the Health Endpoint do:

    "curl -i http://127.0.0.1:8000/api/health"

The output should return {"status": "ok"} 
