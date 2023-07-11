const groupOutput = document.querySelector("#group-output");

function getGroups() {
    fetch("/api/groups")
        .then(res => res.json())
        .then(groups => {
            groups.forEach(group => {
                const outputStudents = () => {
                    return group.students.map(stu => `
                        <li>${stu.first_name} ${stu.last_name}</li>
                    `).join("");
                };
                groupOutput.insertAdjacentHTML("beforeend", `
                <div class="group">
                    <h3>${group.name}</h3>
                    <ul>${outputStudents()}</ul>
                </div>
                `);
            })

        })
}

getGroups();
