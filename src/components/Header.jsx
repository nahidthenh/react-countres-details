import { Container, Navbar } from "react-bootstrap"

function Header() {
    return (
        <Navbar className="border-bottom py-3 fixed-top bg-white">
            <Container className=" ">
                <Navbar.Brand href="#home">
                    <h4><b>React Countries Details</b></h4>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        <h6><b>Dark Mode</b></h6>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header