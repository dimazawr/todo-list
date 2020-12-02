import { Middleware, MiddlewareAPI } from 'redux';

import { ADD_TODO, DELETE_TODO, UPDATE_TODO } from './types';
import { record } from './actions';


export const recordingTodosMiddleware:Middleware = (store:MiddlewareAPI) => {
    return next => action => {
            let state = store.getState();
            if(state.isRecordOn) { 

                switch (action.type) {

                    case ADD_TODO:
                    case UPDATE_TODO:
                    case DELETE_TODO:
                        store.dispatch(record(action))
                        break;

                    default:
                        break;
                }

            }

            return next(action);
        }
}