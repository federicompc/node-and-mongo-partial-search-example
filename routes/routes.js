const { Router } = require("express");
const countriesController = require("./../controllers/countriesController");

const router = Router();
router.route("/search/:param").get(countriesController.searchData);
router.route("/uploadData").post(countriesController.uploadData);

module.exports = router;
