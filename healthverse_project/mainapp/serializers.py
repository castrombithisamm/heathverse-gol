from rest_framework import serializers
from . import models
class ArticlesSerializer(serializers.ModelSerializer):
    # fields = serializers.DictField(child=serializers.CharField())
    class Meta:
        model= models.Articles
        fields= '__all__'

class VideoSerializer(serializers.ModelSerializer):
    # fields = serializers.DictField(child=serializers.CharField())
    class Meta:
        model= models.Video
        fields= '__all__'

class FirstaidSerializer(serializers.ModelSerializer):
    # fields = serializers.DictField(child=serializers.CharField())
    class Meta:
        model= models.Firstaid
        fields= '__all__'