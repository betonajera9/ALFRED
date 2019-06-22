const path = require('path');
const options = {
  root: path.join(__dirname, '../Views'),
  dotfiles: 'deny',
  headers: {
    'x-timestamp': Date.now(),
    'x-sent': true
  }
};

//Paginas
function index(req, res, next) {
  var fileName = 'Index.html';
  res.sendFile(fileName, options, function(err) {
    if (err) {
      next(err);
    } else {
      // res.writeHead(200,{"Content-Type":"txt/html"})
      // re.write('hola')
      console.log('Sent:', fileName);
      // res.end('okay')
    }
  });
}

module.exports = {
  index
};
