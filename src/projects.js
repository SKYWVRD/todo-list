import {
    taskFactory
} from './tasks.js'


const projectFactory = (name) => {
    let projectList = [];



    const getProjects = () => projectList;


    return {
        getProject
    }
}