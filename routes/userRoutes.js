const express = require("express");

const router = express.Router();


const {
    getHistory
} = require("../controllers/userController");


const authMiddleware = require("../middleware/authMiddleware");


// Borrow History
router.get(
    "/history",
    authMiddleware,
    getHistory
);


module.exports = router;