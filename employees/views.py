# views.py
from django.shortcuts import render,redirect
from .models import Employee
from django.http import JsonResponse
from django.http import HttpResponse

def employees(request):
    employees = Employee.objects.all()
    context = {'employees': employees} 
    return render(request, 'employees.html', context)



def your_django_endpoint(request):
    if request.method == 'GET':
        # Access the variables sent from JavaScript
        nameIN = request.GET.get('name')
        numberIN =request.GET.get('number')
        emailIN  =request.GET.get('email')
        addressIN =request.GET.get('address')
        jobIN =request.GET.get('job')
        hireIN =request.GET.get('hire')
        employee = Employee.objects.create(name = nameIN, number=numberIN,email=emailIN,address=addressIN,job=jobIN,hire=hireIN)
        # Process the variables as needed
        allEmployees = Employee.objects.all()
        # Example: Construct a response
        response_data = {
            'id': employee.id,
            'name': employee.name,
            'number': employee.number,
            'email': employee.email,
            'address': employee.address,
            'job': employee.job,
            'hire': employee.hire,
            'allEmployees': list(allEmployees.values()),
            # You can add more data to be sent back to JavaScript
        }
        return JsonResponse(response_data)
    else:
        # Handle other HTTP methods if needed
        return JsonResponse({'error': 'Method not allowed.'}, status=405)


def get_employee_info(request):
    if request.method == 'GET':
        # Access the variables sent from JavaScript
        employee_id = request.GET.get('id')
        employee = Employee.objects.get(id=employee_id)
        # Process the variables as needed

        # Example: Construct a response
        response_data = {
            'id': employee.id,
            'name': employee.name,
            'number': employee.number,
            'email': employee.email,
            'address': employee.address,
            'job': employee.job,
            'hire': employee.hire,
            # You can add more data to be sent back to JavaScript
        }
        return JsonResponse(response_data)
    else:
        # Handle other HTTP methods if needed
        return JsonResponse({'error': 'Method not allowed.'}, status=405)

def edit_employ(request):
    if request.method == 'GET':
        # Access the variables sent from JavaScript
        employee_id = request.GET.get('id')
        employee_name = request.GET.get('name')
        employee_number = request.GET.get('number')
        print(employee_number)
        employee_email = request.GET.get('email')
        employee_address = request.GET.get('address')
        employee_job = request.GET.get('job')
        employee_hire = request.GET.get('hire')
        employee = Employee.objects.get(id=employee_id)
        # Process the variables as needed
        employee.name = employee_name
        employee.number = employee_number
        employee.email = employee_email
        employee.address = employee_address
        employee.job = employee_job
        employee.hire = employee_hire
        employee.save()
        allEmployees = Employee.objects.all()

        # Example: Construct a response
        response_data = {
            'id': employee.id,
            'name': employee.name,
            'number': employee.number,
            'email': employee.email,
            'address': employee.address,
            'job': employee.job,
            'hire': employee.hire,
            'allEmployees': list(allEmployees.values()),
            # You can add more data to be sent back to JavaScript
        }
        return JsonResponse(response_data)
    else:
        # Handle other HTTP methods if needed
        return JsonResponse({'error': 'Method not allowed.'}, status=405)


def delete_employ(request):
    if request.method == 'GET':
        # Access the variables sent from JavaScript
        employee_id = request.GET.get('id')
        employee = Employee.objects.get(id=employee_id)
        employee.delete()
        allEmployees = Employee.objects.all()
        # Process the variables as needed

        # Example: Construct a response
        response_data = {
            'allEmployees': list(allEmployees.values()),
            # You can add more data to be sent back to JavaScript
        }
        return JsonResponse(response_data)
    else:
        # Handle other HTTP methods if needed
        return JsonResponse({'error': 'Method not allowed.'}, status=405)
