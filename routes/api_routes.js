const router = require("express").Router();
const Student = require("../models/Student");
const Group = require("../models/Group");

// Create Group
router.post("/api/group", (clientReq, serverRes) => {
    console.log(clientReq.body);
    Group.create({
        name: clientReq.body.name
    }).then(newGroup => {
        serverRes.send({
            message: "Group added successfully!"
        });
    }).catch(err => {
        serverRes.status(500).send({
            message: err.message,
            error: true
        }),
        console.log(err.message);
    })
});

module.exports = router;