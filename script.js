function addTask() {
    let input = document.getElementById("taskInput");
    let taskText = input.value;

    if (taskText === "") {
        alert("Please enter a task");
        return;
    }

    let li = document.createElement("li");

    let span = document.createElement("span");
    span.textContent = taskText;

    let buttonGroup = document.createElement("div");

    // ✅ COMPLETE BUTTON
    let completeBtn = document.createElement("button");
    completeBtn.textContent = "Complete";

    completeBtn.onclick = function () {
        span.classList.toggle("completed");
    };

    // ✏️ EDIT BUTTON
    let editBtn = document.createElement("button");
    editBtn.textContent = "Edit";

    editBtn.onclick = function () {
        let newTask = prompt("Edit your task:", span.textContent);
        if (newTask !== null && newTask !== "") {
            span.textContent = newTask;
        }
    };

    // ❌ DELETE BUTTON
    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";

    deleteBtn.onclick = function () {
        li.remove();
    };

    buttonGroup.appendChild(completeBtn);
    buttonGroup.appendChild(editBtn);
    buttonGroup.appendChild(deleteBtn);

    li.appendChild(span);
    li.appendChild(buttonGroup);

    document.getElementById("taskList").appendChild(li);

    input.value = "";
}

// 🧹 CLEAR ALL FUNCTION
function clearAllTasks() {
    document.getElementById("taskList").innerHTML = "";
}