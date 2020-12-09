import React from 'react';
import { AddTodoForm } from './components/AddTodoForm';
import { ControlsBar } from './components/ControlsBar';
import { TodoList } from './components/TodoList/TodoList';
import { useSelector } from 'react-redux';
import { RootState } from './redux/rootReducer';

export const App: React.FC = () => {

  const isFormOpen = useSelector((state: RootState) => state.isFormOpen);


  return (
    <div className="container">
      <ControlsBar />
      { isFormOpen && <AddTodoForm/> }
      <TodoList />
    </div>
  );
}

export default App;
