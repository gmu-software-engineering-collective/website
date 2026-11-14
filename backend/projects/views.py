from django.http import JsonResponse

from .models import Project


def project_list(request):
    projects = Project.objects.filter(published=True).order_by("-created_at")

    data = []
    for project in projects:
        data.append({
            "title": project.title,
            "slug": project.slug,
            "summary": project.summary,
            "description": project.description,
            "status": project.status,
            "repository_url": project.repository_url,
            "created_at": project.created_at.isoformat(),
            "updated_at": project.updated_at.isoformat(),
        })

    return JsonResponse({"projects": data})
