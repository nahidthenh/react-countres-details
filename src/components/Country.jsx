import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const Country = ({ country }) => {

    const { cca3, name, region, population, capital, flags } = country;

    return (
        <Link to={`details/${cca3}`}>
            <Card className="country-card">
                <Card.Img variant="top" src={flags.png} />
                <Card.Body>
                    <Card.Title>{name.common}</Card.Title>
                    <Card.Text>
                        <small><b>Capital - </b>{capital}</small>
                        <small><b>Region - </b>{region}</small>
                        <small><b>Population - </b>{population}</small>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Link>
    );
};

export default Country;