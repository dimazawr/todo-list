import { ADD_TODO, DELETE_TODO, UPDATE_TODO, FORM_TOGGLE, TOGGLE_RECORD, RECORD, CLEAN_RECORD, SAVE_TODOS_BEFORE_RECORD, INIT_TODOS_ON_PLAY, TOGGLE_PLAY } from './types';
import { Action } from './actions';

// READ REDUX DOCS ABOUT TS AND REFACTOR


export type Todos = {
    todos: Todo[] | []
}

export type Todo = {
    id: string,
    title: string,
    desc?: string,
    date: string
  }

type isFormOpen = {
    isFormOpen: boolean
}

type Record = {
    isRecordOn: boolean,
    todosBeforeRecord: Todo[] | [],
    recordHistory: Todo[],
    isPlayOn: boolean
}



const initialState: Todos & isFormOpen & Record = {
    todos: [],
    isFormOpen: false,
    isRecordOn: false,
    todosBeforeRecord: [],
    recordHistory: [],
    isPlayOn: false
}

export type RootState = ReturnType<typeof rootReducer>

export const rootReducer = (state = initialState as any, action: Action) => {
    switch (action.type) {

        case FORM_TOGGLE:
            return {
                ...state, isFormOpen: !state.isFormOpen
            }

        case ADD_TODO:
            return {
                ...state, todos: [...state.todos, action.payload]
            }

        case DELETE_TODO:
            return {
                 ...state, todos: action.payload
            }

        case UPDATE_TODO:
            return {
                    ...state, todos: action.payload
            }

        case TOGGLE_RECORD:
            return {
                    ...state, isRecordOn: action.payload
            }


        case SAVE_TODOS_BEFORE_RECORD:
            return {
                    ...state, todosBeforeRecord: [...state.todos]
            }

        case RECORD:
            return {
                    ...state, recordHistory: state.recordHistory.concat(action.payload)
            }

        case CLEAN_RECORD:
            return {
                    ...state, recordHistory: [], todosBeforeRecord: []
            }

        case INIT_TODOS_ON_PLAY: 
            return {
                    ...state, todos: [...state.todosBeforeRecord]
            }

        case TOGGLE_PLAY:
            return {
                    ...state, isPlayOn: action.payload
            }
               
        default:
            return state;
    }
}