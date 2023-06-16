/* eslint-disable react/jsx-key */
import { Col, Container, Row } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";

const CountryDetails = () => {

    const country = useLoaderData()[0];
    console.log(country);

    const { name, flags, borders, capital, coatOfArms, fifa, languages, population, region, subregion, unMember } = country

    const handleClick = () => {
        window.history.back();
    };
    return (
        <div className="margin-75">
            <Container>
                <Row>
                    <button className="back-btn" onClick={handleClick}>
                        <i className="ri-arrow-left-circle-line"></i> Go Back
                    </button>
                </Row>
                <Row>
                    <Col md={12}>
                        <h3>Details About <b>{name.common}.</b></h3>
                    </Col>
                    <Col md={12}>
                        <div className="details-flag text-center">
                            <img className="img-fluid my-3" src={flags.png} alt="" />
                        </div>
                        <div className="my-3">
                            <div className="inner-widget">
                                <p className="mb-3">Offical Name: <b>{name.official}</b></p>
                            </div>
                        </div>
                        <div className="my-3">
                            <div className="inner-widget">
                                <p className="mb-3">Capital: <b>{capital}</b></p>
                            </div>
                        </div>
                        <div className="my-3">
                            <div className="inner-widget">
                                <p className="mb-3">FIFA Team Name: <b>{fifa}</b></p>
                            </div>
                        </div>
                        <div className="my-3">
                            <div className="inner-widget">
                                <p className="mb-3">Languages: <b>{languages.ben}</b></p>
                            </div>
                        </div>
                        <div className="my-3">
                            <div className="inner-widget">
                                <p className="mb-3">Population: <b>{population}</b></p>
                            </div>
                        </div>
                        <div className="my-3">
                            <div className="inner-widget">
                                <p className="mb-3">Region: <b>{region}</b></p>
                            </div>
                        </div>
                        <div className="my-3">
                            <div className="inner-widget">
                                <p className="mb-3">Sub-Region: <b>{subregion}</b></p>
                            </div>
                        </div>
                        <div className="my-3">
                            <div className="inner-widget">
                                <p className="mb-3">UN Member: <b>{unMember}</b></p>
                            </div>
                        </div>
                        <div className="my-3">
                            <div className="inner-widget">
                                <p>National Sign:  <img width={30} height={30} src={coatOfArms.svg} alt="" /></p>
                            </div>
                        </div>
                        <div className="my-3">
                            <div className="border-list">
                                <p className="mb-3">Border Countries:</p>
                                {
                                    borders.map(border => <button key={border}> {border} </button>)
                                }
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default CountryDetails;