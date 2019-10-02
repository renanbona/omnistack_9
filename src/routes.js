const express = require('express');

const routes = express.Router();

routes.get('/', (req, res) => {
  return res.json({ message: "Oi eu sou Goku!" });
})

module.exports = routes;