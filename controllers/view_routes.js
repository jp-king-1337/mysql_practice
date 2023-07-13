const router = require("express").Router();

// Show Homepage
router.get("/", (req, res) => {
    res.render("index", {
        isHome: true
    });
});

// Show Login Page
router.get("/login", (req, res) => {
    res.render("login", {
        isLogin: true
    });
});

// Show Register Page
router.get("/register", (req, res) => {
    res.render("register", {
        isRegister: true
    });
});

// Show Dashboard Page
router.get("/dashboard", (req, res) => {
    console.log(req.session);
    res.render("dashboard");
});

module.exports = router;