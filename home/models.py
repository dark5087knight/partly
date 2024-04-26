from django.db import models

class Chart(models.Model):
    month = models.CharField(max_length=100)
    number = models.IntegerField()
    sales = models.IntegerField(default=0)
    earning = models.IntegerField(default=0)
    purchases = models.IntegerField(default=0)

class Cards(models.Model):
    sales = models.IntegerField(default=0)
    earning = models.IntegerField(default=0)
    customers = models.IntegerField(default=0)
    prouducts = models.IntegerField(default=0)
    day = models.IntegerField()