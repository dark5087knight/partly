"""
URL configuration for Partly project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path,include
from storage import views
from sales.views import get_sales
from purchases.views import get_pur
from login.views import log_in
from home.views import get_chart

urlpatterns = [
    path('login/',include('login.urls')),
    path('login/log_in/',log_in),
    path('home',include('home.urls')),
    path('home/get_chart/',get_chart),
    path('purchases',include('purchases.urls')),
    path('purchases/get_pur/',get_pur),
    path('storage',include('storage.urls')),
    path('storage/get_info/',views.get_info),
    path('',include('employees.urls')),
    path('admin/', admin.site.urls),
    path('sales',include('sales.urls')),
    path('sales/get_sales/',get_sales),

]
