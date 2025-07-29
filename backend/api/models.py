from django.db import models

# Create your models here.


class Projects(models.Model):
    PROJECT_TYPE_CHOICE = (
        ('real', 'Real'),
        ('simulated', 'Simulated'),
    )
    title = models.CharField(max_length=100)
    description = models.TextField()
    technologies = models.CharField(max_length=255)
    image = models.ImageField(upload_to='proyectos/', blank=True, null=True)
    link_demo = models.URLField(blank=True, null=True)
    link_repository = models.URLField(blank=True, null=True)
    project_type = models.CharField(max_length=10, choices=PROJECT_TYPE_CHOICE, default='real')
    created_at = models.DateTimeField(auto_now_add=True)   

    def __str__(self):
        return self.title