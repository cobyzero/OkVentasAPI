# API REST con express en typescript.
 > Archivos:
1. **database.ts**
 Configuraciones y la conexión con la 
 base de datos, tambien incluye el export del modulo database.

2. **express.ts** 
 Toda configuracion hecha en express junto al inicio del servidor puesto en una funcion llamada "expressStart()".
3. **index.ts**
 Tiene todo lo que se ejecuta en el servidor puesto en una funcion llamada "main()" para poder llevar un orden de ejecucion como en otros lenguajes.
4. **Router/homeRouter.ts**
 Tiene las rutas principales que se utilizaran en express.

> Dependencias Usadas
1. express
2. morgan
3. mysql
4. nodemon
5. typescript