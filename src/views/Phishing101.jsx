import React from 'react';

// reactstrap components
import { Card, CardHeader,CardFooter,CardTitle, CardBody, Row, Col } from 'reactstrap';


class Phishing101 extends React.Component {
    render() {
        return (
            <>
                <div className="content">
                    <Row>
                        <Col lg="4">
                        <Card className="card">
                            <CardHeader>
                            <h5 className="card-category">Phishing101</h5>
                            <CardTitle tag="h3">
                                <p>Videos</p>
                            </CardTitle>
                            </CardHeader>
                            <CardBody>
                            <div className="material-details">
                                <p>videos</p>   
                            </div>
                            </CardBody>
                            <CardFooter>
                                <a href="/admin/home" class="btn btn-primary">videos</a>
                            </CardFooter>
                        </Card>
                        </Col>
                        <Col lg="4">
                        <Card className="card">
                            <CardHeader>
                            <h5 className="card-category">Phishing101</h5>
                            <CardTitle tag="h3">
                                <p>Infographics</p>
                            </CardTitle>
                            </CardHeader>
                            <CardBody>
                            <div className="material-details">
                                <p>infographics</p>   
                            </div>
                            </CardBody>
                            <CardFooter>
                                <a href="/admin/fileupload" class="btn btn-primary">Infographics</a>
                            </CardFooter>
                        </Card>
                        </Col>
                        <Col lg="4">
                        <Card className="card">
                            <CardHeader>
                            <h5 className="card-category">Phishing101</h5>
                            <CardTitle tag="h3">
                                <p>Posters</p>
                            </CardTitle>
                            </CardHeader>
                            <CardBody>
                            <div className="material-details">
                                <p>Posters</p>   
                            </div>
                            </CardBody>
                            <CardFooter>
                                <a href="/admin/video" class="btn btn-primary">posters</a>
                            </CardFooter>
                        </Card>
                        </Col>
                    </Row>                
                </div>
            </>
            )
        }
    }

export default Phishing101;