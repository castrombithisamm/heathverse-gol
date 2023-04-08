from django.urls import path
from mainapp import views
from django.conf import settings
from django.conf.urls.static import static



urlpatterns = [
    path('', views.index, name="index"),
    path('articles/',views.ArticleList.as_view()),
    path('videos/',views.VideoList.as_view()),
    path('firstaid/',views.FirstaidList.as_view()),
]  + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)