let inputArea = document.getElementById("taskInput");
let addBtn = document.getElementById("addBtn");
let allBtn = document.getElementById("all");
let completedBtn = document.getElementById("completed");
let pendingBtn = document.getElementById("pending");
let todoList = document.getElementById("todoList");
let taskCounter = document.getElementById("taskCounter");

document.addEventListener("DOMContentLoaded", loadTasks);

addBtn.addEventListener("click", () => {
  let inputText = inputArea.value.trim();
  if (inputText === "") {
    alert("Please add your task here...");
    return;
  }
  let li = createTaskElement(inputText, false);
  todoList.appendChild(li);
  inputArea.value = "";
});

function createTaskElement(text, completed) {
  let li = document.createElement("li");

  let taskText = document.createElement("span");
  taskText.textContent = text;

  if (completed === true) {
    taskText.classList.add("completed");
  }

  let checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.checked = completed;

  checkbox.addEventListener("change", () => {
    if (checkbox.checked === true) {
      taskText.classList.add("completed");
    } else {
      taskText.classList.remove("completed");
    }
    saveTasks();
  });

  li.appendChild(checkbox);
  li.appendChild(taskText);

  let btnContainer = document.createElement("div");

  let deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.classList.add("deleteBtn");
  deleteBtn.addEventListener("click", () => {
    li.remove();
    saveTasks();
  });

  let editBtn = document.createElement("button");
  editBtn.textContent = "Edit";
  editBtn.classList.add("editBtn");
  editBtn.addEventListener("click", () => {
    if (checkbox.checked) {
      alert("Task is already completed");
      return;
    }
    inputArea.value = taskText.textContent;
    li.remove();
    saveTasks();
  });

  btnContainer.append(editBtn, deleteBtn);
  li.append(btnContainer);
  return li;
}

completedBtn.addEventListener("click", () => {
  document.querySelectorAll("#todoList li").forEach((li) => {
    let checkbox = li.querySelector("input[type='checkbox']");

    if (checkbox.checked) {
      li.style.display = "flex";
    } else {
      li.style.display = "none";
    }
  });
});

pendingBtn.addEventListener("click", () => {
  document.querySelectorAll("#todoList li").forEach((li) => {
    let checkbox = li.querySelector("input[type='checkbox']");

    if (!checkbox.checked) {
      li.style.display = "flex";
    } else {
      li.style.display = "none";
    }
  });
});

allBtn.addEventListener("click", () => {
  document.querySelectorAll("#todoList li").forEach((li) => {
    li.style.display = "flex";
  });
});

function saveTasks() {
  let tasks = [];
  document.querySelectorAll("#todoList li").forEach((li) => {
    let text = li.querySelector("span").textContent;
    let completed = li.querySelector("input[type=checkbox]").checked;
    tasks.push({ text, completed });
  });
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.forEach((task) => {
    let li = createTaskElement(task.text, task.completed);
    todoList.appendChild(li);
  });
}
