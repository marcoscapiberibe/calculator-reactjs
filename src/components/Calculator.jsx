import React, { useState } from "react";
import './Calculator.css';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

export default function Calculator() {
    const [number, setNumber] = useState('');
    const [oldNumber, setOldNumber] = useState('');
    const [operator, setOperator] = useState('');


    function inputNumber(e) {
        let input = e.target.value;
        if(number === 0) {
            setNumber(input);
        } else {
            setNumber(number + input);
        }
        
    };

    function clear(e) {
        setNumber('');
    }

    function porcent() {
        setNumber(number / 100);
    }

    function changeSign() {
        if(number > 0) {
            setNumber( - number)
        } else {
            setNumber(Math.abs(number));
        }
    }

    function operatorHandler(e) {
        let operatorInput = e.target.value;
        setOperator(operatorInput);
        setOldNumber(number);
        setNumber('');
    }

    function calculate() {
        if(operator === '/') {
            setNumber(parseFloat(oldNumber) / parseFloat(number));
        } else if (operator === 'x') {
            setNumber(parseFloat(oldNumber) * parseFloat(number));
        } else if (operator === '-') {
            setNumber(parseFloat(oldNumber) - parseFloat(number));
        } else if (operator === '+') {
            setNumber(parseFloat(oldNumber) + parseFloat(number));
        }
    }

    return (
        <>
        <Box  m={5}/>
        <Container maxWidth="xs">
        <div className="wrapper">
            <h1 className="result">{number}</h1>
            <button className="color--two" onClick={clear}>AC</button>
            <button className="color--two" onClick={changeSign}>+/-</button>
            <button className="color--two" onClick={porcent}>%</button>
            <button className="color--one" id="sign" onClick={operatorHandler} value='/'>÷</button>
            <button className="color--three" onClick={inputNumber} value={7}>7</button>
            <button className="color--three" onClick={inputNumber} value={8}>8</button>
            <button className="color--three" onClick={inputNumber} value={9}>9</button>
            <button className="color--one" onClick={operatorHandler} value='x'>x</button>
            <button className="color--three" onClick={inputNumber} value={4}>4</button>
            <button className="color--three" onClick={inputNumber} value={5}>5</button>
            <button className="color--three" onClick={inputNumber} value={6}>6</button>
            <button className="color--one" onClick={operatorHandler} value='-'>-</button>
            <button className="color--three" onClick={inputNumber} value={1}>1</button>
            <button className="color--three" onClick={inputNumber} value={2}>2</button>
            <button className="color--three" onClick={inputNumber} value={3}>3</button>
            <button className="color--one" onClick={operatorHandler} value='+'>+</button>
            <button className="color--three" onClick={inputNumber} value={0}>0</button>
            <button className="color--two" onClick={inputNumber} value={'.'}>,</button>
            <button className="color--two" style={{ visibility: 'hidden' }}>,</button>
            <button className="color--one" onClick={calculate}>=</button>
        </div>
        </Container>
        </>
    )
}