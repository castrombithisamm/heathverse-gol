from django.urls import path, include
from mainapp import views
from django.conf import settings
from django.conf.urls.static import static






urlpatterns = [

    path('tinymce/', include('tinymce.urls')),

    path('', views.index, name="index"),
    path('articles/',views.ArticleList.as_view()),
    path('videos/',views.VideoList.as_view()),
    path('firstaid/',views.FirstaidList.as_view()),
    path('articles/<int:pk>/', views.ArticleDetailView.as_view(), name='article_detail'),
    ]  + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
