const bodyParser = require("body-parser")
const cors = require('cors')


const libs = (app, express) => {
  app.use(cors());
  app.use(bodyParser.urlencoded({ extended: false }))
  app.use(bodyParser.json())
}

module.exports = libs
