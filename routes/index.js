const Cat = require("@/db/models/Cat")
const { render, view } = require("@/edge")
const auth = require("./auth")
const book = require("./book")

const routes = (app) => {
  app.use("/auth", auth)
  app.use("/book", book)

  app.get("/", render("index", { message: "hello" }))
}

module.exports = routes
