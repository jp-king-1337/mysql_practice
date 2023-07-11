const studentForm = document.querySelector("#student-form");
const firstInput = document.querySelector("#first-input");
const lastInput = document.querySelector("#last-input");
const emailInput = document.querySelector("#email-input");
const groupSelect = document.querySelector("#group-select");

function handleStudentSubmit(event) {
    event.preventDefault();

    fetch("/api/student", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            first_name: firstInput.value,
            last_name: lastInput.value,
            email: emailInput.value,
            groupId: groupSelect.value
        })
    }).then(res => {
        alert("Student added successfully!");
        firstInput.value = "";
        lastInput.value = "";
        emailInput.value = "";
    });
}

function getGroups() {
    fetch("/api/groups")
        .then(res => res.json())
        .then(data => {
            if (!data.length) return window.location = "/group";
            data.forEach(groupObj => {
                groupSelect.insertAdjacentHTML("beforeend",
                `<option value="${groupObj.id}">${groupObj.name}</option>`
                );
            });
        });

}

getGroups();
studentForm.addEventListener("submit", handleStudentSubmit);