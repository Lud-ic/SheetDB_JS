import {
  addTaskStorage,
  getTasksStorage,
  removeTaskStorage,
  updateTaskStorage,
} from "./repository.js";

document.querySelector("#form").addEventListener("submit", (event) => {
  event.preventDefault();
  saveTask();
});

const listElement = document.querySelector("ul");
let selectedTaskToEdit = null;

async function saveTask() {
  const name = document.querySelector("#name").value;
  const task = {
    name,
    done: false,
  };
  if (selectTaskToEdit) {
    await updateTaskStorage(selectedTaskToEdit.name, task);
  } else {
    await addTaskStorage(task);
  }
  drawList();
}

function selectTaskToEdit(task) {
  document.querySelector("#name").value = task.name;
  selectedTaskToEdit = task;
}

function makeItem(task) {
  const liElement = document.createElement("li");
  liElement.textContent = task.name;

  const buttonElement = document.createElement("button");
  buttonElement.textContent = "Apagar";
  buttonElement.addEventListener("click", async () => {
    await removeTaskStorage(task.name);
    drawList();
  });
  liElement.appendChild(buttonElement);

  const buttonEditElement = document.createElement("button");
  buttonEditElement.textContent = "Editar";
  buttonEditElement.addEventListener("click", () => {
    selectTaskToEdit(task);
  });
  liElement.appendChild(buttonEditElement);

  return liElement;
}

async function drawList() {
  const tasks = await getTasksStorage();
  listElement.innerText = "";
  tasks.forEach((task) => {
    listElement.appendChild(makeItem(task));
  });
}

drawList();