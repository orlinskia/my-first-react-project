import React, {useState} from 'react';
import {Form} from "react-bootstrap";

const One = () => {

    const [inputValue, setInputValue] = useState();
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    return (
        <div>
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Pizza 1</Form.Label>
                <Form.Control
                value = {inputValue}
                type = "number"
                onChange = {handleInputChange}
                placeholder = "Średnica"
                />

                <Form.Control
                    value = {inputValue}
                    type = "number"
                    onChange = {handleInputChange}
                    placeholder = "Ilość"
                />

                <Form.Control
                    value = {inputValue}
                    type = "number"
                    onChange = {handleInputChange}
                    placeholder = "Cena za sztukę"
                />

            </Form.Group>
        </Form>

        <h1>{inputValue}</h1>
        </div>
    );
};

export default One;