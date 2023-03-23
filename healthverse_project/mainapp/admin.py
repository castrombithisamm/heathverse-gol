from django.contrib import admin
from . import models
# Register your models here.
# from .models import Video,Articles
class VideoAdmin(admin.ModelAdmin):
    list_display=('caption','video')
admin.site.register(models.Video, VideoAdmin)

class ArticlesAdmin(admin.ModelAdmin):
    list_display=('title','image_tag')
admin.site.register(models.Articles, ArticlesAdmin)
