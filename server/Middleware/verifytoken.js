const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
  const tokenBearer = req.headers.authorization;
  const [token] = tokenBearer.split(' ').reverse();
  if(!tokenBearer){
    res.json({ message:'Token not included' });
  }
  else{
    jwt.verify(token, 'zozysenterprisetoken', (err, decoded) => {
      if(err){
        res.json({error: err.name, message: err.message });
      }
      else{
        req.id = decoded.id;
        next();
      }
    });
  }
}

module.exports = verifyToken;