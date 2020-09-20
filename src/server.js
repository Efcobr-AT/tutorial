// este archivo servira para poder arrancar el servico de expres (servidor)
const express = require('express');
const path = require('path');

// ---Estructura---
// Initializations
const app = express();

// Settings  -- lo que quiere que haga expres basada en algunos modulos
app.set('port', process.env.PORT || 4000);
app.set('views', path.join(__dirname, 'views') );       //indica que la carpeta viws se encuntra en otro lugar

// Middlewares  -- funciones que se van ejecutando a medida que van llegando peticiones, si un usuario hace una peticion al servidor y se requiere algo previo a ello eso esta seccion se ejecuta
app.use(express.urlencoded({extended: false}));         //formularios qeu llegen convierten en objeto .json para manipular en codigo

// Global variable  -- se crean variables y pueden acceder en todo el proyecto

// Routes  -- es el acceso a las rutas
app.get('/', (req, res) => {
    res.send('hello world');
})

// Static files  -- archivos que se encuentran dentro de la carpeta public, que no se requiere authenticacion (seguridad)
app.use(express.static(path.join(__dirname, 'views')));  //aqui esta la carpeta public

module.exports = app;