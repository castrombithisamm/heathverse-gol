from django.shortcuts import render
from . import models
# Create your views here.
def index(request):
    videos= models.Video.objects.all()
    return render (request,'index.html', {'videos':videos})

def articles(request):
    article= models.Articles.objects.all()
    return render (request,'index.html', {'article':article})

def firstaidmeasures(request):
    Firstaidmeasures= models.Firstaid.objects.all()
    return render (request,'index.html', {'Firstaidmeasures':Firstaidmeasures})

