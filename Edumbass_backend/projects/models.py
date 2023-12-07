from django.conf import settings
from django.db import models

# Create your models here.

class Project(models.Model):
    title = models.CharField(max_length=300)
    slug = models.SlugField()
    short_description = models.TextField(blank=True, null=True)
    long_description = models.TextField(blank=True, null=True)
    image = models.ImageField(upload_to='uploads', blank=True, null=True)
    youtube_id = models.CharField(max_length=200, blank=True, null=True)


    
    
    def __str__(self):
        return self.title
     

    def get_image(self):
        if self.image:
            return settings.WEBSITE_URL + self.image.url
        else:
            return 'http://bulma.io/images/placeholders/1280x960.png'
