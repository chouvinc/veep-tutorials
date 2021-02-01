var express = require("express");
var router = express.Router();

var dao = require('../dao/dao');

router.get("/", async function(req, res, next) {
    const data = await new dao.CrappyDao().getAll();
    res.send(JSON.stringify(data));
});

module.exports = router;