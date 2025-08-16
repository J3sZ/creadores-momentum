from .models import Registro
from django.shortcuts import render, redirect

def index(request):
    if request.method == 'POST':
        Registro.objects.create(
            nombre=request.POST.get('name'),
            email=request.POST.get('email'),
            telefono=request.POST.get('phone'),
            mensaje=request.POST.get('message')
        )
        return redirect('index')  # Redirige tras enviar
    return render(request, 'comunicate/index.html')