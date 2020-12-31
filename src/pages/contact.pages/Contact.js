import React from 'react';
import {Form, Col, Button} from "react-bootstrap";
import {HiOutlineMail} from "react-icons/hi";
import {AiOutlineCheckSquare} from "react-icons/ai";
import "./contactPage.styles.css";

function Contact() {
    return (
        <div className="contactContainer">
            <div className="detailSection">
                <h4 className="query">Get a Quote</h4>
                <p className="clientInfo">
                    Based on your business requirements and the information provided, we will be able to calculate cost and time frame, if you like to use our services 
                </p>
                <h4 className="query">Have any other questions?</h4>
                <p className="clientInfo"> <HiOutlineMail/> abc@test.com</p>
                <div className="offers">
                    <span><AiOutlineCheckSquare className="freeOffersBtn"/>
                        Free Quotation
                    </span>
                    <span><AiOutlineCheckSquare className="freeOffersBtn"/>
                        Free Consultation
                    </span>
                </div>
            </div>
            <div className="formSection">
                <Form className="contactForm">
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Name</Form.Label>
                            <Form.Control className="inputFields" type="full name" 
                            placeholder="Your name" />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label>Your email</Form.Label>
                            <Form.Control className="inputFields" type="email" 
                            placeholder="abc@example.com" />
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                    <Form.Group as={Col} controlId="formGridAddress1">
                        <Form.Label>Phone number (optional)</Form.Label>
                        <Form.Control className="inputFields" 
                        className="inputFields" placeholder="Contact number" />
                    </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridState">
                            <Form.Label>Your message*</Form.Label>
                            <Form.Control as="textarea" rows={6} 
                                className="inputFields"
                                placeholder="Software needs for your business" />                    
                        </Form.Group>
                    </Form.Row>
                    <Button className="submitBtn" type="submit">
                        Send
                    </Button>
                </Form>            
            </div>
        </div>
    )
}

export default Contact