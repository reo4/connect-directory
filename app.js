require("dotenv").config()
require("module-alias/register")

const express = require("express")
const app = express()
const port = process.env.PORT || 3000

require("@/db")
require("@/libs")(app, express)
require("@/routes")(app)

app.listen(port, () => {
  console.log(`Rocket is listening on port ${port}`)
})
