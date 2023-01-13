# API REST con express en typescript.
 > Archivos:
* **database.ts**
 Configuraciones y la conexión con la 
 base de datos, tambien incluye el export del modulo database.

* **express.ts** 
 Toda configuracion hecha en express junto al inicio del servidor puesto en una funcion llamada "expressStart()".

* **index.ts**
 Tiene todo lo que se ejecuta en el servidor puesto en una funcion llamada "main()" para poder llevar un orden de ejecucion como en otros lenguajes.

* **Router/homeRouter.ts**
 Tiene las rutas principales que se utilizaran en express.

> Dependencias Usadas
* express

* morgan

* mysql

* nodemon

* typescript

> Scripts Usados
* "dev" : "nodemon build/index.js" => Ejecuta el servidor compilado.

* "tsc" : "tsc" => Compila el codigo ts en js en la carpeta build.