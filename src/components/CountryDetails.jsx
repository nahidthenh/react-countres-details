import { Container, Row } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";

const CountryDetails = () => {

    const countryFullPage = useLoaderData()[0];
    console.log(countryFullPage);

    return (
        <Container>
            <Row>
                <div className="margin-75">
                    <h3>This Is Country Details Page:- {countryFullPage.name.common}</h3>
                </div>
            </Row>
        </Container>
    );
};

export default CountryDetails;