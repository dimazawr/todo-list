import React, { useState } from 'react';
import moment from 'moment';
import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';
import { addTodo,toggleForm } from '../redux/actions';
import { TodoForm } from './TodoForm';


export const AddTodo: React.FC = () => {

    const dispatch = useDispatch();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        dispatch(addTodo({
            id: nanoid(8),
            title: title,
            desc: description,
            date: moment().format('MMMM Do YYYY')
        }));
        dispatch(toggleForm());
        setTitle('');
        setDescription('');
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
                    buttonText={"Add"}/>
        </>
    )
} 