from django.db import models


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
