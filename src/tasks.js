export const taskFactory = (title, description, dueDate, priority) => {

    const getTaskName = () => title;

    return {
        title,
        description,
        dueDate,
        priority,
        getTaskName
    }
    
};