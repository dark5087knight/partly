from django.db import models

# Create your models here.
class Employee (models.Model):
    name = models.CharField( max_length=50)
    number = models.CharField(max_length=50)
    email = models.CharField( max_length=50)
    address = models.CharField( max_length=50)
    job = models.CharField( max_length=50)
    hire = models.CharField( max_length=50)
