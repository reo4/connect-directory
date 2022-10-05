const mongoose = require("mongoose")
require("dotenv").config()
const env = process.env

const db = mongoose.connection
const connection = `mongodb://${env.MONGO_USER}:${env.MONGO_PASSWORD}@${env.MONGO_HOST}:${env.MONGO_PORT}/${env.MONGO_DB}?authSource=${env.MONGO_AUTH_SOURCE}`

mongoose.connect(connection, { useNewUrlParser: true })

db.once("open", () => {
  console.log("connected to the database")
})

module.exports = mongoose
