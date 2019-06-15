const express = require('express');
const path = require('path');
const app = express();
// const routes = require('../Routes/Index');
const bodyParser = require('body-parser');

//Settings
app.set('port', process.env.PORT || 4000)
app.set('Views', path.join(__dirname, 'Views'));
// app.set('view engine', 'ejs');


//middlewares
app.use((req, res, next)=>{
  console.log(`${req.url} - ${req.method}`);
  next();
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//routes
// app.use(routes);

//static files
app.use(express.static(path.join(__dirname, '../Public')));


//start the server
app.listen(app.get('port'),() => console.log('Server on port ' + app.get('port')));
