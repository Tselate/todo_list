import {NPexported} from "./newproject.js"
NPexported()

const newTask = document.getElementById("new-task")
const newTaskElement = document.getElementById("new-task-el")
const addNewTask  = document.getElementById("add-task")
const cancelNewTask = document.getElementById("cancel-task")
const deleteTask = document.getElementById("delete-task")
const taskDiv = document.getElementById("task-div")
const projectList = document.getElementById("project-list")
//task info
let tTitle = document.getElementById("task-title")
let tDescription = document.getElementById("task-description")
let tDueDate = document.getElementById("task-dueDate")
let tPriorty = document.getElementById("task-priorty")
let tNotes = document.getElementById("task-notes")
let tNameId = "death"

//Create a new task as an object 
class task {
    constructor(title, description, dueDate, priorty, notes, tNameId) {
      this.taskTitile = title
      this.taskDescription = description
      this.taskDueDate = dueDate
      this.taskPriorty = priorty
      this.taskNotes = notes
      this.taskNameId = tNameId
    }
  }


//new taskelement (input and buttons) should stay hidden until New task button is clicked 
taskDiv.innerHTML = "No Tasks at the Moment"
newTask.style.visibility = "hidden"
deleteTask.style.visibility = "hidden"
newTaskElement.style.visibility = "hidden"

//create a new task
function createNewTask () {
    newTask.style.visibility = "hidden"
    newTaskElement.style.visibility = "visible"
}

//once the cancel button is clicked, bring back New Project button and hide New Project el
cancelNewTask.addEventListener("click", newTaskCancelled)
function newTaskCancelled () {
    newTaskElement.style.visibility = "hidden"
    newTask.style.visibility = "visible" 
}

let newTaskName = JSON.parse(localStorage.getItem("taskArrayKey")) || []


export function slectedProjectExported () {
    
    projectList.addEventListener("click", function addTaskandMakeArray (e) {
        let idOfProjectElement = e.target.id
        let selectedProject = document.getElementById(idOfProjectElement)
        taskDiv.innerHTML = "Project: " + selectedProject.innerHTML 
        newTask.style.visibility = "visible"

       

        addNewTask.addEventListener("click", function printOut (e) {
            e.preventDefault()
            tNameId = selectedProject.innerHTML
            const toDo = new task (tTitle.value, tDescription.value, tDueDate.value, tPriorty.value, tNotes.value, tNameId)
            console.log(toDo.taskTitile)
            console.log(toDo.taskDescription) 
            console.log(toDo.taskDueDate)
            console.log(toDo.taskPriorty) 
            console.log(toDo.taskNotes)
        
            newTaskName.push(toDo)
            localStorage.setItem("taskArrayKey", JSON.stringify(newTaskName))
            console.log(newTaskName)

    
        })  

        
        for (let i = 0; i < newTaskName.length; i++) {
            if (toDo.taskNameId = selectedProject.innerHTML) {
                console.log("And so we begin")
            }
        }

        newTask.addEventListener("click", createNewTask)
        //displayData(selectedProject.innerHTML)
    })
  
}


