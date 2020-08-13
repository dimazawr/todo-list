import React from 'react';
import { Button } from './Button';



type Props = {
    handleSubmit: (e: React.FormEvent) => void,
    handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    handleTextareaChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void,
    buttonText: string,
    inputValue?: string,
    textareaValue?: string
}


export const TodoForm: React.FC<Props> = ({ handleSubmit, handleInputChange, handleTextareaChange, buttonText, inputValue, textareaValue }) => {

    return (
        <form className="form" onSubmit={handleSubmit}>
            <input type="text" required={true} defaultValue={inputValue} name="todoTitle" id="todoTitle" onChange={handleInputChange} placeholder="Todo Title"/>
            <textarea 
                className="desc-textarea" 
                rows={5} 
                cols={33} 
                placeholder="Write a description of your todo..." 
                name="todoDesc" 
                defaultValue={textareaValue}
                required={true}
                maxLength={280} 
                onChange={handleTextareaChange} />
            < Button content={buttonText} type="submit" />
        </form>
    )
} 