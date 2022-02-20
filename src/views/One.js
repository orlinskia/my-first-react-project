import React, {useState} from 'react';
import {Col, Row} from "react-bootstrap";
import PizzaCalculatorCard from "../components/PizzaCalculatorCard";



const One = () => {

    const [result1, setResult1] = useState();
    const [result2, setResult2] = useState();

    return (
        <div>
            <Row>
                <Col>
            <PizzaCalculatorCard isBest={result1 < result2} setResult={setResult1}/>
                </Col>
                <Col>
            <PizzaCalculatorCard isBest={result1 > result2} setResult={setResult2}/>
                </Col>
            </Row>
        </div>
    )
};

export default One;