from core.models import Materias
from rest_framework import viewsets, permissions
from .serializers import MateriasSerializer


class MateriasViewSet(viewsets.ModelViewSet):
    queryset = Materias.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = MateriasSerializer
