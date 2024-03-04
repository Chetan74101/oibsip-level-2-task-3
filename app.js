const form = document.getElementById("add-form");
const input = document.getElementById("input");
const pendingList = document.getElementById("pending-list");
const completedList = document.getElementById("completed-list");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const newTodo = {
    text: input.value,
    completed: false,
  };
  addTodo(newTodo);
  input.value = "";
});

function addTodo(todo) {
  const li = document.createElement("li");
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.checked = todo.completed;
  checkbox.addEventListener("change", () => {
    todo.completed = checkbox.checked;
    updateList();
  });
  li.appendChild(checkbox);
  li.appendChild(document.createTextNode(todo.text));
  if (todo.completed) {
    li.classList.add("completed");
    completedList.appendChild(li);
  } else {
    pendingList.appendChild(li);
  }
}

function updateList() {
  pendingList.innerHTML = "";
  completedList.innerHTML = "";
  for (const todo of todos) {
    addTodo(todo);
  }
}

const todos = [
  {
    text: "Task 1",
    completed: true,
  },
  {
    text: "Task 2",
    completed: false,
  },
];

updateList();