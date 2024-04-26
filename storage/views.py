# views.py
from django.shortcuts import render
from .models import Types,Product
from django.http import JsonResponse
from django.http import HttpResponse

def storage(request):
    types = Types.objects.all()
    context = {'types': types} 
    return render(request, 'storage.html',context)

def get_info(request):
    if request.method == 'GET':
        # Access the variables sent from JavaScript
        pro_grap = request.GET.get('grap')
        products = Product.objects.filter(grap=pro_grap)
        # Process the variables as needed

        # Example: Construct a response
        response_data = {
            'products': list(products.values())
        }
        return JsonResponse(response_data)
    else:
        # Handle other HTTP methods if needed
        return JsonResponse({'error': 'Method not allowed.'}, status=405)
