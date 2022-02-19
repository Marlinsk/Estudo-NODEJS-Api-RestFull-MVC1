const express = require('express');
const UserControl = require('../controllers/UserController');

const router = express.Router();

router.get("/registered-users", UserControl.apiGetAllUsers);
router.post("/create", UserControl);
router.get("/user/:id", UserControl);
router.put("/user/:id", UserControl);
router.delete("/user/:id", UserControl);

module.exports =  router;