import { Container, Navbar } from "react-bootstrap"
import { Link } from "react-router-dom"

function Header() {
    return (
        <Navbar className="border-bottom py-3 fixed-top bg-white">
            <Container className=" ">
                {/* <Navbar.Brand to="/home">
                  
                </Navbar.Brand> */}
                <Link to='/home'>
                    <h4><b>React Countries Details</b></h4>
                </Link>
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