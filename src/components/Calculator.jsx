import React, { useState } from "react";
import './Calculator.css';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

export default function Calculator() {
    const [number, setNumber] = useState(0);

    function inputNumber(e) {
        let input = e.target.value;
        setNumber(number + input);
    }


    return (
        <>
        <Box  m={5}/>
        <Container maxWidth="xs">
        <div className="wrapper">
            <h1 className="result">{number}</h1>
            <button className="color--two">AC</button>
            <button className="color--two">+/-</button>
            <button className="color--two">%</button>
            <button className="color--one">÷</button>
            <button className="color--three" onClick={inputNumber} value={7}>7</button>
            <button className="color--three" onClick={inputNumber} value={8}>8</button>
            <button className="color--three" onClick={inputNumber} value={9}>9</button>
            <button className="color--one">X</button>
            <button className="color--three" onClick={inputNumber} value={4}>4</button>
            <button className="color--three" onClick={inputNumber} value={5}>5</button>
            <button className="color--three" onClick={inputNumber} value={6}>6</button>
            <button className="color--one">-</button>
            <button className="color--three" onClick={inputNumber} value={1}>1</button>
            <button className="color--three" onClick={inputNumber} value={2}>2</button>
            <button className="color--three" onClick={inputNumber} value={3}>3</button>
            <button className="color--one">+</button>
            <button className="color--three" onClick={inputNumber} value={0}>0</button>
            <button className="color--two">,</button>
            <button className="color--two" style={{ visibility: 'hidden' }}>,</button>
            <button className="color--one">=</button>
        </div>
        </Container>
        </>
    )
}