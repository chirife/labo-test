# :computer: LaboTest

Aplicación web SPA generado **Angular CLI** y desarrollado con **Angular 6** y **Bootstrap 4**:

## :package: Modulos

- **Shared**: Contiene los elementos reutilizables en el resto de la aplicación.
- **Routes**: Contiene las rutas de la aplicación divididas en sub-modulos.
- **UI**: Contiene la estructura base de la aplicación (Layout).

## :clipboard: Instalación

1- Clonar el proyecto.

2- Instalar las dependencias utilizando **npm**
```
    npm install
```

```
Angular CLI: 6.0.8
Node: 10.9.0
OS: linux x64
Angular: 6.1.10
... animations, common, compiler, compiler-cli, core, forms
... http, language-service, platform-browser
... platform-browser-dynamic, router

Package                           Version
-----------------------------------------------------------
@angular-devkit/architect         0.6.8
@angular-devkit/build-angular     0.6.8
@angular-devkit/build-optimizer   0.6.8
@angular-devkit/core              0.6.8
@angular-devkit/schematics        0.6.8
@angular/cli                      6.0.8
@ngtools/webpack                  6.0.8
@schematics/angular               0.6.8
@schematics/update                0.6.8
rxjs                              6.3.3
typescript                        2.7.2
webpack                           4.8.3
```

## :green_book: Ejecutar con Angular CLI

Ejecutar el proyecto localmente apuntando al entorno de **Prueba**:

```
    ng serve
```

Ejecutar el proyecto localmente apuntando al entorno de **Producción**:

```
    ng serve --prod
```

## :whale: Ejecutar con Docker

1- Compilar el proyecto, por defecto se crea en el directorio local ./dist/

```
    ng build --prod --aot
```

2- Ejecutar los siguientes comandos

```
docker-compose build
docker-compose up
```

> NOTA: Para bajar los contenedores y borrar la imagen, utilizar :

```
docker-compose down --rmi all
```


## :thought_balloon: Documentación Técnica

Para poder acceder a la documentación técnica del proyecto podemos ejecutar el siguiente comando:

```
    npm run compodoc
```