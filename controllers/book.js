const Cat = require("@/db/models/Cat")

const create = (req, res) => {
  res.send("post created")
}

const remove = (req, res) => {
  res.send("post remove")
}

const update = (req, res) => {
  res.send("post remove")
}

module.exports = { create, remove, update }
