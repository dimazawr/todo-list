import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTodo } from "../../redux/actions";
import { RootState, Todo } from "../../redux/rootReducer";
import { Button } from "../Button/Button";
import { UpdateTodoForm } from "../UpdateTodoForm";
import { BsPencil, BsTrash } from "react-icons/bs";

type Props = {
  id: string;
  title: string;
  desc: string;
  date: string | number;
};

export const TodoListItem: React.FC<Props> = ({ id, title, desc, date }) => {
  const [updateMode, setUpdateMode] = useState(false);

  const todos = useSelector((state: RootState) => state.todos);
  const dispatch = useDispatch();

  const deleteOnClick = () => {
    const newTodos: Todo[] = todos.filter((todo: Todo) => todo.id !== id);
    dispatch(deleteTodo(newTodos));
  };

  const openEditForm = () => {
    setUpdateMode(!updateMode);
  };

  if (!updateMode) {
    return (
      <li className="todo" key={id}>
        <div className="todo-controls">
          <Button
            content={<BsPencil size="1.1rem" />}
            handleClick={openEditForm}
            testId="btn-edit"
          />
          <Button
            content={<BsTrash size="1.1rem" />}
            handleClick={deleteOnClick}
            testId="btn-delete-todo"
          />
        </div>
        <div className="todo-content">
          <h4 className="todo-title">{title}</h4>
          <span className="todo-date">{date}</span>
          <p className="todo-desc">{desc}</p>
        </div>
      </li>
    );
  } else {
    return (
      <UpdateTodoForm
        id={id}
        titleVal={title}
        descVal={desc}
        updateMode={updateMode}
        setUpdateMode={setUpdateMode}
      />
    );
  }
};
