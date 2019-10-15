import React from 'react';


// reactstrap components
import { Card, CardHeader,CardFooter,CardTitle, CardBody, Row, Col } from 'reactstrap';

class Pages extends React.Component {
    render() {
        return (
            <>
            <div className="content">
                    <Row>
                        <Col lg="6">
                        <Card className="card">
                            <CardHeader>
                            <h5 className="card-category">Profile</h5>
                            <CardTitle tag="h3">
                                <p>Profile</p>
                            </CardTitle>
                            </CardHeader>
                            <CardBody>
                            <div className="material-details">
                                <p>Kindly view your profile to add users</p>
                            </div>
                            </CardBody>
                            <CardFooter>
                                <a href="#" class="btn btn-primary">View</a>
                            </CardFooter>
                        </Card>
                        </Col>
                        <Col lg="6">
                        <Card className="card">
                            <CardHeader>
                            <h5 className="card-category">Login</h5>
                            <CardTitle tag="h3">
                                <p>Login</p>
                            </CardTitle>
                            </CardHeader>
                            <CardBody>
                            <div className="material-details">
                                <p>Click on the button to login</p>
                            </div>
                            </CardBody>
                            <CardFooter>
                                <a href="#" class="btn btn-primary">Login</a>
                            </CardFooter>
                        </Card>
                        </Col>
                        <Col lg="6">
                        <Card className="card">
                            <CardHeader>
                            <h5 className="card-category">Register</h5>
                            <CardTitle tag="h3">
                                <p>Register</p>
                            </CardTitle>
                            </CardHeader>
                            <CardBody>
                            <div className="material-details">
                                <p>Kindly register</p>
                            </div>
                            </CardBody>
                            <CardFooter>
                                <a href="#" class="btn btn-primary">Register</a>
                            </CardFooter>
                        </Card>
                        </Col>
                        <Col lg="6">
                        <Card className="card">
                            <CardHeader>
                            <h5 className="card-category">Settings</h5>
                            <CardTitle tag="h3">
                                <p>settings</p>
                            </CardTitle>
                            </CardHeader>
                            <CardBody>
                            <div className="material-details">
                                <p>Settings</p>
                            </div>
                            </CardBody>
                            <CardFooter>
                                <a href="#" class="btn btn-primary">Settings</a>
                            </CardFooter>
                        </Card>
                        </Col>
                        <Col lg="6">
                        <Card className="card">
                            <CardHeader>
                            <h5 className="card-category">Notification</h5>
                            <CardTitle tag="h3">
                                <p>Notifications</p>
                            </CardTitle>
                            </CardHeader>
                            <CardBody>
                            <div className="material-details">
                                <p>Check your activities as well as the users</p>
                            </div>
                            </CardBody>
                            <CardFooter>
                                <a href="#" class="btn btn-primary">Notifications</a>
                            </CardFooter>
                        </Card>
                        </Col>
                    </Row>                
                </div>
            </>
        )
    }
}
export default Pages;