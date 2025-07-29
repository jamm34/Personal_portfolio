from django.urls import path
from .views import ProjectsListAPIView


urlpatterns = [
    path('projects/', ProjectsListAPIView.as_view(), name='project-list'),
]