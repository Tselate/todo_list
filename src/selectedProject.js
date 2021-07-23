import {NPexported} from "./newproject.js"
import {projects} from "./newproject.js"
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

//Save new array to local storage 
//let newTaskName = JSON.parse(localStorage.getItem("taskArrayKey")) || []

const Local_Storage_selected_Project_Id_Key = "project.selectedId"
let selectedProjectId = localStorage.getItem(Local_Storage_selected_Project_Id_Key)

projectList.addEventListener("click", e => {
    if (e.target.tagName.toLowerCase() === "li") {   
        selectedProjectId = e.target.id
        taskDiv.innerHTML = "Project: Yes" 
        newTask.style.visibility = "visible"
    }
    
})

addNewTask.addEventListener("click", function printOut () {
    const toDo = new task (tTitle.value, tDescription.value, tDueDate.value, tPriorty.value, tNotes.value, tNameId)
    const selectedProject = projects.find(project => project.id = selectedProjectId)
    selectedProject.tasks.push(toDo)
    console.log(selectedProject)
    save()
   
}) 

function save () {
    localStorage.setItem("projectsKey", JSON.stringify(projects))
    localStorage.setItem(Local_Storage_selected_Project_Id_Key, selectedProjectId)
}




// projectList.addEventListener("click", function addTaskandMakeArray (e) {
//     let idOfProjectElement = e.target.id
//     let selectedProject = document.getElementById(idOfProjectElement)
//     let projectName = projects.filter(function mine (project) {
//        return project === selectedProject.innerHTML 
//     })
    
//     console.log(projectName)

//     taskDiv.innerHTML = "Project: " + projectName
//     newTask.style.visibility = "visible"

//     addNewTask.addEventListener("click", function printOut () {
//         tNameId = selectedProject.innerHTML
//         const toDo = new task (tTitle.value, tDescription.value, tDueDate.value, tPriorty.value, tNotes.value, tNameId)
//         const selected = projects.find(toDoTask => toDoTask.id === selectedId)
//         selected.newTaskName.push(toDo)
//        // newTaskName.push(toDo)
//         localStorage.setItem("taskArrayKey", JSON.stringify(newTaskName))
//     })     
//     console.log(newTaskName)
//     console.log(selected)
// })



//  projectList.addEventListener("click", function displayTasks (e) {
//     let idOfProjectElement = e.target.id
//     let selectedProject = document.getElementById(idOfProjectElement)
//     //localStorage.clear("taskArrayKey")    
//     console.log(newTaskName)
//     const toDo = new task 
//     for (let i = 0; i < newTaskName.length; i++) {
//         if (newTaskName[i].taskNameId === selectedProject.innerHTML) {
//            console.log(newTaskName[i].taskNameId)
        
//         }
//     }

   
// })


export function slectedProjectExported () {
    newTask.addEventListener("click", createNewTask)
    //displayData(selectedProject.innerHTML)
}


