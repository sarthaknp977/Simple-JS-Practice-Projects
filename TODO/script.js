let addItemBtn = document.querySelector(".add-btn");
let removeItemBtn = document.querySelector(".remove-btn");
let taskArea = document.querySelector(".task-area");
let inp = document.querySelector("#task");

let date = new Date();
date = date.toString().split(" ");
document.querySelector("#date").textContent =
  date[1] + "-" + date[2] + "-" + date[3];

var li;
// taskArea.appendChild(li);

taskArea.textContent = " ";
let i = 0;

addItemBtn.addEventListener("click", function () {
  if (inp.value.trim() !== "") {
    i = localStorage.getItem("noOfItems");
    if (i === null) {
      i = 0;
    }
    i++;

    li = document.createElement("li");
    li.innerHTML = inp.value.trim();

    taskArea.appendChild(li);

    localStorage.setItem(`key${i}`, li.innerHTML);
    localStorage.setItem("noOfItems", i);
    inp.value = "";
  }
});

removeItemBtn.addEventListener("click", function () {
  removeLastItem();
});

let noOfItems = localStorage.getItem("noOfItems");

function removeLastItem() {
  if (i > 0) {
    taskArea.removeChild(taskArea.querySelector("li:last-child"));

    localStorage.removeItem(`key${i}`);
    i--;
    localStorage.setItem("noOfItems", i);
  }
}

for (var j = 1; j <= noOfItems; j++) {
  var li = document.createElement("li");
  taskArea.appendChild(li);
  li.innerHTML += localStorage.getItem(`key${j}`);
}

// function loadTasks() {
//   for (let i = 0; i < localStorage.length; i++) {
//     let task = localStorage.getItem(localStorage.key(i));
//     if (task) {
//       addTask(task);
//     }
//   }
// }

// loadTasks();
