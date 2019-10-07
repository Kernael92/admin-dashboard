import React from 'react';

// reactstrap components
import { Card, CardHeader, CardBody, Row, Col } from 'reactstrap';

class Articles extends React.Component {
    render() {
        return (
            <>
                <div className="content">
                    <Row>
                        <Col md="12">
                            <Card>
                                <CardHeader>
                                    <h5 classNmae="title">Training Materials</h5>
                                </CardHeader>
                                <CardBody className="">
                                    <Row>
                                        <Col className="training col-xs-6 col-xs-6"
                                        lg="4"
                                        md="6"
                                        sm="12"
                                        >
                                            <div className="phishing-detail">
                                                <a href="#" className="card-link"></a>
                                                <p>Phishing</p>
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col className="training col-xs-6 col-xs-6"
                                        lg="4"
                                        md="6"
                                        sm="12"
                                        >
                                            <div className="phishing-detail">
                                                <a href="#" className="card-link"></a>
                                                <p>Phishing</p>
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col className="training col-xs-6 col-xs-6"
                                        lg="4"
                                        md="6"
                                        sm="12"
                                        >
                                            <div className="phishing-detail">
                                                <a href="#" className="card-link"></a>
                                                <p>Social Engineering</p>
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col className="training col-xs-6 col-xs-6"
                                        lg="4"
                                        md="6"
                                        sm="12"
                                        >
                                            <div className="phishing-detail">
                                                <a href="#" className="card-link"></a>
                                                <p>Malware</p>
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col className="training col-xs-6 col-xs-6"
                                        lg="4"
                                        md="6"
                                        sm="12"
                                        >
                                            <div className="phishing-detail">
                                                <a href="#" className="card-link"></a>
                                                <p>Physical Security</p>
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col className="training col-xs-6 col-xs-6"
                                        lg="4"
                                        md="6"
                                        sm="12"
                                        >
                                            <div className="phishing-detail">
                                                <a href="#" className="card-link"></a>
                                                <p>Mobile Security</p>
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col className="training col-xs-6 col-xs-6"
                                        lg="4"
                                        md="6"
                                        sm="12"
                                        >
                                            <div className="phishing-detail">
                                                <a href="#" className="card-link"></a>
                                                <p>Safe Web browsing</p>
                                            </div>
                                        </Col>
                                    </Row>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </>
        )
    }
}

export default Articles;