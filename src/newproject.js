
const newProjectButton = document.getElementById("new-project-btn")
const newProjectEl = document.getElementById("new-project-el")
const addNewProject  = document.getElementById("add-project")
const cancelNewProject = document.getElementById("cancel-project")
const projectNameInput = document.getElementById("project-input")
const projectList = document.getElementById("project-list")
const deleteButton = document.getElementById("delete-button")


//retrieve items from local storage and render onto page
export let projects = JSON.parse(localStorage.getItem("projectsKey")) || []
let projectsFromLocalStorage = JSON.parse(localStorage.getItem("projectsKey"))

if (projectsFromLocalStorage) {
    projects = projectsFromLocalStorage
    renderProjects()
}

//new project element (input and buttons) should stay hidden until New Project button is clicked 
newProjectEl.style.visibility = "hidden"
newProjectButton.style.visibility = "visible"
deleteButton.style.visibility = "hidden"

//once the cancel button is clicked, bring back New Project button and hide New Project el
cancelNewProject.addEventListener("click", newProjectCancelled)
function newProjectCancelled () {
    newProjectEl.style.visibility = "hidden"
    newProjectButton.style.visibility = "visible" 
}

//save the input value as the name of the new project and add to the project list array
addNewProject.addEventListener("click", function getInputValue () {
    let projectName = projectNameInput.value 
    if (projectName == null || projectName === " ") return
    projectNameInput.value = " "
    projects.push(projectName)
    localStorage.setItem("projectsKey", JSON.stringify(projects))
    newProjectButton.style.visibility = "visible"
    newProjectEl.style.visibility = "hidden"
    renderProjects()
})


//render out the list of projects on the page
function renderProjects () {  
    let projectItems = " "
    for (let i = 0; i < projects.length; i++) { 
        let uniqueID = Math.floor(Math.random() * Date.now())
        projectItems += `
            <ul class="project-item"> 
             <li id="${uniqueID}">${projects[i]}</li>
            </ul>
       `
    }
    projectList.innerHTML = projectItems 

}

//Delete slected project item from projects array and re-render out list of projects
projectList.addEventListener("click", function deleteSelectedProject (e) {
    if (e.target.tagName.toLowerCase() === "li") {
        let idOfElement = e.target.id
        let selectedElement = document.getElementById(idOfElement)
        newProjectEl.style.visibility = "hidden"
        deleteButton.style.visibility = "visible"

        deleteButton.addEventListener('click', function deletedSelected () {
            let indexOfSelected = projects.indexOf(selectedElement.innerHTML)
            console.log(indexOfSelected)
            projects.splice(indexOfSelected, 1)
            localStorage.setItem("projectsKey", JSON.stringify(projects))
            renderProjects()
            deleteButton.style.visibility = "hidden"
            window.location.reload()
        })
    }
   
    
})

//create a new project 
function createNewProject () {
    newProjectButton.style.visibility = "hidden"
    deleteButton.style.visibility = "hidden"
    newProjectEl.style.visibility = "visible"
}

export function NPexported () { 
    newProjectButton.addEventListener("click", createNewProject)

}