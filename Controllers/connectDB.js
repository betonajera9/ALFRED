const {Client} = require('pg');
const connectionData = {
  user: 'postgres',
  host: '127.0.0.1',
  database: 'alfred',
  password: 'unica1q2w3e4r',
  port: 5433,
};
const client = new Client(connectionData);

client.connect()
  .then(response => {
    console.log('DB connected');
  })
  .catch(err => {
    console.log(err);
  });

module.exports = client;
