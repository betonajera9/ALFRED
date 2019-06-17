const {Client} = require('pg');
const connectionData = {
  user: 'postgres',
  host: '',
  database: 'Alfred',
  password: 'minarochivas99',
  port: 5432,
};
const client = new Client(connectionData);

client.connect();
client.query('SELECT * FROM public."Prueba"')
    .then(response => {
        console.log(response.rows);
        client.end();
      })
    .catch(err => {
      console.log('N');
      client.end();
    });
