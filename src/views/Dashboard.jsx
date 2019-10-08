import React from 'react';

// reactstrap components
import { Card, CardHeader,CardTitle, CardBody, Row, Col } from 'reactstrap';

class Dashboard extends React.Component {
    render() {
        return (
            <>
            <div className="content">
                    <Row>
                        <Col lg="4">
                        <Card className="card">
                            <CardHeader>
                            <h5 className="card-category">Content</h5>
                            <CardTitle tag="h3">
                                <p>Content</p>
                            </CardTitle>
                            </CardHeader>
                            <CardBody>
                            <div className="material-details">
                                <a href="/admin/content" className="card-link">Content</a>
                            </div>
                            </CardBody>
                        </Card>
                        </Col>
                        <Col lg="4">
                        <Card className="card">
                            <CardHeader>
                            <h5 className="card-category">Duration</h5>
                            <CardTitle tag="h3">
                                Duration
                            </CardTitle>
                            </CardHeader>
                            <CardBody>
                            <div className="material-details">
                                <a href="/admin/duration" className="card-link">Duration</a>
                            </div>
                            </CardBody>
                        </Card>
                        </Col>
                        <Col lg="4">
                        <Card className="card">
                            <CardHeader>
                            <h5 className="card-category">Articles</h5>
                            <CardTitle tag="h3">
                                <p>Articles</p>
                            </CardTitle>
                            </CardHeader>
                            <CardBody>
                            <div className="material-details">
                                <a href="/admin/articles" className="card-link">Articles</a>
                            </div>
                            </CardBody>
                        </Card>
                        </Col>
                        <Col lg="4">
                        <Card className="card">
                            <CardHeader>
                            <h5 className="card-category">Pages</h5>
                            <CardTitle tag="h3">
                                <p>Pages</p>
                            </CardTitle>
                            </CardHeader>
                            <CardBody>
                            <div className="material-details">
                                <a href="/admin/pages" className="card-link">Pages</a>
                            </div>
                            </CardBody>
                        </Card>
                        </Col>
                        <Col lg="4">
                        <Card className="card">
                            <CardHeader>
                            <h5 className="card-category">Reports</h5>
                            <CardTitle tag="h3">
                                <p>Reports</p>
                            </CardTitle>
                            </CardHeader>
                            <CardBody>
                            <div className="material-details">
                                <a href="/admin/reports" className="card-link">Reports</a>
                            </div>
                            </CardBody>
                        </Card>
                        </Col>
                        <Col lg="4">
                        <Card className="card">
                            <CardHeader>
                            <h5 className="card-category">Subscription</h5>
                            <CardTitle tag="h3">
                                <p>Subscription</p>
                            </CardTitle>
                            </CardHeader>
                            <CardBody>
                            <div className="material-details">
                                <a href="/admin/subscription" className="card-link">Subscription</a>
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
export default Dashboard;