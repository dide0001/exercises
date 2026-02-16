const todoText=document.querySelector("#todo_text")
const todoBtn = document.querySelector("#todo")
const todoAmmount = document.querySelector("#todo_ammount")
const todoContainer = document.querySelector("#todo_container")
const todoContainerDone= document.querySelector("#todo_container_done")
let getLocaleStorage;

  getLocaleStorage = JSON.parse(localStorage.getItem("information"));


let todoArr = getLocaleStorage || [];

todoText.focus();


todoText.addEventListener("keypress", (e)=>{
    if(e.key == "Enter")todoBtn.click();
})
todoAmmount.addEventListener("keypress", (e)=>{
    if(e.key == "Enter")todoBtn.click();
})

todoBtn.addEventListener("click", submitToDo)
function submitToDo(){
    const toDoObj = {text:todoText.value, amount:todoAmmount.value, done:false, id:self.crypto.randomUUID()}
    todoArr.push(toDoObj)
    console.log("todoArr", todoArr)
    showTaskArr();
}

function filterAndSortTaskArr(){
    showTaskArr();
}

function showTaskArr(){
    localStorage.setItem("information", JSON.stringify(todoArr))
    todoContainer.innerHTML=""
    todoContainerDone.innerHTML=""
    todoArr.forEach(elm =>{
        const li = document.createElement("li")
        if (elm.done) {
            todoContainerDone.appendChild(li)
        } else {
            todoContainer.appendChild(li)
        }
        const taskSpan = document.createElement("span")
        taskSpan.textContent = elm.text
        const ammountSpan = document.createElement("span")
        ammountSpan.textContent = elm.amount
        li.appendChild(taskSpan)
        li.appendChild(ammountSpan)
        const button = document.createElement("button")
        li.appendChild(button)
        button.textContent="done"
        if (elm.done) {
            button.textContent="Undo"
        }
        const removeTask = document.createElement("button")
        li.appendChild(removeTask)
        removeTask.textContent="Delete task"
        button.addEventListener("click", function (){
            if (elm.done === true) {
                elm.done = false
            } else {
                elm.done = true
            }
            showTaskArr()
            todoText.focus()
        })
        removeTask.addEventListener("click", function(){
            todoArr = todoArr.filter(task => task.id !== elm.id)
            showTaskArr()
            todoText.focus()
        })
    })
    todoText.value=""
    todoAmmount.value=""
    todoText.focus();
}

showTaskArr();
