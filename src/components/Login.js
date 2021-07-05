import React from 'react';
import { Card, Form } from 'react-bootstrap';

function Login(){
    return(
        <div className="min-vh-100 d-flex justify-content-center align-items-center">
            <Card className="p-5 shadow-lg rounded">
                <Card.Title>Login</Card.Title>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                </Form>
            </Card>
        </div>
    );
}

export default Login;