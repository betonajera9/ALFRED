const express = require('express');
const router = express.Router();
const validation = require('../Controllers/DB');
const indexControler = require('../Controllers/Routes');

router.get('/', async (req, res) => {
  res.json({
    status: 'API works!'
  });
});

router.post('/', async (req, res) => {
  const {user, pass} = req.body;
  console.log(req.body);
  validation(user, pass)
  .then(response => {
    if (response.rows.length != 0) {
      res.json({status: 'Welcome'});
    }else {
      throw new Error('Your username or password is wrong');
    }
  })
  .catch(err => {
    console.log(err);
    res.json({status: 'Try again'});
  });

});

module.exports = router;
