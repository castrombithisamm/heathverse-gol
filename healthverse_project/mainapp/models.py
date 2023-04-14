
from tinymce.models import HTMLField
from statistics import mode
from turtle import title
from django.db import models
from django.core.validators import FileExtensionValidator
from django.utils.html import mark_safe


# Create your models here.
class Video(models.Model):
    caption = models.CharField(max_length=500)
    description = models.CharField(max_length=255, default='No description available')    
    video = models.FileField(upload_to="videos/%y")


    def __str__(self):
        return self.caption
    
class Articles(models. Model):
    id = models.AutoField(primary_key=True)
    title= models.CharField(max_length=500)
    body = HTMLField(max_length=5000) # updated max_length
    img=models.FileField(upload_to="banners/", validators=[FileExtensionValidator(['pdf', 'doc', 'svg'])] )

    def __str__(self):
        return self.title
 
    def image_tag(self):
        return mark_safe('<img src="%s" width="20" />' % (self.img.url) )

class Firstaid(models.Model):
    id = models.AutoField(primary_key=True)
    Title = models.CharField(max_length=500)
    Content = models.TextField(max_length=5000)
    Imageillustration=models.FileField(upload_to="banners/", validators=[FileExtensionValidator(['pdf', 'doc', 'svg'])] )
    
    def __str__(self):
        return self.Title
    def image_tag(self):
        return mark_safe('<img src="%s" width="20" />' % (self.Imageillustration.url) )
