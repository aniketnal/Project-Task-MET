let addbtn = document.querySelector("#add-todo");

addbtn.addEventListener("click", () => {
  let abc = document.querySelector(".abc");
  abc.classList.remove("d-none");
});
let cancelbtn = document.querySelector("#cancelbtn");

cancelbtn.addEventListener("click", () => {
  let abc = document.querySelector(".abc");
  abc.classList.add("d-none");
});

let savebtn = document.querySelector("#savebtn");

let inp1 = document.querySelector("#inp-1");
let inp2 = document.querySelector("#inp-2");
let inp3 = document.querySelector("#inp-3");

savebtn.addEventListener("click", () => {
  let data = {
    id: Date.now(),
    todo: inp1.value,
    description: inp2.value,
    priority: inp3.value,
  };

  let list = localStorage.getItem("items");
  list = list === null ? [] : JSON.parse(list);

  list.unshift(data);
  localStorage.setItem("items", JSON.stringify(list));
  Swal.fire({
    title: "Success!",
    text: "Task Added",
    icon: "success",
  });

  inp1.value = "";
  inp2.value = "";
  inp3.value = "";
});

function taskfunc() {
  let taskList = localStorage.getItem("items");
  taskList = JSON.parse(taskList);



  let lower = document.querySelector("#lower");

  let task = taskList.map((value) => {
    return (value = `<div id="div-1">
        <div id="head">
            <div id="head-text-1">${value.todo}</div>
            <div id="head-status">
                ${value.priority}
            </div>
        </div>
        <div id="tail"><div id="para">${value.description}</div>
        <div><button class="delete" data-id="${value.id}"><i class="fa fa-trash-o" aria-hidden="true"></i></button></div></div>
        </div>`);
  });

  lower.innerHTML = task.join("");
}
taskfunc();

function deltask() {
  let deltask = document.querySelectorAll(".delete");

  deltask.forEach((value) => {
    console.log(value); // will return individual buttons, so har value ko event listner add krdo.

    value.addEventListener("click", () => {
      //jo bhi button clicked hai, uski id must be returned
      let id = value.dataset.id;
      console.log(id); //returns id as number.

      //now, blogs lo and remove blog with certain id
      let newtask = localStorage.getItem("items")
        newtask = JSON.parse(newtask);

        newtask = newtask.filter((temp) => {
            return temp.id != id;
         });
      localStorage.setItem("items", JSON.stringify(newtask));
      taskfunc();
    });
  });
}

deltask();
