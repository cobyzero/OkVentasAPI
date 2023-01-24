# API REST con express en typescript.
 > Archivos:
* **express.ts** 
 Toda configuracion hecha en express junto al inicio del servidor puesto en una funcion llamada "expressStart()".

* **index.ts**
 Tiene todo lo que se ejecuta en el servidor puesto en una funcion llamada "main()" para poder llevar un orden de ejecucion como en otros lenguajes.

* **Controller/usersController.ts**
    El response y request de las rutas.
* **Database/database.ts**
    La conexion con la base de datos.
* **Model/credenciales.ts**
    Modelo base de la tabla CREDENCIALES.
* **Model/publicaciones.ts**
    Modelo base de la tabla PUBLICACIONES.
* **Routes/usersRoutes.ts**
    Las rutas de los usuarios.
> Dependencias Usadas
* express

* morgan

* mysql2

* nodemon

* typescript

* sequelize

> Scripts Usados
* "dev" : "nodemon build/index.js" => Ejecuta el servidor compilado.

* "tsc" : "tsc" => Compila el codigo ts en js en la carpeta build.