import React, {useState} from 'react';
import {Col, Form, Row} from "react-bootstrap";
import PizzaCalculatorCard from "../components/PizzaCalculatorCard";

const One = () => {

    return (
        <div>
            <Row>
                <Col>
            <PizzaCalculatorCard/>
                </Col>
                <Col>
            <PizzaCalculatorCard/>
                </Col>
            </Row>
        </div>
    )
};

export default One;