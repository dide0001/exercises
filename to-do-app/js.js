const todoText=document.querySelector("#todo_text")
const todoBtn = document.querySelector("#todo")
const todoContainer = document.querySelector("#todo_container")
const todoContainerDone= document.querySelector("#todo_container_done")
const todoArr = [];

todoText.focus();


todoText.addEventListener("keypress", (e)=>{
    if(e.key == "Enter")todoBtn.click();
})

todoBtn.addEventListener("click", submitToDo)
function submitToDo(){
    const toDoObj = {text:todoText.value, done:false, id:self.crypto.randomUUID()}
    todoArr.push(toDoObj)
    console.log("todoArr", todoArr)
    showTaskArr();
}

function filterAndSortTaskArr(){
    showTaskArr();
}

function showTaskArr(){
    todoArr.forEach(elm =>{
        todoContainer.innerHTML=""
        const li = document.createElement("li")
        li.textContent=elm.text
        todoContainer.appendChild(li)
        const button = document.createElement("button")
        li.appendChild(button)
        button.textContent="done"
        const removeTask = document.createElement("button")
        li.appendChild(removeTask)
        removeTask.textContent="Delete task"
        li.addEventListener("click", function (){
            todoContainerDone.appendChild(li)
            todoText.focus()
            button.remove()
        })
  
    })
    todoText.value=""
    todoText.focus();
}


