let save = document.getElementById('admin-panel__save');
save.onclick = () => {
    let users = JSON.parse(localStorage.getItem("users") || "[]");
    let username = document.getElementById('admin-panel__username').value;
    let department = document.getElementById('admin-panel__department').value;
    let currentDate = new Date().toJSON().slice(0, 10).replace(/-/g, '/');
    if (indexEditElement !== undefined) {
        users.forEach(function (user, i) {
            if (i == indexEditElement) {
                user.username = username;
                user.department = department;
                user.updateDate = currentDate;
                indexEditElement = undefined;
            }
        });
    } else {
        let user = {
            username: username,
            department: department,
            creationDate: currentDate,
            updateDate: currentDate
        };
        users.push(user);
    }
    localStorage.setItem("users", JSON.stringify(users));
    dataOutput();
    document.getElementById('admin-panel__username').value = "";
    document.getElementById('admin-panel__department').value = document.getElementById('admin-panel__department').options[0].value;
};