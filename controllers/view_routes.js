const router = require("express").Router();
const path = require("path");

router.get("/", (req, res) => {
    res.render("index", {
        username: "JP"
    });
});

router.get("/about", (req, res) => {
    res.render("about");
});

module.exports = router;