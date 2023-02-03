import { ADD_TASK, REMOVE_TASK, EDIT_TASK, CHANGE_TO_EDITOR } from "../actions"

const INITIAL_STATE = {
    tasks: [],
    editor: false,
    idToEdit: 0,
}


const reducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case ADD_TASK:
            return {
                ...state,
                tasks: [...state.tasks, action.task]
            }
        case REMOVE_TASK:
            return {
                ...state,
                tasks: state.tasks.filter((e) => e.id !== action.id)
            }
        case EDIT_TASK:
            return {
                ...state,
                tasks: action.todo
            }
        case CHANGE_TO_EDITOR:
            return {
                ...state,
                editor: !state.editor,
                idToEdit: action.id
            }
        default:
            return state            
    }
}


export default reducer;