var serverAddress = require('server-address')
var promiseFinally = require('promise-finally').default

/**
 * Exports `popsicleServer`.
 */
module.exports = popsicleServer

/**
 * Create a request interceptor that listens and disconnects automatically.
 *
 * @param  {Function} app
 * @return {Function}
 */
function popsicleServer (app) {
  var server = serverAddress(app)

  return function (req, next) {
    server.listen()

    req.url = server.url(req.url)

    return promiseFinally(next(), function () {
      server.close()
    })
  }
}
