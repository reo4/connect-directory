const express = require("express")
const router = express.Router()
const bookController = require("@/controllers/book")

router.post("/create", bookController.create)

module.exports = router
