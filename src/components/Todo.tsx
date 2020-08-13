import React, { useState } from 'react';
import { TodoControls } from './TodoControls';
import { UpdateTodo } from './UpdateTodo';

type Props = {
    id: string,
    title: string,
    desc: string,
    date: string | number
  }

export const Todo: React.FC<Props> = ({id, title, desc, date}) => {

    const [updateMode, setUpdateMode] = useState(false);

    const body = (id: string, updateMode: boolean, setUpdateMode: React.Dispatch<React.SetStateAction<boolean>>) => {
        if(!updateMode) {
            return (
                <div className="todo-content">
                <h4 className="todo-title">{title}</h4>
                <span className="todo-date">{date}</span>
                <p className="todo-desc">{desc}</p>
                </div>
            )
        } else {
            return <UpdateTodo id={id} titleVal={title} descVal={desc} updateMode={updateMode} setUpdateMode={setUpdateMode}/>
        }
    };

    const todoBody = body(id, updateMode, setUpdateMode)

    return (
        <li className="todo" key={id}>
            {!updateMode && <TodoControls id={id} setUpdateMode={setUpdateMode} updateMode={updateMode}/>}
            {todoBody}
        </li>
    )
}