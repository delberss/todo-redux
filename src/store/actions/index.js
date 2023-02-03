
export const ADD_TASK = 'ADD_TASK';
export const REMOVE_TASK = 'REMOVE_TASK'
export const EDIT_TASK = 'EDIT_TASK';
export const CHANGE_TO_EDITOR = 'CHANGE_TO_EDITOR' 


export const actionAddTask = (task) => ({
    type: ADD_TASK,
    task
});


export const actionRemoveTask = (task) => ({
    type: REMOVE_TASK,
    id: task.id
});

export const actionEditTask = (todo) => ({
    type: EDIT_TASK,
    todo
});


export const actionChangeEditor = (id) => ({
    type: CHANGE_TO_EDITOR,
    id
})