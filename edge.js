const { join } = require("path")
const { Edge } = require("edge.js")
const edge = new Edge({ cache: false })

edge.mount(join(__dirname, "views"))

const view = (view, data) => {
  return (req, res) => {
    edge.render(view, data).then((html) => {
      res.send(html)
    })
  }
}

module.exports = view
