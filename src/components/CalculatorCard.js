import CardHeader from "react-bootstrap/CardHeader";
import {Card, Col, Container, Form, Row} from "react-bootstrap";
import React from "react";


const CalculatorCard = () => {


    return (
        <Card className="text-center bg-dark bg-opacity-50 w-25 text-capitalize text-white-50">
            <CardHeader>Kalkulator</CardHeader>
            <Card.Body>
                <Form>
                    <Form.Control
                        type="text"
                        disabled
                        placeholder="Wynik"
                        className="mb-3 text-center bg-"
                    />
                    <Container className="">

                        <Row>
                            <Col>
                                <Form.Control
                                    value="7"
                                    type="button"
                                    className="mb-3 text-center bg-dark bg-opacity-50 w-100 text-white"
                                />
                            </Col>
                            <Col>
                                <Form.Control
                                    value="8"
                                    type="button"
                                    className="mb-3 text-center bg-dark bg-opacity-50 w-100 text-white"
                                />
                            </Col>
                            <Col>
                                <Form.Control
                                    value="9"
                                    type="button"
                                    className="mb-3 text-center bg-dark bg-opacity-50 w-100 text-white"
                                />
                            </Col>

                            <Col>
                                <Form.Control
                                    value="/"
                                    type="button"
                                    className="mb-3 text-center bg-warning bg-opacity-50 w-100 text-white"
                                />
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <Form.Control
                                    value="4"
                                    type="button"
                                    className="mb-3 text-center bg-dark bg-opacity-50 w-100 text-white"
                                />
                            </Col>
                            <Col>
                                <Form.Control
                                    value="5"
                                    type="button"
                                    className="mb-3 text-center bg-dark bg-opacity-50 w-100 text-white"
                                />
                            </Col>
                            <Col>
                                <Form.Control
                                    value="6"
                                    type="button"
                                    className="mb-3 text-center bg-dark bg-opacity-50 w-100 text-white"
                                />
                            </Col>

                            <Col>
                                <Form.Control
                                    value="*"
                                    type="button"
                                    className="mb-3 text-center bg-warning bg-opacity-50 w-100 text-white"
                                />
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <Form.Control
                                    value="1"
                                    type="button"
                                    className="mb-3 text-center bg-dark bg-opacity-50 w-100 text-white"
                                />
                            </Col>
                            <Col>
                                <Form.Control
                                    value="2"
                                    type="button"
                                    className="mb-3 text-center bg-dark bg-opacity-50 w-100 text-white"
                                />
                            </Col>
                            <Col>
                                <Form.Control
                                    value="3"
                                    type="button"
                                    className="mb-3 text-center bg-dark bg-opacity-50 w-100 text-white"
                                />
                            </Col>

                            <Col>
                                <Form.Control
                                    value="+"
                                    type="button"
                                    className="mb-3 text-center bg-warning bg-opacity-50 w-100 text-white"
                                />
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <Form.Control
                                    value="AC"
                                    type="button"
                                    className="mb-3 text-center bg-warning bg-opacity-50 w-100 text-white"
                                />
                            </Col>
                            <Col>
                                <Form.Control
                                    value="0"
                                    type="button"
                                    className="mb-3 text-center bg-dark bg-opacity-50 w-100 text-white"
                                />
                            </Col>

                            <Col>
                                <Form.Control
                                    value="="
                                    type="button"
                                    className="mb-3 text-center bg-warning bg-opacity-50 w-100 text-white"
                                />
                            </Col>

                            <Col>
                                <Form.Control
                                    value="-"
                                    type="button"
                                    className="mb-3 text-center bg-warning bg-opacity-50 w-100 text-white"
                                />
                            </Col>
                        </Row>

                    </Container>

                </Form>


            </Card.Body>
        </Card>
    )
};

export default CalculatorCard;