const mongoose = require("mongoose")

const Cat = mongoose.model("Cat", {
  name: "string",
})

module.exports = Cat
