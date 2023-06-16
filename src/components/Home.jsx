import { useLoaderData } from "react-router-dom"
import Country from "./Country";
import { Col, Container, Row } from "react-bootstrap";



function Home() {

    const countres = useLoaderData()
    console.log(countres);
    return (
        <Container  >
            <Row className="margin-75">
                {
                    countres.map(country => (
                        <Col key={country.cca3} xl={3} lg={6} >
                            <Country
                                country={country}
                            >
                            </Country>
                        </Col>
                    ))
                }
            </Row>
        </Container>
    )
}

export default Home