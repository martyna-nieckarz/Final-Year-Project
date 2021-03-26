"""mainapp URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.1/topics/http/urls/
    
"""
from django.contrib import admin
from django.urls import path, include, re_path
from django.shortcuts import render

def render_react(request):
    return render(request, "index.html")

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/auth/', include('users.urls')), # leading to the 'users' app
    path('api/', include('prediction.urls')), # leading to the 'prediction' app
    re_path(r"^$", render_react),
    re_path(r"^(?:.*)/?$", render_react),
]
