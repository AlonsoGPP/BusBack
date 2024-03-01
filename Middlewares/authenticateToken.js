
require('dotenv').config();
const jwt = require('jsonwebtoken');
const SECRET_KEY=process.env.SECRET_KEY;
module.exports = (req, res, next) => {
  const beareHeader = req.headers["authorization"];
  if (!beareHeader) return res.status(401).send('Acceso denegado.');
  const bearerToken=beareHeader.split(' ')[1];
  req.token=bearerToken;
 jwt.verify(req.token, SECRET_KEY, (err, user) => {
    if (err) return res.status(403).send('Token no válido.');
    req.user = user;
    next(); 
  });
};