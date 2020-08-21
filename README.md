# FISUBA

Página web con material de la carrera de Lic. en Ciencias Físicas de la Universidad de Buenos Aires.

- [Board de Trello](https://trello.com/b/bifiKAUS/fisuba)

## Instalación

1. Clonamos el repositorio de GitHub:

```
git clone https://github.com/fyulita/fisuba.git
cd fisuba
```

2. Instalamos dependencias (Asegurarse de tener Python >= 2.8 y Node.js >= 14.7.0 instalado):

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
- DATABASE NAME: CORE

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
