const auth = require("./auth")
const cat = require("./cat")

const routes = (app) => {
  app.use("/auth", auth)
  app.use("/cats", cat)
}

module.exports = routes
