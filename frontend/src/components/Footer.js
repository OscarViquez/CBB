import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
    return (
        <footer>
            <Container>
                <Row>
                    {/* py - padding on the Y-Axis, 3rem */}
                    <Col  className="text-center py-3">
                        Footer
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer
