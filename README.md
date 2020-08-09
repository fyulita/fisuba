# FISUBA
### (En construcción)

Página web con material de la carrera de Lic. en Ciencias Físicas de la Universidad de Buenos Aires.

- [Board de Trello](https://trello.com/b/bifiKAUS/fisuba)

## Instalación

1. Clonamos el repositorio de GitHub:

```
git clone https://github.com/fyulita/fisuba.git
cd fisuba
```

2. Instalamos dependencias (Asegurarse de tener Python >=2.8 instalado):

```
pip install pipenv
pipenv shell
pipenv install
```

3. Corremos la página (Asegurarse de tener los puertos 8000 y 5432 disponibles):

```
cd fisuba
python manage.py migrate
python manage.py runserver
```

Luego de ejecutar este último comando van a poder visitar la página en https://localhost:8000.
