module.exports = function logger(req, res, next) {
  const inicio = process.hrtime.bigint();

  // 'finish' se dispara cuando ya se envió la respuesta
  res.on('finish', () => {
    const ms = Number(process.hrtime.bigint() - inicio) / 1e6;
    console.log(
      `[${new Date().toISOString()}] ${req.method} ${req.originalUrl} -> ${res.statusCode} (${ms.toFixed(1)} ms)`
    );
  });

  next(); // sigue hacia las rutas, sin tocar el XML
};
