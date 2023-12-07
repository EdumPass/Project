from rest_framework.serializers import ModelSerializer
from ..models import Project



class ProjectListSerializer(ModelSerializer):
    class Meta:
        model = Project
        fields = ('id', 'title','slug','short_description', 'get_image','long_description','youtube_id')

class ProjectDetailSerializer(ModelSerializer):
    class Meta:
        model = Project
        fields = ('id', 'title', 'slug', 'short_description', 'long_description','youtube_id')
