import React from 'react';

// reactstrap components
import { Card, CardHeader, CardBody, CardFooter, Row, Col } from "reactstrap";
// @material_ui/icons
import Icon from "@material-ui/core/Icon";


class Dashboard extends React.Component {
    
    render() {
        
        return (
            <>
            <div className="content">
                <Row>
                    <Col xs="12" sm="6" md="3">
                        <Card className="cardDashboard">
                            <CardHeader   stats icon>
                                <div className="cardIcon">
                                    <Icon>content_copy</Icon>
                                </div>
                                <p className="cardCategory">Number of campaigns</p>
                                <h3 className="cardTitle">50 <small>Campaigns</small></h3>
                            </CardHeader>
                            <hr/>
                            <CardFooter className="cardFooter" stats>
                                <a href="content" onClick={e => e.preventDefault()}>Find out more</a>
                            </CardFooter>
                        </Card>
                    </Col>
                    <Col xs="12" sm="6" md="3">
                        <Card className="cardDashboard">
                            <CardHeader  className="cardHeader"  stats icon>
                                <div className="cardIcon">
                                    <Icon>content_copy</Icon>
                                </div>
                                <p className="cardCategory">On going campaigns</p>
                                <h3 className="cardTitle">10/50 <small>Campaings</small></h3>
                            </CardHeader>
                            <hr/>
                            <CardFooter className="cardFooter" stats>
                                <a href="content" onClick={e => e.preventDefault()}>Find out more</a>
                            </CardFooter>
                        </Card>
                    </Col>
                    <Col xs="12" sm="6" md="3">
                        <Card className="cardDashboard">
                            <CardHeader   stats icon>
                                <div className="cardIcon">
                                    <Icon>content_copy</Icon>
                                </div>
                                <p className="cardCategory">Registered Organizations</p>
                                <h3 className="cardTitle">+30</h3>
                            </CardHeader>
                            <hr/>
                            <CardFooter className="cardFooter" stats>
                                <Icon>today</Icon>
                                <b>Last 24 Hours</b>
                            </CardFooter>
                        </Card>
                    </Col>
                    <Col xs="12" sm="6" md="3">
                        <Card className="cardDashboard">
                            <CardHeader   stats icon>
                                <div className="cardIcon">
                                    <Icon >content_copy</Icon>
                                </div>
                                <p className="cardCategory">Users</p>
                                <h3 className="cardTitle">+100</h3>
                            </CardHeader>
                            <hr/>
                            <CardFooter className="cardFooter" stats>
                                <Icon>access_time</Icon>
                                <b>Just updated</b>
                            </CardFooter>
                        </Card>
                    </Col>
                </Row>
                
            </div>
            
            </>
        )
    }
}
export default Dashboard;