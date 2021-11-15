import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { useState } from "react";
import Axios from "axios";
import { useHistory } from "react-router-dom";
import { inputSchema } from "../Validations/InputValidation";

import "../css/input.css";

const Input = () => {
    const history = useHistory();

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [emailAddress, setEmailAddress] = useState("");

    const addContact = async (event) => {
        event.preventDefault();

        let inputData = {
            firstName: event.target[0].value,
            lastName: event.target[1].value,
            phoneNumber: event.target[2].value,
            emailAddress: event.target[3].value,
        };

        const isValid = await inputSchema.isValid(inputData);

        if (isValid === true) {
            Axios.post("https://smart-phonebook.herokuapp.com/input", {
                firstName: firstName,
                lastName: lastName,
                phoneNumber: phoneNumber,
                emailAddress: emailAddress,
            }).then(() => {
                history.push("/view");
            });
        } else {
            alert("Fill in the inputs or check for errors!");
        }
    };

    return (
        <Container>
            <Form onSubmit={addContact}>
                <Row className="mb-3 mt-3">
                    <Form.Group
                        as={Col}
                        className="mb-3"
                        controlId="formBasicEmail"
                    >
                        <Form.Label>First Name</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter First Name"
                            required
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group
                        as={Col}
                        className="mb-3"
                        controlId="formBasicEmail"
                    >
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter Last Name"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                        />
                    </Form.Group>
                </Row>
                <Row>
                    <Form.Group
                        as={Col}
                        className="mb-3"
                        controlId="formBasicPassword"
                    >
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control
                            type="number"
                            placeholder="Enter Phone Number"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group
                        as={Col}
                        className="mb-3"
                        controlId="formBasicEmail"
                    >
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Enter Email Address"
                            value={emailAddress}
                            onChange={(e) => setEmailAddress(e.target.value)}
                        />
                    </Form.Group>
                </Row>

                <div className="d-grid gap-2 mt-3 inputBtn">
                    <Button
                        variant=""
                        className="inputBtn"
                        size="lg"
                        type="submit"
                    >
                        Add Contact
                    </Button>
                </div>
            </Form>
        </Container>
    );
};

export default Input;
