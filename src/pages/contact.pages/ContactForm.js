import React from 'react';
import {Form, Col, Button} from "react-bootstrap";
import "./contactPage.styles.css";

function ContactForm(props) {
    return (
        <Form className="contactForm" onSubmit={props.sendEmail} data-testid='contactFormId'>
            <Form.Row className="nameEmail">
                <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control className="inputFields" name="user_name"
                        type="full name" placeholder="Your name" required />
                </Form.Group>
                <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Your email</Form.Label>
                    <Form.Control className="inputFields" name="user_email"
                        type="email" placeholder="abc@example.com" required />
                </Form.Group>
            </Form.Row>
            <Form.Row>
                <Form.Group as={Col} controlId="formGridAddress1">
                    <Form.Label>Phone number (optional)</Form.Label>
                    <Form.Control className="inputFields" name="contact_number"
                        className="inputFields" placeholder="Contact number" />
                </Form.Group>
            </Form.Row>
            <Form.Row>
                <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>Your message*</Form.Label>
                    <Form.Control as="textarea" rows={6} 
                        className="inputFields" name="message"
                        placeholder="Software needs for your business" required />                    
                </Form.Group>
            </Form.Row>
            <Button className="submitBtn" type="submit">
                Send
            </Button>
        </Form>
    )
}

export default ContactForm