const Cat = require("@/db/models/Cat")

const sendResource = async(res) => {
  const cats = await Cat.find({})
  res.send(cats)
}

const get = async (req, res) => {
  sendResource(res)
}

const create = async (req, res) => {
  await Cat.create({ name: req.body.name })
  sendResource(res)
}

const remove = async (req, res) => {
  const cat = await Cat.findById(req.params.id)
  cat.remove()
  sendResource(res)
}

const update = async (req, res) => {
  const cat = await Cat.findById(req.params.id)
  cat.name = req.body.name
  cat.save()
  sendResource(res)
}


const show = async (req, res) => {
  const cat = await Cat.findById(req.params.id)
  res.send({ cat })
}

module.exports = { create, remove, update, get , show }
