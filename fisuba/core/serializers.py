from rest_framework import serializers
from core.models import Materias, Guias, Examenes, EjerciciosGuias, EjerciciosExamenes


class MateriasSerializer(serializers.ModelSerializer):
    class Meta:
        model = Materias
        fields = '__all__'


class GuiasSerializer(serializers.ModelSerializer):
    class Meta:
        model = Guias
        fields = '__all__'


class ExamenesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Examenes
        fields = '__all__'


class EjerciciosGuiasSerializer(serializers.ModelSerializer):
    class Meta:
        model = EjerciciosGuias
        fields = '__all__'


class EjerciciosExamenesSerializer(serializers.ModelSerializer):
    class Meta:
        model = EjerciciosExamenes
        fields = '__all__'
