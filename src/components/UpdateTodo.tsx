import React, { useState } from 'react';
import moment from 'moment';
import uid from 'uid';
import { useDispatch, useSelector } from 'react-redux';
import { TodoForm } from './TodoForm';
import { updateTodo } from '../redux/actions';
import { RootState, Todo } from '../redux/rootReducer';


type Props = {
    id: string,
    updateMode: boolean,
    setUpdateMode: (updateMode: boolean) => void,
    titleVal: string,
    descVal: string
}



export const UpdateTodo: React.FC<Props> = ({id, updateMode, setUpdateMode, titleVal, descVal}) => {

    const todos:Todo[] = useSelector((state: RootState) => state.todos);

    const dispatch = useDispatch();
    const [title, setTitle] = useState(titleVal);
    const [description, setDescription] = useState(descVal);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        let updatedTodos: Todo[] = todos.map(todo => { 
                       if(todo.id === id) {
                            todo = {
                            id: uid(6),
                            title: title,
                            desc: description,
                            date: moment().format('MMMM Do YYYY')
                        }
                    }
                    return todo
                }
            );
        dispatch(updateTodo(updatedTodos));

        setUpdateMode(!updateMode)
      }
    
    const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
    }
    
    const handleDescChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setDescription(e.target.value);
    }

    return (
        <>
            <TodoForm handleSubmit={handleSubmit} 
                    handleInputChange={handleTitleChange} 
                    handleTextareaChange={handleDescChange} 
                    buttonText={"Save"}
                    inputValue={title}
                    textareaValue={description}/>
        </>
    )
} 