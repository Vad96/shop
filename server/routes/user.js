const express = require('express');

const router = express.Router();

router.get('/user', (req, res) => {
  res.json({
    data: 'hello pidorok user'
  })
})

module.exports = router;