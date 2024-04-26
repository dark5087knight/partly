from django.db import models

# Create your models here.
class Types (models.Model):
    name = models.CharField(max_length=100)
    number = models.IntegerField()
    grap = models.CharField(max_length=100)
    def __str__(self):
        return self.name

class Product(models.Model):
    name = models.CharField(max_length=100)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    number = models.IntegerField()
    company = models.CharField(max_length=100)
    grap = models.CharField(max_length=100)