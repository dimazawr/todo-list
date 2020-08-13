import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleForm, toggleRecord, cleanRecord, saveTodosBeforeRec, playRecord, togglePlay } from '../redux/actions';
import { RootState } from '../redux/rootReducer';
import { Button } from './Button';
import { BsFillCaretRightFill, BsFillCircleFill, BsFillSquareFill, BsFillTrashFill } from 'react-icons/bs';



export const ControlsBar: React.FC = () => {

    const isFormOpen = useSelector((state: RootState) => state.isFormOpen);
    const dispatch = useDispatch();

    // State for the buttons 
    const [recordDisabled, setRecordDisabled] = useState(false);
    const [stopDisabled, setStopDisabled] = useState(true);
    const [playDisabled, setPlayDisabled] = useState(true);





    const btnText:string = isFormOpen ? 'Close' : 'Add todo';


    const toggleF = () => {
        dispatch(toggleForm());
    }

    const record = () => {
        setRecordDisabled(true);
        setStopDisabled(false);
        dispatch(toggleRecord(true));
        dispatch(saveTodosBeforeRec());
    }
  
    const stop = () => {
        setRecordDisabled(false);
        setStopDisabled(false);
        dispatch(toggleRecord(false));
        setPlayDisabled(false);
    }

    const play = () => {
        dispatch(togglePlay(true));
        dispatch(playRecord());
    }

    const clean = () => {
        dispatch(cleanRecord());
        // just in case someone clicks it while the record is playing
        dispatch(toggleRecord(false));
        setRecordDisabled(false);
        dispatch(togglePlay(false));
        setPlayDisabled(true);
    }


    return (
        <div className="controls-bar">
            <Button content={btnText} handleClick={toggleF} />
            <Button content={<BsFillCircleFill size="1.1rem" />} handleClick={record} disabledFromProps={recordDisabled} />
            <Button content={<BsFillSquareFill size="1rem" />} handleClick={stop} disabledFromProps={stopDisabled} />
            <Button content={<BsFillCaretRightFill size="1.6rem" />} handleClick={play} disabledFromProps={playDisabled}/>
            <Button content={<BsFillTrashFill size="1.3rem" />} handleClick={clean} />
        </div>
    )
}