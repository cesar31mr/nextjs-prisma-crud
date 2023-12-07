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

Para la instalación del react-router-dom se ejecutarán los siguientes comandos:

* npm i react-router-dom
* npm i --save-dev @types/react-router-dom

Si queremos, podemos ver nuestra bd en el navegador con el siguiente comando:

* npx prisma studio

Finalmente ejecutamos nuestro proyecto.

* $ npm run dev

## Deploy

### Vercel

* $ npm i vercel -g

Si es linux se agrega "sudo"

* $ sudo npm i vercel -g

Nos logeamos con:

* $ vercel login

Por último, para subir el proyecto se escribe el comando

* $ vercel

### Firebase

Para publicar el proyecto usando firebase primero hay que instalarlo con el siguiente comando

* $ npm install -g firebase-tools

Si es linux se agrega "sudo" al inicio

* $ sudo npm install -g firebase-tools

A continuación (se debe contar con una cuenta de [firebase](https://console.firebase.google.com/ "firebase")), desde la consola nos logeamos

* $ firebase login

En la carpeta del proyecto abrimos la consola e iniciamos el proyecto en firebase con el siguiente comando (si se descuadra la consola presiona "enter" y luego "1"):

* $ firebase init

Por último, para enviar el proyecto al sitio web de firebase, es decir, lo desplegamos:

* $ firebase deploy
