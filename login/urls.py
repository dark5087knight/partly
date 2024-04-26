# urls.py
from django.urls import path
from . import views

urlpatterns = [
    path('', views.login, name='login'),
    path('log_in', views.log_in, name='log_in'),

]