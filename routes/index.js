const view = require("@/edge")
const auth = require("./auth")
const book = require("./book")

const routes = (app) => {
  app.use("/auth", auth)
  app.use("/book", book)
  app.get("/", view("index", { message: "hello" }))
}

module.exports = routes
