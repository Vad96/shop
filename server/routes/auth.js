const express = require('express');

const router = express.Router();

router.get('/create-or-update-user', (req, res) => {
  res.json({
    data: 'hello pidor'
  })
})

module.exports = router;