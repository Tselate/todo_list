// import {NPexported} from "./newproject.js"
// import {projects} from "./newproject.js"
// NPexported()

// const newTask = document.getElementById("new-task")
// const newTaskElement = document.getElementById("new-task-el")
// const addNewTask  = document.getElementById("add-task")
// const cancelNewTask = document.getElementById("cancel-task")
// const deleteTask = document.getElementById("delete-task")
// const taskDiv = document.getElementById("task-div")
// const projectList = document.getElementById("project-list")
// //task info
// let tTitle = document.getElementById("task-title")
// let tDescription = document.getElementById("task-description")
// let tDueDate = document.getElementById("task-dueDate")
// let tPriorty = document.getElementById("task-priorty")
// let tNotes = document.getElementById("task-notes")
// //local storage 
// const Local_Storage_selected_Project_Id_Key = "project.selectedId"
// let selectedProjectId = localStorage.getItem(Local_Storage_selected_Project_Id_Key)

// //Create a new task as an object 
// class task {
//     constructor(title, description, dueDate, priorty, notes) {
//       this.taskTitile = title
//       this.taskDescription = description
//       this.taskDueDate = dueDate
//       this.taskPriorty = priorty
//       this.taskNotes = notes
//     }
//   }


// //new taskelement (input and buttons) should stay hidden until New task button is clicked 
// taskDiv.innerHTML = "No Tasks at the Moment"
// newTask.style.visibility = "hidden"
// deleteTask.style.visibility = "hidden"
// newTaskElement.style.visibility = "hidden"

// //create a new task
// function createNewTask () {
//     newTask.style.visibility = "hidden"
//     newTaskElement.style.visibility = "visible"
// }

// //once the cancel button is clicked, bring back New Project button and hide New Project el
// cancelNewTask.addEventListener("click", newTaskCancelled)
// function newTaskCancelled () {
//     newTaskElement.style.visibility = "hidden"
//     newTask.style.visibility = "visible" 
// }


// projectList.addEventListener("click", e => {
//     if (e.target.tagName.toLowerCase() === "li") {   
//         selectedProjectId = e.target.id
//         taskDiv.innerHTML = "Project: Yes" 
//         newTask.style.visibility = "visible"
//         renderTasks()
//     }
    
// })

// const selectedProject = projects.find(project => project.id = selectedProjectId)
//     console.log(selectedProject)



// addNewTask.addEventListener("click", function printOut () {
//     const toDo = new task (tTitle.value, tDescription.value, tDueDate.value, tPriorty.value, tNotes.value)
//     const selectedProject = projects.find(project => project.id = selectedProjectId)
//     console.log(selectedProject)
//     selectedProject.tasks.push(toDo)
    
//     renderTasks()
//     save() 
// }) 

// function save () {
//     localStorage.setItem("projectsKey", JSON.stringify(projects))
//     localStorage.setItem(Local_Storage_selected_Project_Id_Key, selectedProjectId)
// }

// //render out the list of projects on the page
// function renderTasks () {  
//     const selectedProject = projects.find(project => project.id = selectedProjectId)
//     console.log(selectedProject.tasks)
//     let taskItems = " "
//     let deleteID = "delete-tasks"
//     for (let i = 0; i < selectedProject.tasks.length; i++) { 
//         let uniqueID = Math.floor(Math.random() * Date.now())
//         taskItems += `
//             <div class="task-item" id="${uniqueID}"> 
//                 Title: ${selectedProject.tasks[i].taskTitile} <br>
//                 Description: ${selectedProject.tasks[i].taskDescription}<br>
//                 Due Date: ${selectedProject.tasks[i].taskDueDate} <br>
//                 Priorty: ${selectedProject.tasks[i].taskPriorty} <br>
//                 Notes: ${selectedProject.tasks[i].taskNotes} <br>
//                 <button id="${deleteID}">Delete</button><br>
//                 <br>
//             </div>  
//        `
//        taskDiv.innerHTML = taskItems
//     }


// }


// export function slectedProjectExported () {
//     newTask.addEventListener("click", createNewTask)
//     //displayData(selectedProject.innerHTML)
// }


