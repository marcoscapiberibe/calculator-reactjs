import React from "react";
import './Calculator.css';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

export default function Calculator() {
    return (
        <>
        <Box  m={5}/>
        <Container maxWidth="xs">
        <div className="wrapper">
            <button className="color--two">AC</button>
            <button className="color--two">+/-</button>
            <button className="color--two">%</button>
            <button className="color--one">÷</button>
            <button className="color--three">7</button>
            <button className="color--three">8</button>
            <button className="color--three">9</button>
            <button className="color--one">X</button>
            <button className="color--three">4</button>
            <button className="color--three">5</button>
            <button className="color--three">6</button>
            <button className="color--one">-</button>
            <button className="color--three">1</button>
            <button className="color--three">2</button>
            <button className="color--three">3</button>
            <button className="color--one">+</button>
            <button className="color--three">0</button>
            <button className="color--two">,</button>
            <button className="color--two" style={{ visibility: 'hidden' }}>,</button>
            <button className="color--two">=</button>
        </div>
        </Container>
        </>
    )
}