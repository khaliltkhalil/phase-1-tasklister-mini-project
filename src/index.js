document.addEventListener("DOMContentLoaded", () => {

  // your code here
  


  const form = document.getElementById("create-task-form");
  form.addEventListener("submit", (e) => {
    e.preventDefault()
    const input = form.elements["new-task-description"];
    const priority = form.elements['priority'].value;
    const inputText = input.value;
    creatToDoItem(inputText, priority);
    input.value = "";
  })
  const input = form.elements["new-task-description"];
  const inputText = input.value;
});

function creatToDoItem(toDoText, priority) {
  const p = document.createElement('p');
  p.textContent = toDoText + " ";
  console.log(priority)
  p.className = priority.toLowerCase();
  const container = document.getElementById('tasks');
  container.appendChild(p);
  const deleteButton = document.createElement('button');
  deleteButton.textContent = "x";
  deleteButton.addEventListener('click', (e) => {
    e.target.parentNode.remove();
  });

  p.appendChild(deleteButton);
}
