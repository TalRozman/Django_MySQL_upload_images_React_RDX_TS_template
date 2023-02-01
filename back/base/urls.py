from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
    path('Gallery/', views.gallery),
    path('Gallery/<id>', views.gallery),
]
