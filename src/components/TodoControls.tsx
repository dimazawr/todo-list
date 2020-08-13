import React from 'react';
import { BsPencil,BsTrash } from 'react-icons/bs';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from './Button'
import { deleteTodo } from '../redux/actions';
import { RootState, Todo } from '../redux/rootReducer';

type Props = {
    id: string,
    updateMode: boolean,
    setUpdateMode: (updateMode: boolean) => void
}



export const TodoControls: React.FC<Props> = ({id, setUpdateMode, updateMode}) => {

    const todos = useSelector((state: RootState) => state.todos);
    const dispatch = useDispatch();

    const deleteOnClick = () => {
        const newTodos:Todo[] = todos.filter((todo: Todo) => todo.id !== id);
        dispatch(deleteTodo(newTodos));
    }

    const openEditForm = () => {
        setUpdateMode(!updateMode);
    }

    return (
        <div className='todo-controls'> 
            <Button  
                content={<BsPencil size="1.1rem"/>}
                handleClick={openEditForm}/>
            <Button 
                content={<BsTrash size="1.1rem" />}
                handleClick={deleteOnClick}/>
        </div>
    )
}