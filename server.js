'use strict'

require('marko/node-require') // allow requiring templates

var express = require('express')

var app = express()

app.get('/', function (req, res, next) {
  require('./index.marko').render({}, res)
})

app.use(require('lasso/middleware').serveStatic())

app.listen(8001, function () {
  console.log('Listening on port 8001')
})

require('lasso').configure({
  plugins: [
    'lasso-marko'
  ],
  outputDir: __dirname + '/static'
})
