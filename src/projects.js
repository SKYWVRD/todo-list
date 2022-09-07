import {
    taskFactory
} from './tasks.js'


export const projectFactory = (name) => {
    let taskList = [];

    const getProjectName = () => name;
    const getTasks = () => taskList;
    const addTask = (title, description, dueDate, priority) => {
        taskList.push(taskFactory(title, description, dueDate, priority))
    }


    return {
        getProjectName, getTasks, addTask
    }
}