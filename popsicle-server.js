var serverAddress = require('server-address');

/**
 * Export `popsicleServer`.
 */
module.exports = popsicleServer;

/**
 * Create a request interceptor that listens and disconnects automatically.
 *
 * @param  {Function} app
 * @return {Function}
 */
function popsicleServer (app) {
  var server = serverAddress(app);

  return function (req) {
    server.listen();

    req.progress(function (e) {
      if (e.completed === 1) {
        server.close();
      }
    });

    req.url = server.url(req.url);
  };
}
