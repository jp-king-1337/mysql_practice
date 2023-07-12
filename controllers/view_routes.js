const router = require("express").Router();
const path = require("path");

router.get("/", (req, res) => {
    res.render("index", {
        isHome: true,
        users: [
            {
                email: "jd@test.com"
            },
            {
                email: "bob@test.com"
            },
            {
                email: "jane@test.com"
            }
        ]
    });
});

// Sends the layout and all its dynamic values
router.get("/register", (req, res) => {
    res.render("register", {
        isRegister: true
    });
})

module.exports = router;