function sendErrDev(err, res) {
  err.statusCode = err.statusCode || 400;
  res.status(err.statusCode).json({
    status: err.status,
    err,
    message: err.message,
    stack: err.stack,
  });
}

module.exports = (err, req, res, next) => {
  sendErrDev(err, res);
};
