from django.http import HttpResponse

def health(request):
    return HttpResponse('{"status": "ok"}', content_type="application/json")
