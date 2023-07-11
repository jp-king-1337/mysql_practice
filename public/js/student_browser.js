const studentForm = document.querySelector("#student-form");
const firstInput = document.querySelector("#first-input");
const lastInput = document.querySelector("#last-input");
const emailInput = document.querySelector("#email-input");
const groupSelect = document.querySelector("#group-select");

function handleStudentSubmit(event) {
    event.preventDefault();



}

function getGroups() {
    fetch("/api/groups")
        .then(res => res.json())
        .then(data => {
            console.log(data);
        });

}

getGroups();
studentForm.addEventListener("submit", handleStudentSubmit);