import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const Country = ({ country }) => {
    return (
        <Link>
            <Card className="country-card">
                <Card.Img variant="top" src={country.flags.png} />
                <Card.Body>
                    <Card.Title>{country.name.common}</Card.Title>
                    <Card.Text>
                        <small><b>Capital - </b>{country.capital}</small>
                        <small><b>Region - </b>{country.region}</small>
                        <small><b>Population - </b>{country.population}</small>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Link>
    );
};

export default Country;