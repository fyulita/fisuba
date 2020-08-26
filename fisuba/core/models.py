from django.db import models
from django.core.validators import MaxValueValidator, MinValueValidator


class Materias(models.Model):
    DEPARTAMENTO_CHOICES = [
        ("AT", "Departamento de Ciencias de la Atmósfera y los Océanos"),
        ("DC", "Departamento de Computación"),
        ("DF", "Departamento de Física"),
        ("GL", "Departamento de Geología"),
        ("DM", "Departamento de Matemática"),
        ("QB", "Departamento de Química Biológica"),
        ("QI", "Departamento de Química Inorgánica, Analítica y Química Física"),
        ("QO", "Departamento de Química Orgánica"),
        ("FBMC", "Departamento de Fisiología, Biología Molecular y Celular"),
        ("EGE", "Departamento de Ecología, Genética y Evolución"),
        ("DBBE", "Departamento de Biodiversidad y Biología Experimental"),
        ("DI", "Departamento de Industrias")
    ]

    nombre = models.CharField(max_length=100, unique=True)
    obligatoria = models.BooleanField()
    departamento = models.CharField(max_length=4, choices=DEPARTAMENTO_CHOICES)
    experimental = models.BooleanField()

    def __str__(self):
        return self.nombre


class Guias(models.Model):
    CUATRIMESTRE_OPTIONS = [
        (0, "Verano"),
        (1, "Primer Cuatrimestre"),
        (2, "Segundo Cuatrimestre")
    ]

    materia = models.ForeignKey(Materias, on_delete=models.CASCADE)
    nombre = models.CharField(max_length=100, blank=True)
    numero = models.IntegerField(validators=[MinValueValidator(0), MaxValueValidator(20)])
    anio = models.IntegerField(validators=[MinValueValidator(2010), MaxValueValidator(2050)])
    cuatrimestre = models.IntegerField(choices=CUATRIMESTRE_OPTIONS)

    def __str__(self):
        return self.nombre


class Examenes(models.Model):
    CUATRIMESTRE_OPTIONS = [
        (0, "Verano"),
        (1, "Primer Cuatrimestre"),
        (2, "Segundo Cuatrimestre")
    ]

    TIPO_OPTIONS = [
        ("P1", "Primer Parcial"),
        ("P2", "Segundo Parcial"),
        ("R1", "Primer Recuperatorio"),
        ("R2", "Segundo Recuperatorio"),
        ("F", "Final"),
        ("O", "Otro")
    ]

    materia = models.ForeignKey(Materias, on_delete=models.CASCADE)
    tipo = models.CharField(max_length=2, choices=TIPO_OPTIONS)
    anio = models.IntegerField(validators=[MinValueValidator(2010), MaxValueValidator(2050)])
    cuatrimestre = models.IntegerField(choices=CUATRIMESTRE_OPTIONS)

    def __str__(self):
        return (str(self.anio) + ' ' + str(self.cuatrimestre))


class EjerciciosGuias(models.Model):
    guia = models.ForeignKey(Guias, on_delete=models.CASCADE)
    numero = models.IntegerField(validators=[MinValueValidator(0), MaxValueValidator(100)])
    inciso = models.CharField(max_length=10, blank=True)


class EjerciciosExamenes(models.Model):
    examen = models.ForeignKey(Examenes, on_delete=models.CASCADE)
    numero = models.IntegerField(validators=[MinValueValidator(0), MaxValueValidator(100)])
    inciso = models.CharField(max_length=10, blank=True)
