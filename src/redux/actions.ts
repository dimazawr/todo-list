import { FORM_TOGGLE, ADD_TODO, UPDATE_TODO, CLEAN_RECORD, DELETE_TODO, TOGGLE_RECORD, RECORD, SAVE_TODOS_BEFORE_RECORD, INIT_TODOS_ON_PLAY, TOGGLE_PLAY, AppActionTypes, RecordTypes, CLEAN_SAVED_TODOS } from "./types";
import { ThunkDispatch, ThunkAction } from "redux-thunk";
import { RootState } from "./rootReducer";
import { Todo } from "./rootReducer";




export const toggleForm = ():AppActionTypes => {
    return {
        type: FORM_TOGGLE
    }
}



export const addTodo = (todo: Todo):AppActionTypes => {
    return {
        type: ADD_TODO,
        payload: todo
    }
}

export const deleteTodo = (todos: Todo[]):AppActionTypes => {
    return {
        type: DELETE_TODO,
        payload: todos
    }
}

export const updateTodo = (todos: Todo[]):AppActionTypes => {
    return {
        type: UPDATE_TODO,
        payload: todos
    }
}

export const toggleRecord = (bool: boolean):AppActionTypes => {
    return {
        type: TOGGLE_RECORD,
        payload: bool
    }
}

export const saveTodosBeforeRec = ():AppActionTypes => {
    return {
        type: SAVE_TODOS_BEFORE_RECORD,
    }
}

 export const record = (recAction:RecordTypes):AppActionTypes => {
    return {
        type: RECORD,
        payload: recAction
    }
}

export const togglePlay = (bool: boolean):AppActionTypes => {
    return {
        type: TOGGLE_PLAY,
        payload: bool
    }
}


export const initTodosOnPlay = ():AppActionTypes => {
    return {
        type: INIT_TODOS_ON_PLAY
    }
}


export const playRecord = ():ThunkAction<void, RootState, unknown, any> => (dispatch: ThunkDispatch<RootState, any, any>, getState: () => RootState) => {

    dispatch(initTodosOnPlay());
    const recHistory: RecordTypes[] | [] = getState().recordHistory;
    recHistory.forEach((action:RecordTypes, index:number) => {
        setTimeout(() => {
            dispatch({...action})
            if(index === (recHistory.length - 1)){
                dispatch(togglePlay(false));
            }
        }, 1000 * (index + 1))
    });

} 


export const cleanRecord = ():AppActionTypes => {
    return {
        type: CLEAN_RECORD
    }
}


export const cleanSavedTodos = ():AppActionTypes => {
    return {
        type: CLEAN_SAVED_TODOS
    }
}