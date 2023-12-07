from rest_framework import serializers
from .models import *

class ReactSerializer(serializers.ModelSerializer):
    class Meta:
        model = Arak
        fields = ['szolgaltatas', 'ar']

class SliderSlideSerializer(serializers.ModelSerializer):
    class Meta:
        model = SliderSlide
        fields = ['title', 'description', 'img']

class ImgCardsSerializer(serializers.ModelSerializer):
    class Meta:
        model = ImgCards
        fields = ['title', 'description', 'img']