import './styles.css';

import {
    projectFactory
} from './projects'

//function to build whole interface using other functions
export function buildInterface(){
    buildNavBar();
    buildProjectBar();
    buildTaskArea();

};


let projectCollection = []

//function to add title/nav bar
function buildNavBar(){
    //Contains Logo
    //Contains add task button
    const headerBar = document.createElement('div');
    const headerText = document.createElement('div');
    const addTask = document.createElement('button')

    headerBar.classList.add('heading');
    headerText.classList.add('title');
    addTask.classList.add('task-button');
    headerBar.appendChild(headerText);

    headerText.innerHTML = 'WhatToDo'
    addTask.innerHTML = '+'
    headerBar.appendChild(addTask);
    document.body.prepend(headerBar);

}

//function to add project bar
function buildProjectBar(){
    //contains list of all projects
    //contains a button to add a project wich creates a new project object and adds to dom
    //You need to be able to select which project you want so it must be a clickable item
    const content = document.getElementById('content');
    const projectNav = document.createElement('div');
    const projectHeading = document.createElement('div');
    const projectList = document.createElement('ul')
    const addProjectButton = document.createElement('button');

    projectNav.classList.add('project-nav');
    projectHeading.classList.add('project-heading');
    projectList.id = 'project-list'
    addProjectButton.classList.add('project-button');
    projectHeading.innerHTML = 'Projects'
    addProjectButton.innerHTML = 'Add Project'

    addProjectButton.addEventListener('click', function() {

        let title = prompt("Enter Project Name")
        addProject(title);

    })


    projectNav.appendChild(projectHeading);
    projectNav.appendChild(projectList);
    projectNav.appendChild(addProjectButton);

    content.appendChild(projectNav);


    projectCollection.push(projectFactory('General'))
    refreshProjects()

}

function emptyProjectList(){
    const projectList = document.getElementById('project-list')
    while (projectList.firstChild){
        projectList.removeChild(projectList.firstChild);
    }
}

function populateProjectList(){
    const projectList = document.getElementById('project-list')
    for (let i = 0; i < projectCollection.length; i++){
        const projectItem = document.createElement('li');
        projectItem.innerHTML = projectCollection[i].getProjectName();
        projectList.appendChild(projectItem);
    }
}

function refreshProjects(){
    emptyProjectList();
    populateProjectList();

}

function switchProject(){

}

function addProject(projectName){
    let newProject = projectFactory(projectName);
    projectCollection.push(newProject);
    console.log(projectCollection);
    refreshProjects();
}

//function to add task area
function buildTaskArea(){
    //contains list of all tasks related to selected project
    console.log(2);

}