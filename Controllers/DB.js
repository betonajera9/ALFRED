const DB = require('./connectDB');

let validate = async (user, pass) => {
  return DB.query(`SELECT * FROM login where users = '${user}' AND pass = '${pass}'`);
};

module.exports = validate;
