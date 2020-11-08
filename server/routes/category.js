const express = require("express");

const router = express.Router();

// middlewares
const { authCheck, adminCheck } = require("../middlewares/auth");

// controller
const { create, read, update, remove, list } = require("../controllers/category");

router.post("/category", authCheck, authCheck, adminCheck, create);
router.get("/categories", list);
router.get("/category:slug", authCheck, read);
router.put("/category/:slug", authCheck, authCheck, adminCheck, update);
router.delete("/category", authCheck, authCheck, adminCheck, remove);

module.exports = router;
