var serverAddress = require('server-address')

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

  return function (req) {
    req.before(function () {
      server.listen()

      // Update the URL before the request runs.
      req.url = server.url(req.url)
    })

    req.always(function () {
      console.log('after')
      server.close()
    })
  }
}
