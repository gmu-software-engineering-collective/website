from django.test import TestCase

from .models import Project


class ProjectListTests(TestCase):
    def test_successfulResponse(self):
        response = self.client.get("/api/projects")
        self.assertEqual(response.status_code, 200)

    def test_getPublished(self):
        Project.objects.create(
            title="Visible",
            slug="visible",
            summary="Shown",
            description="Published project",
            published=True,
        )
        Project.objects.create(
            title="Hidden",
            slug="hidden",
            summary="Not shown",
            description="Unpublished project",
            published=False,
        )

        response = self.client.get("/api/projects")
        slugs = [p["slug"] for p in response.json()["projects"]]

        self.assertIn("visible", slugs)
        self.assertNotIn("hidden", slugs)
