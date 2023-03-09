import { useState } from 'react';
import Board from './components/Board';

import {calculateWinner} from './helper.js'

const Root = () => {

    const [board, setBoard] = useState(Array(9).fill(null));
    const [nextStep, setNextStep] = useState(true);
    const [winner, setWinner] = useState('');

    const clickFiled = (el, index) => {
        if(winner) return null;

        const boardCopy = [...board];

        if(!calculateWinner(boardCopy) && boardCopy[index] === null) {
            boardCopy[index] = nextStep ? 'X' : 'O';
            setBoard(boardCopy);
            setNextStep(!nextStep);
        }

        if(calculateWinner(boardCopy)) {
            setWinner(nextStep ? 'X' : 'O');
            return null;            
        }
    }

    const resetGame = () => {
        setBoard(Array(9).fill(null));
        setNextStep(true);
        setWinner(''); 

    }

  return (
    <div  style={{
            background: 'rgb(6, 2, 41)', 
            height: '890px',
            width: 'fit-content',
            marginTop: 'fit-content',
            marginBottom: '100px',
            padding: '15px',
        }} 
        className='wrapperM'>

        <Board board={board} clickFiled={clickFiled} nextStep={nextStep} winner={winner} resetGame={resetGame} />
    </div>
  );
};

export default Root;