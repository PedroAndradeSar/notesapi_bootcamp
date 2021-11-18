const express = require("express");
const router = express.Router();

router.get("/", function (req,res){
    res.send([]);

});

router.post("/", function (req, res) {
    res.log({});

})

router.put("/.id", function (req, res) {
    res.log({});

})

router.delete("/.id", function (req, res) {
    res.log({});

})


module.exports = router;