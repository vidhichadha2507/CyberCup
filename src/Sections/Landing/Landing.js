import React from 'react';

import Animation from './Animation';
import Countdown from "../../Components/Countdown/Countdown";
import "./Landing.css";
import CyberCup from "./Resources/LLW.svg";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

function Landing(props) {
    return (
        <div className="landing">
            <Container>
                <Row className="justify-content-center align-items-center">
                    <Col className="left-col flex-column"
                        xs={{ span: 11, order: 1 }}
                        sm={{ span: 11, order: 1 }}
                        md={{ span: 8, order: 1}}
                        lg={{ span: 5, order: 1 }}
                    >
                        <img
                            src={CyberCup}
                            width="100%"
                            className="ccl"
                            alt="Cyber Cup Logo"
                        />
                        <h1 className="date">
                            5<sup>th</sup> - 9<sup>th</sup> September, 2022
                        </h1>
                        <div className="actions d-flex justify-content-center flex-column flex-md-row">
                            <Button variant="primary m-2">Register</Button>
                            <Button variant="success m-2">Become a volunteer</Button>
                        </div>
                    </Col>
                    <Col className="right-col justify-content-center align-items-center"
                        xs={{ span: 12, order: 2 }}
                        sm={{ span: 12, order: 2 }}
                        md={{ span: 8, order: 2 }}
                        lg={{ span: 5, order: 2 }}
                    >
                        <Countdown
                            targetDate={new Date("2022-08-07")}
                            ExpiredMessage="Let the Events Begin!"
                        />
                    </Col>
                </Row>
            </Container>
            <Animation></Animation>
        </div>
    )
}
export default Landing;