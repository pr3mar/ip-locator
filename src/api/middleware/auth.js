const jwt = require('jsonwebtoken');

function tokenAuthentication(req, res, next) {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(' ')[1];
  if (token == null) {
    return res.sendStatus(403);
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      console.log(err);
      return res.sendStatus(401);
    }
    req.user = user;
    next();
  });
}

function generateToken(userSecret) {
  let tokenExpirationTime = parseInt(process.env.JWT_EXPIRE_IN_MINUTES, 10);
  if (Number.isNaN(tokenExpirationTime)) {
    tokenExpirationTime = 5;
  }
  const expiresIn = `${tokenExpirationTime}m`;
  console.log({ expiresIn });
  return jwt.sign({ userSecret }, process.env.JWT_SECRET, { expiresIn });
}

export {
  tokenAuthentication,
  generateToken,
};
