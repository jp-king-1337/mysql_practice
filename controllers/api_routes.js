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

// Get all groups
router.get("/api/groups", (clientReq, serverRes) => {
    // Retrieve all groups from the db
    Group.findAll({
        include: {
            model: Student,
            separate: true,
            order: [["first_name", "asc"]]
        }
    }).then(groups => {
        serverRes.send(groups);
    });
});

// Create Student
router.post("/api/student", (clientReq, serverRes) => {
    Student.create(clientReq.body)
        .then(() => serverRes.send("Student added successfully!"));

    // Get the group first by id
    // Group.findByPk(clientReq.body.group_id)
    //     .then(group => {
    //         Student.create({
    //             first_name: clientReq.body.first_name,
    //             last_name: clientReq.body.last_name,
    //             email: clientReq.body.email
    //         }).then(student => {
    //             group.addStudent(student)
    //                 .then(() => {
    //                     serverRes.send("Student added successfully");
    //                 });
    //         })
    //     })
});

module.exports = router;