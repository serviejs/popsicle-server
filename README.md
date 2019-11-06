# Popsicle Server

[![NPM version][npm-image]][npm-url]
[![NPM Downloads][downloads-image]][downloads-url]
[![Build status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]

> Automatically connect HTTP(s) servers to a randomly available port for each request. Makes testing your Express/Connect/Node servers easy!

## Installation

```
npm install popsicle-server --save
```

## Usage

```js
import { toFetch } from "popsicle";
import { middleware } from "popsicle/dist/node";
import { compose } from "throwback";
import { Request } from "servie/dist/node";
import { server } from "popsicle-server";

const fetch = toFetch(
  compose([
    server((req, res) => {
      res.write(`${req.method} ${req.url}`);
      res.end();
    }),
    middleware
  ]),
  Request
);

await fetch("/users");
```

## License

MIT license

[npm-image]: https://img.shields.io/npm/v/popsicle-server.svg?style=flat
[npm-url]: https://npmjs.org/package/popsicle-server
[travis-image]: https://img.shields.io/travis/serviejs/popsicle-server.svg?style=flat
[travis-url]: https://travis-ci.org/serviejs/popsicle-server
[coveralls-image]: https://img.shields.io/coveralls/serviejs/popsicle-server.svg?style=flat
[coveralls-url]: https://coveralls.io/r/serviejs/popsicle-server?branch=master
[downloads-image]: https://img.shields.io/npm/dm/popsicle-server.svg?style=flat
[downloads-url]: https://npmjs.org/package/popsicle-server
