let localStorageKey = "users";
let indexEditElement;
dataOutput();

let save = document.getElementById('admin-panel__save');
save.onclick = () => {
    let users = localStorageGetItem(localStorageKey);
    let username = document.getElementById('admin-panel__username').value.trim();
    if (username == "") return;
    let department = document.getElementById('admin-panel__department').value;
    let currentDate = new Date().toJSON().slice(0, 10).replace(/-/g, '/');
    if (indexEditElement !== undefined) {
        users[indexEditElement].username = username;
        users[indexEditElement].department = department;
        users[indexEditElement].updateDate = currentDate;
        indexEditElement = undefined;
    } else {
        let user = {
            username: username,
            department: department,
            creationDate: currentDate,
            updateDate: currentDate
        };
        users.push(user);
    }
    localStorageSetItem(localStorageKey, users);
    dataOutput();
    document.getElementById('admin-panel__username').value = "";
    document.getElementById('admin-panel__department').value = document.getElementById('admin-panel__department').options[0].value;
}

let table = document.getElementById('admin-panel__table');
table.onclick = (event) => {
    let target = event.target;
    let index = target.dataset.index;
    if (target.className === 'admin-panel__editButton') editUser(index);
    if (target.className === 'admin-panel__deleteButton') deleteUser(index);
}

function dataOutput() {
    let users = localStorageGetItem(localStorageKey);
    let table = "";
    users.forEach((user, index) => {
        table += `<tr>
        <td>${user.username}</td>
        <td>${user.department}</td>
        <td>${user.creationDate}</td>
        <td>${user.updateDate}</td>
        <td><button class="admin-panel__editButton" data-index="${index}">Редактировать</button></td>
        <td><button class="admin-panel__deleteButton" data-index="${index}">Удалить</button></td>
    </tr>`;
    });
    document.getElementById('admin-panel__table').innerHTML = table;
}

function deleteUser(index) {
    let users = localStorageGetItem(localStorageKey);
    if (!confirm(`Вы уверенны, что хотите удалить пользователя ${users[index].username}?`)) {
        return;
    }
    users.splice(index, 1);
    localStorageSetItem(localStorageKey, users);
    dataOutput();
}

function editUser(index) {
    let users = localStorageGetItem(localStorageKey);
    document.getElementById('admin-panel__username').value = users[index].username;
    document.getElementById('admin-panel__department').value = users[index].department;
    indexEditElement = index;
}

function localStorageSetItem(key, value) {
    try {
        localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
        alert(e);
    }
}

function localStorageGetItem(key) {
    try {
        let value = JSON.parse(localStorage.getItem(key) || "[]");
        return Array.isArray(value) ? value : [];
    } catch (e) {
        alert(e);
        return [];
    }
}