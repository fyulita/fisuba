# FisUBA

#### [fisuba.herokuapp.com](fisuba.herokuapp.com)

FisUBA es una página web con material de la carrera de Lic. en Ciencias Físicas de la Universidad de Buenos Aires. Esta página usa Django REST Framework en el backend para la API y usa React.js en el frontend.

- [Board de Trello](https://trello.com/b/bifiKAUS/fisuba)

## Instalación

1. Clonamos el repositorio de GitHub:

```
git clone https://github.com/fyulita/fisuba.git
cd fisuba
```

2. Instalamos dependencias (Asegurarse de tener Python >= 3.8 y Node.js >= 14.7.0 instalado):

```
npm install
pip install pipenv
pipenv shell
pipenv install
```

3. Creamos el servidor de PostgreSQL y la base de datos con la info correcta (Recomiendo usar pgAdmin4 ya que es más fácil):

- HOST: localhost
- PORT: 5432
- USER: postgres
- PASSWORD: oz5LBN2cKVFem^ZbFIal
- DATABASE NAME: fisuba

4. Migramos los modelos a la base de datos:

```
cd fisuba
python manage.py migrate
```

5. Corremos la página. Asegurarse de tener los puertos 8000 (para la página) y 5432 (para la base de datos) disponibles:

```
python manage.py runserver
```

Luego de ejecutar este último comando van a poder visitar la página en http://127.0.0.1:8000. La base de datos va a estar vacía pero los modelos están cargados, así que pueden llenar la info que quieran.

## Instrucciones

### Correr la página

En la carpeta `fisuba/` hay un script de python que se llama `manage.py`. Si ejecutamos `python manage.py runserver` (hay que correr `pipenv shell` antes para estar en el environment correcto) entonces corremos la página web en http://127.0.0.1:8000. Recomiendo correr en otra consola `npm run dev` para que los cambios que se le hagan a la página se apliquen automáticamente, solo hace falta refrescar la página.

### Hacer migraciones de modelos

Si ejecutamos `python manage.py makemigrations` creamos las migraciones para los nuevos modelos que hayamos implementado y con `python manage.py migrate` migramos los modelos a la base de datos.

### Interactuar con la REST API

Recomiendo usar Postman ya que les va a dejar hacer GET y POST Requests fácilmente. Si no, pueden ir directamente a https://127.0.0.1:8000/api/{nombre-de-modelo}/ para hacer los requests. Los modelos disponibles son:

- materias
- guias
- examenes
- ejerciciosguias
- ejerciciosexamenes
