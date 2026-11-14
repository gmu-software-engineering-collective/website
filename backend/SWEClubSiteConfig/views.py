from django.http import HttpResponse
from projects.views import project_list

def health(request):
    return HttpResponse('{"status": "ok"}', content_type="application/json")
