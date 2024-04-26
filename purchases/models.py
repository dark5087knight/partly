from django.db import models

class Date(models.Model):
    price = models.DecimalField(max_digits=10, decimal_places=2)
    number = models.IntegerField()
    sourcs = models.CharField(max_length=100)
    date = models.DateTimeField()
    pr_number = models.BigIntegerField()
# Create your models here.

class Purchases(models.Model):
    name = models.CharField(max_length=100)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    number = models.IntegerField()
    company = models.CharField(max_length=100)
    pr_number = models.CharField(max_length=100)