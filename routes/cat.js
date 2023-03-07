const express = require("express")
const router = express.Router()
const catController = require("@/controllers/cat")

router.post("/", catController.create)
router.get("/", catController.get)
router.delete("/:id", catController.remove)
router.put("/:id", catController.update)
router.get("/:id", catController.show)

module.exports = router
