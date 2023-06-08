'use strict';

const express = require('express');
const PORT = 8080;
const HOST = '0.0.0.0';
const app = express();
const db = require('./queries')

app.get('/', (request, response) => {
  response.send('esta es una aplicacion que soporta las operaciones CRUD contra la base de datos de PostgreSQL');
});

app.get('/createTable', db.createTable)
app.get('/getUsers', db.getUsers)
app.get('/getUserById/:id', db.getUserById)
app.get('/createUser/:name/:email', db.createUser)
app.get('/updateUser/:id/:name/:email', db.updateUser)
app.get('/deleteUser/:id', db.deleteUser)

app.listen(PORT, HOST, () => {
  console.log(`Running on http://${HOST}:${PORT}`);
});