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
docker run -it -v vue-project-vol:/app -p 8080:8080 --rm --name vue-project-container vue-project.img
```
