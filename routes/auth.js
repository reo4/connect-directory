const express = require("express")
const router = express.Router()

router.get("/login", (req, res) => {
  res.send("hello from login")
})

router.get("/logout", (req, res) => {
  res.send("hello from register")
})

module.exports = router
