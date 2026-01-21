# API REST de Películas - Guía de Pruebas y Endpoints

Este documento detalla las pruebas de funcionamiento de la API realizadas mediante **Postman**, **MongoDB Compass** y la visualización en **Localhost**, documentando el ciclo de vida completo de los datos (CRUD).

## Registro de Funcionalidad (Capturas de Pantalla)

### 1. POST: Añadir Nueva Película
* **`nosql_post.jpg`**: Registro de la película *K-pop: Demon Hunters*. Se envía la petición POST y se verifica la creación del documento con su correspondiente `_id` único en la base de datos.

### 2. PUT: Modificación de Datos (Update)
* **`nosql_put_1.jpg`**: Escenario de error controlado. Se añade la película *Figuras Ocultas* con el año de lanzamiento incorrecto para testear la capacidad de edición.
* **`nosql_put_1_localhost.jpg`**: Verificación visual en el navegador (`localhost:3000/movies`) donde se confirma que la película aparece con el dato erróneo antes de la modificación.
* **`nosql_put_2.jpg`**: Ejecución de la petición PUT en Postman para corregir el año. La captura muestra la respuesta exitosa del servidor y la actualización inmediata en **MongoDB Compass**.
* **`nosql_put_2_localhost.jpg`**: Comprobación final en el navegador donde ya se visualiza la película con los datos corregidos.

### 3. DELETE: Borrado de Registros
* **`nosql_delete.jpg`**: Ejecución de la petición DELETE. Se documenta el cambio en el volumen de la base de datos: la colección pasa de tener 8 documentos a tener 7, confirmando la eliminación física en MongoDB.
* **`nosql_delete_localhost.jpg`**: Refresco del navegador en el endpoint de lectura donde se confirma que la película eliminada ya no figura en el listado JSON.

---

## Tecnologías Utilizadas
* **Backend**: Node.js y Express.
* **Base de Datos**: MongoDB (NoSQL) con Mongoose.
* **Testing**: Postman.
* **Documentación**: Markdown.