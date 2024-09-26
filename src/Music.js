import * as React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Stack from 'react-bootstrap/Stack';

function MusicViewTable() {
    return (
        <Container fluid lg="12" className='musicViewTable'>
            <Row>
                <MusicViewRow />
            </Row>
        </Container>
    );
}

function MusicViewRow() {
    return (
        <Col lg="12"  className='card'>
            <div className='musicViewRow'>
                <p>
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
                    in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                </p>
            </div>
        </Col>
    );

}


export default function Music() {
    return (
        <MusicViewTable />
    );
}