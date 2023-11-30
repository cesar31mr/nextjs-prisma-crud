# Curso de Nextjs desde Cero (Nextjs 13)
## Nextjs Crud con Prisma Setup

Para la creación de este proyecto se utilizaron los siguientes comandos

* Crear proyecto
    * $ npx create-next app next-prisma-crud (sin typescript)
* [Instalar módulo de prisma](https://www.prisma.io/docs/getting-started/quickstart)
    * $ npm install prisma --save-dev
* Seleccionar el proveedor de BD para prisma
    * $ npx prisma init --datasource-provider sqlite

En este punto se ha creado una carpeta llamada "prisma", allí habrá un archivo llamado "schema.prisma". En este archivo se realizará el modelo de base de datos.

Como ejemplo creamos una tabla llamada "Task" para nuestro modelo y una vez terminado se ejecuta el siguiente comando que creará la BD.
* npx prisma migrate dev --name init

Si queremos, podemos ver nuestra bd en el navegador con el siguiente comando:
* npx prisma studio

Finalmente ejecutamos nuestro proyecto.

* $ npm run dev