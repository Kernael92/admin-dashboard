import React from 'react';

// reactstrap components
import { Card, CardHeader,CardTitle, CardBody, Row, Col } from 'reactstrap';


class Contents extends React.Component {
    render() {
        return (
            <>
                <div className="content">
                    <Row>
                        <Col lg="4">
                        <Card className="card">
                            <CardHeader>
                            <h5 className="card-category">Phishing</h5>
                            <CardTitle tag="h3">
                                <p>Phishing Materials</p>
                            </CardTitle>
                            </CardHeader>
                            <CardBody>
                            <div className="material-details">
                                <p>Phishing</p>
                            </div>
                            </CardBody>
                        </Card>
                        </Col>
                        <Col lg="4">
                        <Card className="card">
                            <CardHeader>
                            <h5 className="card-category">Social Engineering</h5>
                            <CardTitle tag="h3">
                                <p>Social Engineering</p>
                            </CardTitle>
                            </CardHeader>
                            <CardBody>
                            <div className="material-details">
                                <p>Social Engineering</p>
                            </div>
                            </CardBody>
                        </Card>
                        </Col>
                        <Col lg="4">
                        <Card className="card">
                            <CardHeader>
                            <h5 className="card-category">Malware</h5>
                            <CardTitle tag="h3">
                                <p>Malware</p>
                            </CardTitle>
                            </CardHeader>
                            <CardBody>
                            <div className="material-details">
                                <p>Malware</p>
                            </div>
                            </CardBody>
                        </Card>
                        </Col>
                        <Col lg="4">
                        <Card className="card">
                            <CardHeader>
                            <h5 className="card-category">Removal Media</h5>
                            <CardTitle tag="h3">
                                <p>Removal Media</p>
                            </CardTitle>
                            </CardHeader>
                            <CardBody>
                            <div className="material-details">
                                <p>Removal Media</p>
                            </div>
                            </CardBody>
                        </Card>
                        </Col>
                        <Col lg="4">
                        <Card className="card">
                            <CardHeader>
                            <h5 className="card-category">Physical security</h5>
                            <CardTitle tag="h3">
                                <p>Physical security</p>
                            </CardTitle>
                            </CardHeader>
                            <CardBody>
                            <div className="material-details">
                                <p>Physical security</p>
                            </div>
                            </CardBody>
                        </Card>
                        </Col>
                        <Col lg="4">
                        <Card className="card">
                            <CardHeader>
                            <h5 className="card-category">Working Remotely</h5>
                            <CardTitle tag="h3">
                                <p>Working Remotely</p>
                            </CardTitle>
                            </CardHeader>
                            <CardBody>
                            <div className="material-details">
                                <p>Working Remotely</p>
                            </div>
                            </CardBody>
                        </Card>
                        </Col>
                        <Col lg="4">
                        <Card className="card">
                            <CardHeader>
                            <h5 className="card-category">Mobile Security</h5>
                            <CardTitle tag="h3">
                                <p>Mobile Security</p>
                            </CardTitle>
                            </CardHeader>
                            <CardBody>
                            <div className="material-details">
                                <p>Mobile Security</p>
                            </div>
                            </CardBody>
                        </Card>
                        </Col>
                        <Col lg="4">
                        <Card className="card">
                            <CardHeader>
                            <h5 className="card-category">Safe Web browsing</h5>
                            <CardTitle tag="h3">
                                <p>Safe Web browsing</p>
                            </CardTitle>
                            </CardHeader>
                            <CardBody>
                            <div className="material-details">
                                <p>Mobile Security</p>
                            </div>
                            </CardBody>
                        </Card>
                        </Col>
                    </Row>                
                </div>
            </>
            )
        }
    }

export default Contents;