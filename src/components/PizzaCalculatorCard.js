import React, {useState} from 'react';
import {Card, CardGroup, Col, Form, Row} from "react-bootstrap";
import CardHeader from "react-bootstrap/CardHeader";

const PizzaCalculatorCard = () => {
    const [diagonalValue, setDiagonalValue] = useState();
    const [amountValue, setAmountValue] = useState();
    const [priceValue, setPriceValue] = useState();
    const handleSrednicaChange = (e) => {
        setDiagonalValue(e.target.value);
    }

    const handleIleChange = (e) => {
        setAmountValue(e.target.value);
    }

    const handleCenaChange = (e) => {
        setPriceValue(e.target.value);
    }

    const partialArea = ((diagonalValue / 2) * (diagonalValue / 2)) * Math.PI;
    const area = partialArea * amountValue;
    const pricePerCm = priceValue / partialArea * 100;

    return (
        <div>

            <CardGroup>


                <Card className="text-center">
                    <CardHeader>Kalkulator pizzy</CardHeader>
                    <Card.Body>
                        <Form>
                            <Form.Group className="mb-3" controlId="formPizza">

                                <Form.Control
                                    value={diagonalValue}
                                    type="number"
                                    onChange={handleSrednicaChange}
                                    placeholder="Średnica [cm]"
                                    className="mb-3 text-center"
                                />

                                <Form.Control
                                    value={amountValue}
                                    type="number"
                                    onChange={handleIleChange}
                                    placeholder="Ilość"
                                    className="mb-3 text-center"
                                />

                                <Form.Control
                                    value={priceValue}
                                    type="number"
                                    onChange={handleCenaChange}
                                    placeholder="Cena za szt. [zł]"
                                    className="mb-3 text-center"
                                />

                            </Form.Group>
                        </Form>
                        <p><b>Pole:</b> {area? area.toFixed(2) : '0'} cm2</p>
                        <p><b>Cena za cm:</b> {pricePerCm? pricePerCm.toFixed(2) : '0'} gr</p>

                    </Card.Body>
                </Card>

            </CardGroup>

        </div>
    );
};

export default PizzaCalculatorCard;