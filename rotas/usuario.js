const express = require("express");
const router = express.Router();

router.get("/", function (req,res){
    res.send([]);

});

router.post("/", function (req, res) {
    console.log({});

})

router.put("/.id?", function (req, res) {
    console.log({});

})

router.delete("/.id?", function (req, res) {
    console.log({});

})


module.exports = router;