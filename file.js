

const taskInput=document.querySelector(".taskinput")
const addBtn=document.querySelector("button")
const list=document.querySelector(".tasks")

let i=1



addBtn.addEventListener("click",createTask)
taskInput.addEventListener("keydown",(e)=>{
     if  (e.key === "Enter") {
        createTask()
      }
})
function createTask(){
    if(!taskInput.value==""){
        // --------------------------------
        const task=document.createElement("div")
        const inputRadio=document.createElement("input")
        const label=document.createElement("label")
        const deleteBtn=document.createElement("button")
        // -----------------------------------------
        task.classList.add("task")
        inputRadio.setAttribute("name", "task")
        inputRadio.setAttribute("id", `task${i}`)
        inputRadio.setAttribute("type", `checkbox`)
        label.setAttribute("contenteditable","")
        let criatedAttr=document.createAttribute("id")
        criatedAttr.value=i
        label.setAttributeNode(criatedAttr)
        label.setAttribute("for",`task${i}`)
        label.textContent=taskInput.value
        deleteBtn.setAttribute("class","task-delete")
        deleteBtn.addEventListener("click",deleteTask)
        deleteBtn.innerText="delete"
    // -------------------------------------
    task.appendChild(inputRadio)
    task.appendChild(label)
    task.appendChild(deleteBtn)
    list.appendChild(task) 
    i++  
    taskInput.value="" 
    }else{
        alert("task input is invalid")
    }
}

function deleteTask(e){
    e.target.parentElement.classList.add("remove")
        setTimeout(_=>e.target.parentElement.remove(),2000)
}



// console.log(  taskInput.value );
//     list.innerHTML+=`
//     <div class="task">
//                     <input name="task" id="task${i}" type="radio">
//                     <label contenteditable for="task${i}"> ${taskInput.value}</label>
//      </div>
//     `
//     i++
//     console.log(i);