

from rest_framework.viewsets import ModelViewSet
from ..models import Project
from .serializers import ProjectListSerializer, ProjectDetailSerializer

class ProjectViewSet(ModelViewSet):
    queryset = Project.objects.all()

    def get_serializer_class(self):
        if self.action == 'list':
            return ProjectListSerializer
        elif self.action == 'retrieve':
            return ProjectDetailSerializer
        return ProjectListSerializer  