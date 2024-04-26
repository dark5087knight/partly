from django.db import models

class Sales(models.Model):
    name = models.CharField(max_length=100)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    number = models.IntegerField()
    date = models.DateTimeField()
    co_number = models.BigIntegerField()
# Create your models here.
