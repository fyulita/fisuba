# Generated by Django 3.1 on 2020-08-08 20:02

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Materias',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombre', models.CharField(max_length=100, unique=True)),
                ('obligatoria', models.BooleanField()),
                ('departamento', models.CharField(choices=[('AT', 'Departamento de Ciencias de la Atmósfera y los Océanos'), ('DC', 'Departamento de Computación'), ('DF', 'Departamento de Física'), ('GL', 'Departamento de Geología'), ('DM', 'Departamento de Matemática'), ('QB', 'Departamento de Química Biológica'), ('QI', 'Departamento de Química Inorgánica, Analítica y Química Física'), ('QO', 'Departamento de Química Orgánica'), ('FBMC', 'Departamento de Fisiología, Biología Molecular y Celular'), ('EGE', 'Departamento de Ecología, Genética y Evolución'), ('DBBE', 'Departamento de Biodiversidad y Biología Experimental'), ('DI', 'Departamento de Industrias')], max_length=4)),
                ('experimental', models.BooleanField()),
            ],
        ),
        migrations.DeleteModel(
            name='Materia',
        ),
    ]