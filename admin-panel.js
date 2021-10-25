let username = document.querySelector('#admin-panel__username');
let department = document.querySelector('#admin-panel__department');
let adminPanelTable = document.querySelector('#admin-panel__table');
let save = document.querySelector('#admin-panel__save');
let localStorageKey = "users";
let indexEditElement;
dataOutput();

save.onclick = () => {
    let users = localStorageGetItem(localStorageKey);
    let usernameValue = username.value.trim();
    if (usernameValue == "") return;
    let departmentValue = department.value;
    let currentDate = new Date().toJSON().slice(0, 10).replace(/-/g, '/');
    if (indexEditElement !== undefined) {
        users[indexEditElement].username = usernameValue;
        users[indexEditElement].department = departmentValue;
        users[indexEditElement].updateDate = currentDate;
        indexEditElement = undefined;
    } else {
        let user = {
            username: usernameValue,
            department: departmentValue,
            creationDate: currentDate,
            updateDate: currentDate
        };
        users.push(user);
    }
    localStorageSetItem(localStorageKey, users);
    dataOutput();
    username.value = "";
    department.value = department.options[0].value;
}

adminPanelTable.onclick = (event) => {
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
    adminPanelTable.innerHTML = table;
}

function deleteUser(index) {
    let users = localStorageGetItem(localStorageKey);
    if (!confirm(`Вы уверенны, что хотите удалить пользователя ${users[index].username}?`)) {
        return;
    }
    if (indexEditElement === index) {
        indexEditElement = undefined;
        username.value = "";
        department.value = department.options[0].value;
    }
    users.splice(index, 1);
    localStorageSetItem(localStorageKey, users);
    dataOutput();
}

function editUser(index) {
    let users = localStorageGetItem(localStorageKey);
    username.value = users[index].username;
    department.value = users[index].department;
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