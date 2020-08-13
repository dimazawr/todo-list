import { Todo } from "./rootReducer";

export const FORM_TOGGLE = "FORM_TOGGLE";
export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const UPDATE_TODO = "UPDATE_TODO";

export const TOGGLE_RECORD = "TOGGLE_RECORD";
export const SAVE_TODOS_BEFORE_RECORD = "SAVE_TODOS_BEFORE_RECORD";
export const RECORD = "RECORD";
export const TOGGLE_PLAY = "TOGGLE_PLAY";
export const INIT_TODOS_ON_PLAY = "INIT_TODOS_ON_PLAY";
export const CLEAN_RECORD = "CLEAN_RECORD";

 interface FormToggleAction {
    type: typeof FORM_TOGGLE
  }

  interface AddTodoAction {
    type: typeof ADD_TODO
    payload: Todo
  }

  interface DeleteTodoAction {
    type: typeof DELETE_TODO
    payload: Todo[]
  }

  interface UpdateTodoAction {
    type: typeof UPDATE_TODO
    payload: Todo[]
  }


  interface ToggleRecordAction {
    type: typeof TOGGLE_RECORD
    payload: boolean
  }


  interface SaveTodosAction {
    type: typeof SAVE_TODOS_BEFORE_RECORD
  }

  interface RecordAction {
    type: typeof RECORD
    payload: Todo[]
  }

  interface TogglePlayAction {
    type: typeof TOGGLE_PLAY
    payload: boolean
  }

  interface InitTodosOnPlayAction {
    type: typeof INIT_TODOS_ON_PLAY
  }


  interface CleanRecordAction {
    type: typeof CLEAN_RECORD
  }

  export type AppActionTypes = FormToggleAction | 
  AddTodoAction | 
  DeleteTodoAction | 
  UpdateTodoAction | 
  ToggleRecordAction | 
  SaveTodosAction | 
  RecordAction | 
  TogglePlayAction | 
  InitTodosOnPlayAction | 
  CleanRecordAction;