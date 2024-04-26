from django.shortcuts import render, redirect
from .models import User
from django.contrib import messages
from django.http import JsonResponse

def login(request):
    return render(request, 'login.html')

def log_in(request):
    if request.method == 'GET':
        username = request.GET.get('username')
        password = request.GET.get('password')
        log = 5
        try:
            user = User.objects.get(username=username, password=password)
        except User.DoesNotExist:
            user = None
        try:
            user = User.objects.get(username=username, password=password)
        except User.DoesNotExist:
            user = None

        if user is not None:
            log = 1
            id = user.id  # Render the home page or redirect to another URL
        else:
           log = 0 
           id = None
        if log == 1:
            response_data = {
                'log': log,
                'id': id,
                'number': user.username,
                'email': user.email,
            }
        else:
            response_data = {
                'log': log,
            }

        return JsonResponse(response_data)
    else:
        # Return an error response if the method is not allowed
        return JsonResponse({'error': 'Method not allowed.'}, status=405)
