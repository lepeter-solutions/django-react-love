from django.urls import path
from . import views
from django.contrib.staticfiles.urls import staticfiles_urlpatterns

urlpatterns = [
    path('', views.main, name = 'home'),
    path('galganmate/', views.galganmate, name = 'mate')
]



urlpatterns += staticfiles_urlpatterns()