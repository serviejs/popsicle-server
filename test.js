/* global describe, it */

/* istanbul ignore next */
if (!global.Promise) {
  require('es6-promise').polyfill()
}

var expect = require('chai').expect
var popsicle = require('popsicle')
var server = require('./')

describe('popsicle server', function () {
  it('should automatically mount the server', function () {
    return popsicle('/foo')
      .use(server(handler))
      .then(function (res) {
        expect(res.body).to.equal('GET /foo')
      })
  })
})

function handler (req, res) {
  res.write(req.method + ' ' + req.url)
  res.end()
}
