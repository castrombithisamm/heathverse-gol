from django.shortcuts import render
from . import models

# Create your views here.

def  index(request):
    videos=models.Video.objects.all()
    return render(request, 'index.html', {'banners':videos})