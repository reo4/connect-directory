require("module-alias/register")
const bodyParser = require("body-parser")

const libs = (app, express) => {
  app.use(bodyParser.urlencoded({ extended: false }))
  app.use(bodyParser.json())

  app.use("/public", express.static("public"))
}

module.exports = libs
