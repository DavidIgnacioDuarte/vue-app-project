# Aplicación VUE

Proyecto de aplicación de Vue para pruebas (*semilla*).

## Visualización de la aplicación web

Usamos **Docker** para simplificar la ejecución, compartiendo las librerías y demás herramientas:

1. Primero, debemos buildear una imagen con el comando:

```bash
docker build -t vue-project-img .
```

2. Y ejecutar un contenedor:

```bash
docker run -it --name vue-project-container -v ${PWD}:/usr/src/app -v /usr/src/app/node_modules -p 5000:5000 vue-project-img
```

pudiendo visualizar así, el contenido de nuestra página accediendo a la **IP** de la _Network_ en cualquier navegador.   
Para iniciar el contenedor en cualquier momento, ejecutar el comando:

```bash
docker start vue-project-container
```