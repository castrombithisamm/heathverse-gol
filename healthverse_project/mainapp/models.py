from django.db import models

# Create your models here.
class Video(models.Model):
    caption = models.CharField(max_length=500)
    video = models.FileField(upload_to="videos/%y")

    def __str__(self):
        return self.caption
    

class Articles(models.Model):
    title= models. CharField(max_length=255)
    content= models.TextField(max_length=5000)
    
    def __str__(self):
        return self.title
