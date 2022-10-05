const { join } = require("path")
const { Edge } = require("edge.js")

const edge = new Edge({ cache: false })

edge.mount(join(__dirname, "views"))

const render = (view, data = null) => {
  return (req, res) => {
    res.send(edge.renderSync(view, data))
  }
}
const view = (view, data = null) => {
  return edge.renderSync(view, data)
}

module.exports = { render, view }
