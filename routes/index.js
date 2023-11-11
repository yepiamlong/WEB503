const products = require('./products')

function routes(app) {
    app.use('/', products)
  
}

module.exports = routes