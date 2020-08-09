from rest_framework import serializers
from core.models import Materias


class MateriasSerializer(serializers.ModelSerializer):
    class Meta:
        model = Materias
        fields = '__all__'
