from core.models import Materias, Guias, Examenes, EjerciciosGuias, EjerciciosExamenes
from rest_framework import viewsets, permissions
from .serializers import MateriasSerializer, GuiasSerializer, ExamenesSerializer, EjerciciosGuiasSerializer, EjerciciosExamenesSerializer


class MateriasViewSet(viewsets.ModelViewSet):
    queryset = Materias.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = MateriasSerializer


class GuiasViewSet(viewsets.ModelViewSet):
    queryset = Guias.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = GuiasSerializer


class ExamenesViewSet(viewsets.ModelViewSet):
    queryset = Examenes.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = ExamenesSerializer


class EjerciciosGuiasViewSet(viewsets.ModelViewSet):
    queryset = EjerciciosGuias.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = EjerciciosGuiasSerializer


class EjerciciosExamenesViewSet(viewsets.ModelViewSet):
    queryset = EjerciciosExamenes.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = EjerciciosExamenesSerializer
