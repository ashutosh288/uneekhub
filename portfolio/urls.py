from django.contrib import admin
from django.urls import path, include
from . import views

urlpatterns = [
    path('', views.index),
    path('about', views.about),
    path('collections', views.shop),
    path('contact', views.contact),
]
