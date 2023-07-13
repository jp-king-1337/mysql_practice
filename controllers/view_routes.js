const router = require("express").Router();

// Custom Middleware
function isAuthenticated(req, res, next) {
    const isAuthenticated = req.session.user_id;

    if (!isAuthenticated) return res.redirect("/login");

    next();
}

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
router.get("/dashboard", isAuthenticated, (req, res) => {


    res.redirect("/login");
});

module.exports = router;