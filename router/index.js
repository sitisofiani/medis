const express = require("express");
const router = express.Router();

router.use("/pasien/", require("../pasien/pasien"));


module.exports = router;
