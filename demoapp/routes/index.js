const productsRouter = require('./products')
const categoriesRouter = require('./categories')

const initRoutes = (app) => {
  app.use('/api/product', productsRouter)
  app.use('/api/category', categoriesRouter)
}

module.exports = initRoutes