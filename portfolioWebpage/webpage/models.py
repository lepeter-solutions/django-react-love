from django.db import models

# Create your models here.


class Szolgatatasok(models.Model):
    megnevezes = models.CharField(max_length=100)
    leiras = models.CharField(max_length=200)
    def __str__(self):
        return f"{self.megnevezes}"

class Arak(models.Model):
    szolgaltatas = models.ForeignKey(Szolgatatasok, on_delete=models.CASCADE)
    ar = models.CharField(max_length=100)
    def __str__(self):
        return f"{self.szolgaltatas,self.ar}"


class SliderSlide(models.Model):
    title = models.CharField(max_length=50)
    description = models.CharField(max_length=200)
    img = models.ImageField(upload_to='images/')
    def __str__(self):
        return f"{self.title,self.description}"