from django.shortcuts import render
from django.utils import timezone
from .models import Sales
from django.http import JsonResponse
from django.http import HttpResponse
def sales(request):
    time = timezone.now()
    sales = Sales.objects.all()
    context = {'sales': sales} 
    return render(request, 'sales.html',context)

def get_sales(request):
    if request.method == 'GET':
        # Access the variables sent from JavaScript
        sales = Sales.objects.all().order_by('-date')
        # Process the variables as needed

        # Example: Construct a response
        response_data = {
            'sales': list(sales.values())
        }
        return JsonResponse(response_data)
    else:
        # Handle other HTTP methods if needed
        return JsonResponse({'error': 'Method not allowed.'}, status=405)

