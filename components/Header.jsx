import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function Header(){

    return(
        <>
        <Navbar bg="light" data-bs-theme="white">
            <Container>
            <Navbar.Brand href="#home"></Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                
            </Nav>
            </Container>
        </Navbar>
        </>
    );
}