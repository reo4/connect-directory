require("module-alias/register")
const express = require("express")
const app = express()
const port = process.env.PORT || 3000

require("./db")
require("./routes")(app)

app.listen(port, () => {
  console.log(`Donework listening on port ${port}`)
})
