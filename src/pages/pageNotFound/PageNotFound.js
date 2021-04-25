import React from 'react';
import {Container} from "react-bootstrap";
import "./pageNotFound.styles.css";

const PageNotFound = () => {
    return (
        <Container className="pageNotFoundContainer" data-testid='pageNotFoundId'>
            <div className="errorText">
                <h1>Ooops!.. </h1>
                <p>We can&apos;t seem to find the page you&apos;re looking for.</p>
                <p>Error code: 404</p>
                <p>Try to reach out using the menu on the top! </p>
            </div>
        </Container>
    )
}

export default PageNotFound
