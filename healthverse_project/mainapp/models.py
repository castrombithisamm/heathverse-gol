from statistics import mode
from turtle import title
from django.db import models
from django.core.validators import FileExtensionValidator
from django.utils.html import mark_safe


# Create your models here.
class Video(models.Model):
    caption = models.CharField(max_length=500)
    video = models.FileField(upload_to="videos/%y")

    def __str__(self):
        return self.caption
    
<<<<<<< Updated upstream

class Articles(models.Model):
    title= models. CharField(max_length=255)
    content= models.TextField(max_length=5000)
    
    def __str__(self):
        return self.title
=======
class Articles(models. Model):
    title= models.CharField(max_length=500)
    body= models. TextField(max_length=2000)
    img=models.FileField(upload_to="banners/", validators=[FileExtensionValidator(['pdf', 'doc', 'svg'])] )

    def __str__(self):
        return self.title
 
    def image_tag(self):
        return mark_safe('<img src="%s" width="20" />' % (self.img.url) )
>>>>>>> Stashed changes
