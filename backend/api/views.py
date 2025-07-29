from rest_framework import generics

from api.serializers import ProjectsSerializer
from .models import Projects



class ProjectsListAPIView(generics.ListAPIView):
    queryset = Projects.objects.all().order_by('-created_at')
    serializer_class = ProjectsSerializer

