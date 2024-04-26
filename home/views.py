from django.shortcuts import render
from .models import Chart,Cards
from django.http import JsonResponse
from django.http import HttpResponse
from datetime import datetime


def home (request):
    card = Cards.objects.all().last
    context = {'card': card} 
    return render(request , 'home.html',context)

def get_chart (request):
    if request.method == 'GET':
        sales =    [0,0,0,0,0,0,0,0,0,0,0,0,0]
        purchases= [0,0,0,0,0,0,0,0,0,0,0,0,0]
        earning=   [0,0,0,0,0,0,0,0,0,0,0,0,0] 
        i = 1
        charts = Chart.objects.all()
        for chart in charts:
            sales[i] = chart.sales
            purchases[i] = chart.purchases
            earning[i] = chart.earning
            i+=1
        response_data = {
            'sales': sales,
            'purchases': purchases,
            'earning': earning,
            }
        return JsonResponse(response_data)
    else:
        # Handle other HTTP methods if needed
        return JsonResponse({'error': 'Method not allowed.'}, status=405)
    


