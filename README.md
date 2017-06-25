# Angular contacts app

A simple app to store a list of contacts

## Prerequisites

- [Docker Compose 1.8.1][docker-compose]

## Getting Started

Once you have Docker Compose installed navigate to the root of this project's directory and run the following command.

```shell
docker-compose up
```

After the required container images are downloaded and built you should see three services start and begin logging their output.

### Services

#### App
A simple [AngularJS][angular-docs] web application written in [ES2015][es2015], transpiled through [Babel][babel] and served through using [Webpack][webpack] and [Webpack Dev Server][webpack-dev-server] at http://localhost:8080 by default (can be overridden through environment variables in `.env`).

As changes are made to the source files in `./app/src` the application should automatically compile and reload in browser to reflect your changes.

#### API
A simple Node.js RESTful API that makes use of the [Restify][restify] framework and the [MongoDB Node.js Driver][mongodb-nodejs-driver].

The API is accessible via `webpack-dev-server` hosting the App through the `/api/` path (http://localhost:8080/api/).

As changes are made to the source files in `./api/src` the API should automatically restart to reflect your changes.

#### Database (DB)
A MongoDB instance with its data written to the mounted path `./db/data` so it persists between runs.

[angular-docs]:          https://docs.angularjs.org/
[babel]:                 https://babeljs.io/
[docker-compose]:        https://docs.docker.com/compose/install/
[es2015]:                https://babeljs.io/learn-es2015/
[mongodb-nodejs-driver]: http://mongodb.github.io/node-mongodb-native/2.2/
[restify]:               http://restify.com/
[webpack-dev-server]:    https://webpack.github.io/docs/webpack-dev-server.html
[webpack]:               https://webpack.github.io/
[github]:                https://github.com/
[bitbucket]:             https://bitbucket.org/


