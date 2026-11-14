from django.db import models


class Project(models.Model):
    class Status(models.TextChoices):
        PLANNING = "planning", "Planning"
        IN_PROGRESS = "in_progress", "In progress"
        COMPLETED = "completed", "Completed"

    title = models.CharField(max_length=200)
    slug = models.SlugField(unique=True)
    summary = models.CharField(max_length=300)
    description = models.TextField()
    status = models.CharField(
        max_length=20,
        choices=Status.choices,
        default=Status.PLANNING,
    )

    repository_url = models.URLField(blank=True)
    published = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ["-created_at"]

    def __str__(self):
        return self.title
