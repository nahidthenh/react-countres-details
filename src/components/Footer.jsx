import { Container } from "react-bootstrap"


function Footer() {
    return (
        <div className="border-top py-3 fixed-bottom bg-white">
            <Container fluid>
                <div className="footer mx-5 d-flex justify-content-between align-items-center">
                    <div>
                        <p><strong>1999 - 2023 © All rights reserved by NDevs.</strong></p>
                    </div>
                    <div>
                        <a href="https://www.facebook.com/nahidthenh"><i className="ri-facebook-fill"></i></a>
                        <a href="https://www.linkedin.com/in/mdnahidhasan55"><i className="ri-linkedin-fill"></i></a>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Footer