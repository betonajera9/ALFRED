const express = require('express');
const app = express();
const path = require('path');
const morgan = require('morgan');
const routes = require('../Routes/Index');
const {client} = require('./connectDB');

//Settings
app.set('port', process.env.PORT || 4000);
app.set('Views', path.join(__dirname, 'Views'));

//Middlewares
app.use(morgan('dev'));
app.use(express.json());

//Routes
app.use('/api/login', routes);

//Static Files
app.use(express.static(path.join(__dirname, '../Public')));

//start the server
app.listen(app.get('port'), () => console.log('Server on port ' + app.get('port')));
