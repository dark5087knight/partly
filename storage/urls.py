# urls.py
from django.urls import path
from . import views

urlpatterns = [
    path('', views.storage, name='storage'),
    path('get_info/', views.get_info, name='get_info'),
]
