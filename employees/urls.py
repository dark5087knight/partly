# urls.py
from django.urls import path
from . import views

urlpatterns = [
    path('', views.employees, name='employees'),
    path('your_django_endpoint/', views.your_django_endpoint, name='your_django_endpoint'),
    path('get_employee_info/', views.get_employee_info, name='get_employee_info'),
    path('edit_employ/', views.edit_employ, name='edit_employ'),
    path('delete_employ/', views.delete_employ, name='delete_employ'),
]
