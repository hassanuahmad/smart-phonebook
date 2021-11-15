import { Container, Row, Col, Button } from "react-bootstrap";
import heroImg from "../images/heroPhone.svg";
import { Link } from "react-router-dom";

import "../css/hero.css";

const Hero = () => {
    return (
        <div>
            <Container className="vh-100">
                <Row className="mt-3">
                    <Col sm={6} className="d-flex align-items-center">
                        <div>
                            <h1>
                                World{" "}
                                <span style={{ color: "#CCC3F8" }}>
                                    Smartest
                                </span>{" "}
                                Phonebook
                            </h1>
                            <p>Instantly download CSV of your contacts</p>
                            <Link to="/input">
                                <Button
                                    className="heroBtn"
                                    variant="outline-primary"
                                    size="lg"
                                >
                                    Get Started
                                </Button>
                            </Link>
                        </div>
                    </Col>
                    <Col
                        sm={6}
                        className="d-flex align-items-center justify-content-end"
                    >
                        <img src={heroImg} alt="" width="100%" height="85%" />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Hero;
