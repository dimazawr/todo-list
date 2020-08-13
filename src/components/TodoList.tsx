import React from 'react';
import { useSelector } from 'react-redux';
import { Todo } from './Todo';
import { RootState } from '../redux/rootReducer';


export const TodoList: React.FC = () => {
    const todos = useSelector((state: RootState) => state.todos);

    const todoList = todos.map(todo => {
        const {id, title, desc, date} = todo
        return <Todo key={id} id={id} title={title} desc={desc} date={date}/>
    })

    return (
        <ul className="todo-list">
            {!todoList.length && <p>There are no todos yet...</p>}
            {todoList}
        </ul>
    )
}