const router = require("express").Router();
const path = require("path");

router.get("/", (req, res) => {
    res.render("index", {
        users: [
            {
                email: "jp@test.com",
            },
            {
                email: "bob@test.com",
            },
            {
                email: "phil@test.com",
            }
        ]
    });
});

router.get("/about", (req, res) => {
    res.render("about");
});

module.exports = router;