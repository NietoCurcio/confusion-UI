# Ristorante con Fusion

<img src="https://github.com/NietoCurcio/confusion-UI/blob/main/.github/showcase.png?raw=true" width="750" alt="RistoranteConfusion">

> UI project website studied during the React specialization on Coursera.

## Front-End Web UI Frameworks and Tools: Bootstrap 4

The Bootstrap course makes part of the Ful stack Web development with React on Coursera. It is focused on the [Presentation layer](https://en.wikipedia.org/wiki/Multitier_architecture) of the web development big picture, covering implementation of UI Desing using static files and libraries like Bootstrap, Sass, Less, Font Awesome, Grunt and Gulp for development a website. The [React course](https://github.com/NietoCurcio/SellerFinder), also covering the Presentation layer, cover the use of SPA (Single Page Applications) Frameworks to build a web application using Angular or React (at my case), whereas [NodeJs and MongoDB](https://github.com/NietoCurcio/Confusion-REST-API-Server) covers the Business Logic layer and Data Access layer of the Web development using Express, Mongoose, Firebase Backend as a Service, REST-API architecture, JWT and so on.

[Bootstrap](https://getbootstrap.com/) is a Front-end library to quickly design a website, using its buil-in classes and components.

## Task Runners

It is shown on the course how use and get started with task runners to do common tasks like uglification, minification and optimization of distribution or public static files.

- [**Grunt**](https://gruntjs.com/)

<img src=https://camo.githubusercontent.com/2bcb3bd09e6bd9b04773d1e1d5e7ef052a697ee9babe022d8859e3c817aaa6d3/687474703a2f2f6772756e746a732e636f6d2f696d672f6772756e742d6c6f676f2d6e6f2d776f72646d61726b2e737667" width="100" alt="Grunts">

A configurable approach by the use of objects `{}` declaring for example where are source files, destination and what options we'd like to use in our tasks.

- [**Gulp**](https://gulpjs.com/)

<img src="https://raw.githubusercontent.com/gulpjs/artwork/master/gulp-2x.png" width="100" alt="Gulp">

> Have you seen this image somewhere else, haven't you?

A more coding approach making use of functions, to create tasks that we would like to run and execute them in a order that we build a distribution folder.

Both libraries support the use of plugins to enhance its functionality, like transpiling `scss` files to `css` for example. I personally prefer the Gulp approach.

Also, before using those libraries, we implement optimizations and minifications of the static files using the usemin library. However, this project has used [htmlmin](https://github.com/voku/HtmlMin), [terser](https://github.com/terser/terser) and [cleancss](https://github.com/jakubpawlowicz/clean-css) libraries separately for those tasks. Their tasks can be executed through the `npm run build` script that was set up to build the `dist` folder.

## Honors recognition

Check out my conclusion project, [PCArt]()
