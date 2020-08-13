import { FORM_TOGGLE, ADD_TODO, UPDATE_TODO, CLEAN_RECORD, DELETE_TODO, TOGGLE_RECORD, RECORD, SAVE_TODOS_BEFORE_RECORD, INIT_TODOS_ON_PLAY, TOGGLE_PLAY } from "./types";
import { ThunkDispatch, ThunkAction } from "redux-thunk";
import { RootState } from "./rootReducer";
import { Todo } from "./rootReducer";



export type Action = {
    type: string,
    payload: string | object | boolean
}


export const toggleForm = () => {
    return {
        type: FORM_TOGGLE
    }
}



export const addTodo = (todo: object) => {
    return {
        type: ADD_TODO,
        payload: todo
    }
}

export const deleteTodo = (todos: Todo[]) => {
    return {
        type: DELETE_TODO,
        payload: todos
    }
}

export const updateTodo = (todos: Todo[]) => {
    return {
        type: UPDATE_TODO,
        payload: todos
    }
}

export const toggleRecord = (bool: boolean) => {
    return {
        type: TOGGLE_RECORD,
        payload: bool
    }
}

export const saveTodosBeforeRec = () => {
    return {
        type: SAVE_TODOS_BEFORE_RECORD,
    }
}

 export const record = (todos: Todo[]) => {
    return {
        type: RECORD,
        payload: todos
    }
}

export const togglePlay = (bool: boolean) => {
    return {
        type: TOGGLE_PLAY,
        payload: bool
    }
}


export const initTodosOnPlay = () => {
    return {
        type: INIT_TODOS_ON_PLAY
    }
}


export const playRecord = ():ThunkAction<void, RootState, unknown, any> => (dispatch: ThunkDispatch<RootState, any, any>, getState: () => RootState) => {

    dispatch(initTodosOnPlay());
    const recHistory: Todo[] | [] = getState().recordHistory;
    recHistory.forEach((todo: Todo, index: number) => {
        setTimeout(() => {
            dispatch(addTodo(todo))
            if(index === (recHistory.length - 1)){
                dispatch(togglePlay(false));
            }
        }, 1000 * (index + 1))
    });
} 


export const cleanRecord = () => {
    return {
        type: CLEAN_RECORD
    }
}