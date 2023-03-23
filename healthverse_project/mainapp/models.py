from django.db import models

# Create your models here.
class Video(models.Model):
    caption = models.CharField(max_length=500)
    description = models.CharField(max_length=255, default='No description available')    
    video = models.FileField(upload_to="videos/%y")


    def __str__(self):
        return self.caption