import express from 'express';
import path from 'path';
import morgan from 'morgan';

//Initializations
const app = express();

//Settings
app.set('port', process.env.PORT || 4001);

//Middlewares
app.use(morgan('dev'));
app.use(express.json());

//Static Files
app.use(express.static(path.join(__dirname, '../public')));

//Routes
app.get('/*', (req, res) => {
  res.sendFile(path.resolve('src', 'public', 'index.html'));
});

//start the server
app.listen(app.get('port'), () => console.log('Server on port ' + app.get('port')));
