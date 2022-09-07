export const taskFactory = (title, description, dueDate, priority) => {

    const getTaskName = () => title;
    const getTaskDescription = () => description

    return {
        getTaskName,
        getTaskDescription,
    }
    
};