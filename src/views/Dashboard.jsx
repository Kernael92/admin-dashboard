import React from 'react';

// reactstrap components
import { Card,CardDeck, CardHeader,CardTitle, CardBody, Row, Col, CardFooter } from 'reactstrap';

class Dashboard extends React.Component {
    render() {
        const { image } = this.props;
        var style = {
            backgroundImage: 'url(https://source.unsplash.com/user/erondu/600x400)',
        };
        return (
            <>
            <div className="content">
                    <Row>
                        <CardDeck className="card-deck">
                        <Col lg="4">
                        <Card className="card">
                            <CardHeader image={ "https://source.unsplash.com/user/erondu/600x400" }>
                                <header style={style} id={image} className="card-header">
                                    <h4 className="card-header--title">Content</h4>
                                </header>
                            </CardHeader>
                            <CardBody className="card-body">
                                <div className="card-body">
                                    <h2>Training Materials</h2>
                                    <p className="body-content">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. 
                                        Praesent libero. Sed cursus ante dapibus diam. Sed nisi. 
                                        Nulla quis sem at nibh elementum imperdiet. 
                                        Duis sagittis ipsum. Praesent mauris. 
                                        Fusce nec tellus sed augue semper porta. Mauris massa. 
                                    </p>
                                </div>
                            </CardBody>
                            <CardFooter>
                                <button className="button button-primary">
                                    <a href="content">
                                    <i className="fa fa-chevron-right"></i>
                                    Find out more
                                    </a>
                                </button>
                            </CardFooter>
                        </Card>
                        </Col>
                        <Col lg="4">
                        <Card className="card">
                        <CardHeader image={ "https://source.unsplash.com/user/erondu/600x400" }>
                                <header style={style} id={image} className="card-header">
                                    <h4 className="card-header--title">Duration</h4>
                                </header>
                            </CardHeader>
                            <CardBody className="card-body">
                                <div className="card-body">
                                    <h2>Duration</h2>
                                    <p className="body-content">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. 
                                        Praesent libero. Sed cursus ante dapibus diam. Sed nisi. 
                                        Nulla quis sem at nibh elementum imperdiet. 
                                        Duis sagittis ipsum. Praesent mauris. 
                                        Fusce nec tellus sed augue semper porta. Mauris massa. 
                                    </p>
                                </div>
                            </CardBody>
                            <CardFooter>
                                <button className="button button-primary">
                                    <a to="#">
                                    <i className="fa fa-chevron-right"></i>
                                    Find out more
                                    </a>
                                </button>
                            </CardFooter>
                        </Card>
                        </Col>
                        <Col lg="4">
                        <Card className="card">
                        <CardHeader image={ "https://source.unsplash.com/user/erondu/600x400" }>
                                <header style={style} id={image} className="card-header">
                                    <h4 className="card-header--title">Articles</h4>
                                </header>
                            </CardHeader>
                            <CardBody className="card-body">
                                <div className="card-body">
                                    <h2>Articles</h2>
                                    <p className="body-content">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. 
                                        Praesent libero. Sed cursus ante dapibus diam. Sed nisi. 
                                        Nulla quis sem at nibh elementum imperdiet. 
                                        Duis sagittis ipsum. Praesent mauris. 
                                        Fusce nec tellus sed augue semper porta. Mauris massa. 
                                    </p>
                                </div>
                            </CardBody>
                            <CardFooter>
                                <button className="button button-primary">
                                    <a to="#">
                                    <i className="fa fa-chevron-right"></i>
                                    Find out more
                                    </a>
                                </button>
                            </CardFooter>
                        </Card>
                        </Col>
                        <Col lg="4">
                        <Card className="card">
                        <CardHeader image={ "https://source.unsplash.com/user/erondu/600x400" }>
                                <header style={style} id={image} className="card-header">
                                    <h4 className="card-header--title">Pages</h4>
                                </header>
                            </CardHeader>
                            <CardBody className="card-body">
                                <div className="card-body">
                                    <h2>Pages</h2>
                                    <p className="body-content">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. 
                                        Praesent libero. Sed cursus ante dapibus diam. Sed nisi. 
                                        Nulla quis sem at nibh elementum imperdiet. 
                                        Duis sagittis ipsum. Praesent mauris. 
                                        Fusce nec tellus sed augue semper porta. Mauris massa. 
                                    </p>
                                </div>
                            </CardBody>
                            <CardFooter>
                                <button className="button button-primary">
                                    <a to="#">
                                    <i className="fa fa-chevron-right"></i>
                                    Find out more
                                    </a>
                                </button>
                            </CardFooter>
                        </Card>
                        </Col>
                        <Col lg="4">
                        <Card className="card">
                            <CardHeader image={ "https://source.unsplash.com/user/erondu/600x400" }>
                                <header style={style} id={image} className="card-header">
                                    <h4 className="card-header--title">Reports</h4>
                                </header>
                            </CardHeader>
                            <CardBody className="card-body">
                                <div className="card-body">
                                    <h2>Reports</h2>
                                    <p className="body-content">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. 
                                    Praesent libero. Sed cursus ante dapibus diam. Sed nisi. 
                                    Nulla quis sem at nibh elementum imperdiet. 
                                    Duis sagittis ipsum. Praesent mauris. 
                                    Fusce nec tellus sed augue semper porta. Mauris massa. 
                                    </p>
                                </div>
                            </CardBody>
                            <CardFooter>
                                <button className="button button-primary">
                                    <a to="#">
                                    <i className="fa fa-chevron-right"></i>
                                    Find out more
                                    </a>
                                </button>
                            </CardFooter>
                        </Card>
                        </Col>
                        <Col lg="4">
                        <Card className="card">
                            <CardHeader image={ "https://source.unsplash.com/user/erondu/600x400" }>
                                <header style={style} id={image} className="card-header">
                                    <h4 className="card-header--title">Subscription</h4>
                                </header>
                            </CardHeader>
                            <CardBody className="card-body">
                                <div className="card-body">
                                    <h2>Subscription options</h2>
                                    <p className="body-content">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. 
                                        Praesent libero. Sed cursus ante dapibus diam. Sed nisi. 
                                        Nulla quis sem at nibh elementum imperdiet. 
                                        Duis sagittis ipsum. Praesent mauris. 
                                        Fusce nec tellus sed augue semper porta. Mauris massa. 
                                    </p>
                                </div>
                            </CardBody>
                            <CardFooter>
                                <button className="button button-primary">
                                    <a to="#">
                                    <i className="fa fa-chevron-right"></i>
                                    Find out more
                                    </a>
                                </button>
                            </CardFooter>
                        </Card>
                        </Col>
                        </CardDeck>
                    </Row>                
                </div>
            </>
        )
    }
}
export default Dashboard;