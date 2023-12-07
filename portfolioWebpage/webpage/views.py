from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.
from rest_framework.views import APIView

from . models import *
from . serializer import * 
from rest_framework.response import Response
from rest_framework import status

class ReactView(APIView):
    def get(self, request):
        output = [ {"szolgaltatas": output.szolgaltatas.megnevezes, "arak": output.ar} for output in Arak.objects.all()]
        return Response(output)
    def post(self, request):
        serializerLocal = ReactSerializer(data=request.data)
        if serializerLocal.is_valid(raise_exception=True):
            serializerLocal.save()
            return Response(serializerLocal.data, status=status.HTTP_200_OK)
        
class SliderSlideView(APIView):
    def get(self, request):
        posts = SliderSlide.objects.all()
        serializer = SliderSlideSerializer(posts, many=True)
        return Response(serializer.data)
    def post(self, request):
        serializerLocal = SliderSlideSerializer(data=request.data)
        if serializerLocal.is_valid(raise_exception=True):
            serializerLocal.save()
            return Response(serializerLocal.data, status=status.HTTP_200_OK)
        
class ImgCardsView(APIView):
    def get(self, request):
        posts = ImgCards.objects.all()
        serializer = ImgCardsSerializer(posts, many=True)
        return Response(serializer.data)
    def post(self, request):
        serializerLocal = ImgCardsSerializer(data=request.data)
        if serializerLocal.is_valid(raise_exception=True):
            serializerLocal.save()
            return Response(serializerLocal.data, status=status.HTTP_200_OK)