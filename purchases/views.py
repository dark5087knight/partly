# views.py
from django.shortcuts import render
from django.utils import timezone
from .models import Date,Purchases
from django.http import JsonResponse
from django.http import HttpResponse

def purchases(request):
    time = timezone.now()
    dates = Date.objects.all().order_by('-date')
    context = {'dates': dates} 
    return render(request, 'purchases.html',context)

def get_pur(request):
    if request.method == 'GET':
        # Access the variables sent from JavaScript
        pr_grap = request.GET.get('grap')
        purchases = Purchases.objects.filter(pr_number=pr_grap)
        # Process the variables as needed

        # Example: Construct a response
        response_data = {
            'purchases': list(purchases.values())
        }
        return JsonResponse(response_data)
    else:
        # Handle other HTTP methods if needed
        return JsonResponse({'error': 'Method not allowed.'}, status=405)
