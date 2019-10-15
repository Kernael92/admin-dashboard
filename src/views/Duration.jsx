import React from 'react';

// reactstrap components
import { Card, CardHeader,CardFooter, CardTitle, CardBody, Row, Col } from 'reactstrap';

class Duration extends React.Component {
    render() {
        return (
            <>
            <div className="content">
                    <Row>
                    <Col lg="12">
                        <Card className="card">
                            <CardHeader>
                            <h5 className="card-category">Training Materials</h5>
                            <CardTitle tag="h3">
                                <p>Duration</p>
                            </CardTitle>
                            </CardHeader>
                            <CardBody>
                            <div className="material-details">
                                <p>Select the training artcles with reference to your preferred reading time</p>
                            </div>
                            </CardBody>
                        </Card>
                        </Col>
                        <Col lg="4">
                        <Card className="card">
                            <CardHeader>
                            <h5 className="card-category">Duration</h5>
                            <CardTitle tag="h3">
                                <p>5 min</p>
                            </CardTitle>
                            </CardHeader>
                            <CardBody>
                            <div className="material-details">
                                <p>5 min</p>
                            </div>
                            </CardBody>
                            <CardFooter>
                                <a href="#" class="btn btn-primary">5 Min</a>
                            </CardFooter>
                        </Card>
                        </Col>
                        <Col lg="4">
                        <Card className="card">
                            <CardHeader>
                            <h5 className="card-category">Duration</h5>
                            <CardTitle tag="h3">
                                <p>10 min read</p>
                            </CardTitle>
                            </CardHeader>
                            <CardBody>
                            <div className="material-details">
                                <p>10 min</p>
                            </div>
                            </CardBody>
                            <CardFooter>
                                <a href="#" class="btn btn-primary">10 min</a>
                            </CardFooter>
                        </Card>
                        </Col>
                        <Col lg="4">
                        <Card className="card">
                            <CardHeader>
                            <h5 className="card-category">Duration</h5>
                            <CardTitle tag="h3">
                                <p>30 min</p>
                            </CardTitle>
                            </CardHeader>
                            <CardBody>
                            <div className="material-details">
                                <p>30 min</p>
                            </div>
                            </CardBody>
                            <CardFooter>
                                <a href="#" class="btn btn-primary">30 min</a>
                            </CardFooter>
                        </Card>
                        </Col>
                    </Row>                
                </div>
            </>
        )
    }
}
export default Duration;