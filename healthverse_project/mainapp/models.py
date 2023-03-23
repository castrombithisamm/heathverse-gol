from django.db import models

# Create your models here.
class Video(models.Model):
    caption = models.CharField(max_length=500)
    video = models.FileField(upload_to="videos/%y")

    def __str__(self):
        return self.caption