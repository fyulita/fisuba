from django.shortcuts import render
from core.models import Materias


def index(request):
    return render(request, 'index.html')


def about(request):
    return render(request, 'about.html')


def materia(request, pk):
    materia = Materias.objects.get(id=pk)

    context = {
        'materia': materia
    }

    return render(request, 'materia.html', context)
