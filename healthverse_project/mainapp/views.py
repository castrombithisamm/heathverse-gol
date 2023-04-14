

from django.shortcuts import render, get_object_or_404
from .models import Articles


from django.shortcuts import render
from . import models
from rest_framework.views import APIView
from rest_framework.response import Response
from django.shortcuts import get_object_or_404
from .serializers import ArticlesSerializer
from .serializers import VideoSerializer
from .serializers import FirstaidSerializer
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

class ArticleList(APIView):
    def get(self,request):
        get_articles=models.Articles.objects.all()
        article_serializer=ArticlesSerializer(get_articles,many=True)
        return Response(article_serializer.data)
    


class ArticleDetailView(APIView):
    def get(self,request,pk):
        get_article=models.Articles.objects.get(pk=pk)
        article_serializer=ArticlesSerializer(get_article)
        return Response(article_serializer.data)
def article_detail(request, pk):
    article = get_object_or_404(Articles, pk=pk)
    return render(request, 'article_detail.html', {'article': article})


class VideoList(APIView):
    def get(self,request):
        get_videos=models.Video.objects.all()
        video_serializer=VideoSerializer(get_videos,many=True)
        return Response(video_serializer.data)

class FirstaidList(APIView):
    def get(self,request):
        get_firstaid=models.Firstaid.objects.all()
        firstaid_serializer=FirstaidSerializer(get_firstaid,many=True)
        return Response(firstaid_serializer.data)
