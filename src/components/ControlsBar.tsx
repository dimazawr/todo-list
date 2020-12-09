import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleForm, toggleRecord, cleanRecord, saveTodosBeforeRec, playRecord, togglePlay, cleanSavedTodos } from '../redux/actions';
import { RootState } from '../redux/rootReducer';
import { Button } from './Button/Button';
import { BsFillCaretRightFill, BsFillCircleFill, BsFillSquareFill, BsFillTrashFill } from 'react-icons/bs';



export const ControlsBar: React.FC = () => {

    const isFormOpen = useSelector((state: RootState) => state.isFormOpen);
    const isPlayOn = useSelector((state: RootState) => state.isPlayOn);
    const recordHistory = useSelector((state: RootState) => state.recordHistory);
    const dispatch = useDispatch();


    useEffect(() => {
        if(isPlayOn) {
            setRecordDisabled(true);
            setStopDisabled(true);
            setPlayDisabled(true);
        } else {
            setRecordDisabled(false);
            setPlayDisabled(false);
        }
    }, [isPlayOn])

    // State for the buttons 
    const [recordDisabled, setRecordDisabled] = useState(false);
    const [stopDisabled, setStopDisabled] = useState(true);
    const [playDisabled, setPlayDisabled] = useState(true);





    const btnText:string = isFormOpen ? 'Close' : 'Add todo';


    const handleToggleForm = () => {
        dispatch(toggleForm());
    }

    const handleRecordClick = () => {
        // erases record if there is one, to prevent UI bugs
        if(recordHistory.length) {
            dispatch(cleanRecord());
        }

        setRecordDisabled(true);
        setStopDisabled(false);
        setPlayDisabled(true);
        dispatch(toggleRecord(true));
        dispatch(saveTodosBeforeRec());
    }
  
    const handleStopClick = () => {
        setRecordDisabled(false);
        setStopDisabled(false);
        dispatch(toggleRecord(false));
        setPlayDisabled(false);
    }

    const handlePlayClick = () => {
        if(recordHistory.length) {
            dispatch(togglePlay(true));
            dispatch(playRecord());
        } else {
            return null
        }
    }

    const handleDeleteClick = () => {
        dispatch(cleanRecord());
        dispatch(cleanSavedTodos());
        // just in case someone clicks it while the record is playing
        dispatch(toggleRecord(false));
        setRecordDisabled(false);
        dispatch(togglePlay(false));
        setPlayDisabled(true);
        setStopDisabled(true);
    }


    return (
        <div className="controls-bar">
            <Button content={btnText} handleClick={handleToggleForm}/>
            <Button content={<BsFillCircleFill size="1.1rem" />} testId="btn-rec" handleClick={handleRecordClick} disabledFromProps={recordDisabled} />
            <Button content={<BsFillSquareFill size="1rem" />} testId="btn-stop" handleClick={handleStopClick} disabledFromProps={stopDisabled} />
            <Button content={<BsFillCaretRightFill size="1.6rem" />} testId="btn-play" handleClick={handlePlayClick} disabledFromProps={playDisabled}/>
            <Button content={<BsFillTrashFill size="1.3rem" />} testId="btn-delete-recHistory" handleClick={handleDeleteClick} />
        </div>
    )
}