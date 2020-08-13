import React from 'react';
import { AddTodo } from './components/AddTodo';
import { ControlsBar } from './components/ControlsBar';
import { TodoList } from './components/TodoList';
import { useSelector } from 'react-redux';
import { RootState } from './redux/rootReducer';

export const App: React.FC = () => {

  const isFormOpen = useSelector((state: RootState) => state.isFormOpen);


  return (
    <div className="container">
      <ControlsBar />
      { isFormOpen && <AddTodo/> }
      <TodoList />
    </div>
  );
}

export default App;
