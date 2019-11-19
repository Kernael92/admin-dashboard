import React from 'react';
import Collapse from '@kunukn/react-collapse';
import cx from 'classnames';
import { PrismCode } from 'react-prism';
import { Player, ControlBar } from 'video-react';

// reactstrap components
import { 
    Card, 
    CardHeader,
    CardFooter,
    CardTitle, 
    CardBody, 
    Row, 
    Col, 
    ListGroup, 
    ListGroupItem 
} from 'reactstrap';

const sources = {
    phishingOverview: 'http://media.w3.org/2010/05/sintel/trailer.mp4',
    phishingExample: 'http://media.w3.org/2010/05/bunny/trailer.mp4',
    vishing: 'http://media.w3.org/2010/05/bunny/movie.mp4',
    smashing: 'http://media.w3.org/2010/05/video/movie_300.webm'
  };


class Reports extends React.Component {
    constructor(props, context) {
        super(props, context);
    
        this.state = {
            source: sources.bunnyMovie,
            isOpen1: false,
            isOpen2: false,
            isOpen3: false,
            isOpen4: false,
            isOpen5: false,
            isOpen6: false,
            isOpen7: false,
            isOpen8: false,
            spy3: {}
        };
        
        
    }

    componentDidMount() {
        // subscribe state change
        this.player.subscribeToStateChange(this.handleStateChange.bind(this));
    }

    handleStateChange(state) {
        // copy player state to this component's state
        this.setState({
          player: state
        });
    }
    
    changeSource(name) {
        return () => {
          this.setState({
            source: sources[name]
          });
          this.player.load();
        };
    }
    
    

    toggle = index => {
        let collapse = "isOpen" + index;
    
        this.setState(prevState => ({ [collapse]: !prevState[collapse] }));
    };

    render() {
        return (
            <>
                <div className="content">
                        <Row>
                            <Col lg="6">
                            <Card className="card">
                                <CardHeader id="headingOne">
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
                                <CardFooter>
                                    <button
                                        className={cx("app__toggle btn btn-primary", {
                                            "app__toggle--active": this.state.isOpen1
                                        })}
                                        onClick={() => this.toggle(1)} 
                                    >
                                        Phishing
                                    </button>
                                </CardFooter>
                            </Card>
                            <Collapse
                                isOpen={this.state.isOpen1}
                                className={
                                "app__collapse app__collapse--gradient " +
                                (this.state.isOpen1 ? "app__collapse--active" : "")
                                }
                                transition="height 800ms cubic-bezier(0.4, 0, 0.2, 1)"
                                aria-hidden={this.state.isOpen1 ? "false" : "true"}
                                elementType="article"
                                render={collapseState => (
                                <React.Fragment>
                                    <div className="app__content">
                                   
                                    <Player
                                        ref={player => {
                                            this.player = player;
                                        }}
                                        autoPlay
                                    >
                                        <source src={this.state.source} />
                                        <ControlBar autoHide={false} />
                                    </Player>
                                    <Card className="card">
                                        <ListGroup>
                                            <ListGroupItem className="list-group-item" onClick={this.changeSource('phishingOverview')} >
                                                Phishing Overview
                                            </ListGroupItem>
                                            <ListGroupItem className="list-group-item" onClick={this.changeSource('phishingExample')}>
                                                Common Phishing Examples 
                                            </ListGroupItem>
                                            <ListGroupItem className="list-group-item" onClick={this.changeSource('vishing')}>
                                               Detecting a Phishing Email
                                            </ListGroupItem>
                                            <ListGroupItem className="list-group-item" onClick={this.changeSource('smashing')}>
                                               What is BEC
                                            </ListGroupItem>
                                            <ListGroupItem className="list-group-item" onClick={this.changeSource('vishing')}>
                                                Avoiding BEC attack
                                            </ListGroupItem>
                                            <ListGroupItem className="list-group-item" onClick={this.changeSource('vishing')}>
                                               What is vishing
                                            </ListGroupItem>
                                            <ListGroupItem className="list-group-item" onClick={this.changeSource('smashing')}>
                                              What is Smashing
                                            </ListGroupItem>
                                            <ListGroupItem className="list-group-item" >
                                                <a href="/quiz">Quiz</a>
                                            </ListGroupItem>

                                        </ListGroup>
                                    </Card>
                                    <button onClick={() => this.toggle(1)} className="app__button">
                                        close
                                    </button>
                                    </div>
                                    
                                </React.Fragment>
                                )}
                            />
                            </Col>
                            <Col lg="6">
                            <Card className="card">
                                <CardHeader id="headingTwo">
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
                                <CardFooter>
                                <button
                                    className={cx("app__toggle btn btn-primary", {
                                        "app__toggle--active": this.state.isOpen2
                                    })}
                                    onClick={() => this.toggle(2)}
                                >
                                    Social Engineering
                                </button>
                                    
                                </CardFooter>
                            </Card>
                            <Collapse
                                isOpen={this.state.isOpen2}
                                className={
                                "app__collapse app__collapse--gradient " +
                                (this.state.isOpen2 ? "app__collapse--active" : "")
                                }
                                transition="height 800ms cubic-bezier(0.4, 0, 0.2, 1)"
                                aria-hidden={this.state.isOpen2 ? "false" : "true"}
                                elementType="article"
                                render={collapseState => (
                                <React.Fragment>
                                    <div className="app__content">
                                    <div>{collapseState}</div>
                                    <Card className="card">
                                        <ListGroup className="list-group list-group-flush">
                                            <ListGroupItem className="list-group-item">Social Engineering Overview</ListGroupItem>
                                            <ListGroupItem className="list-group-item">Common Phishing Examples</ListGroupItem>
                                            <ListGroupItem className="list-group-item">
                                                <a href="#">Quiz</a>
                                            </ListGroupItem>
                                        </ListGroup>
                                    </Card>
                                    <button onClick={() => this.toggle(2)} className="app__button">
                                        close
                                    </button>
                                    </div>
                                </React.Fragment>
                                )}
                            />
                            </Col>
                            <Col lg="6">
                            <Card className="card">
                                <CardHeader id="headingThree">
                                <h5 className="card-category">Ransomware</h5>
                                <CardTitle tag="h3">
                                    <p>Ransonware</p>
                                </CardTitle>
                                </CardHeader>
                                <CardBody>
                                <div className="material-details">
                                    <p>Malware</p>
                                </div>
                                </CardBody>
                                <CardFooter>
                                <button
                                    className={cx("app__toggle btn btn-primary", {
                                        "app__toggle--active": this.state.isOpen3
                                    })}
                                    onClick={() => this.toggle(3)}
                                >
                                    Ransomware
                                </button>
                                    
                                </CardFooter>
                            </Card>
                            <Collapse
                                isOpen={this.state.isOpen3}
                                className={
                                "app__collapse app__collapse--gradient " +
                                (this.state.isOpen3 ? "app__collapse--active" : "")
                                }
                                transition="height 800ms cubic-bezier(0.4, 0, 0.2, 1)"
                                aria-hidden={this.state.isOpen3 ? "false" : "true"}
                                elementType="article"
                                render={collapseState => (
                                <React.Fragment>
                                    <div className="app__content">
                                    <div>{collapseState}</div>
                                    <Card className="card">
                                        <ListGroup className="list-group list-group-flush">
                                            <ListGroupItem className="list-group-item">What is ransonware</ListGroupItem>
                                            <ListGroupItem className="list-group-item">Avoiding ransonware</ListGroupItem>
                                            <ListGroupItem className="list-group-item">
                                                <a href="#">Quiz</a>
                                            </ListGroupItem>
                                        </ListGroup>
                                    </Card>
                                    <button onClick={() => this.toggle(3)} className="app__button">
                                        close
                                    </button>
                                    </div>
                                </React.Fragment>
                                )}
                            />
                            <div >   
                            </div>
                            </Col>
                            <Col lg="6">
                            <Card className="card">
                                <CardHeader id="headingFour">
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
                                <CardFooter>
                                <button
                                    className={cx("app__toggle btn btn-primary", {
                                        "app__toggle--active": this.state.isOpen4
                                    })}
                                    onClick={() => this.toggle(4)}
                                >
                                    Removal media
                                </button>
                                </CardFooter>
                            </Card>
                            <Collapse
                                isOpen={this.state.isOpen4}
                                className={
                                "app__collapse app__collapse--gradient " +
                                (this.state.isOpen4 ? "app__collapse--active" : "")
                                }
                                transition="height 800ms cubic-bezier(0.4, 0, 0.2, 1)"
                                aria-hidden={this.state.isOpen4 ? "false" : "true"}
                                elementType="article"
                                render={collapseState => (
                                <React.Fragment>
                                    <div className="app__content">
                                    <div>{collapseState}</div>
                                    <Card className="card">
                                        <ListGroup className="list-group list-group-flush">
                                            <ListGroupItem className="list-group-item">USB Safety</ListGroupItem>
                                            <ListGroupItem className="list-group-item">Social Media</ListGroupItem>
                                            <ListGroupItem className="list-group-item">Shadow IT - The Hidden Dangers</ListGroupItem>
                                            <ListGroupItem className="list-group-item">
                                                <a href="#">Quiz</a>
                                            </ListGroupItem>
                                        </ListGroup>
                                    </Card>
                                    <button onClick={() => this.toggle(4)} className="app__button">
                                        close
                                    </button>
                                    </div>
                                </React.Fragment>
                                )}
                            />
                            </Col>
                            <Col lg="6">
                            <Card className="card">
                                <CardHeader id="headingFive">
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
                                <CardFooter>
                                <button
                                    className={cx("app__toggle btn btn-primary", {
                                        "app__toggle--active": this.state.isOpen5
                                    })}
                                    onClick={() => this.toggle(5)}
                                >
                                    Physical security
                                </button>
                                </CardFooter>
                            </Card>
                            <Collapse
                                isOpen={this.state.isOpen5}
                                className={
                                "app__collapse app__collapse--gradient " +
                                (this.state.isOpen5 ? "app__collapse--active" : "")
                                }
                                transition="height 800ms cubic-bezier(0.4, 0, 0.2, 1)"
                                aria-hidden={this.state.isOpen5 ? "false" : "true"}
                                elementType="article"
                                render={collapseState => (
                                <React.Fragment>
                                    <div className="app__content">
                                    <div>{collapseState}</div>
                                    <Card className="card">
                                        <ListGroup className="list-group list-group-flush">
                                            <ListGroupItem className="list-group-item">Creating a strong Password </ListGroupItem>
                                            <ListGroupItem className="list-group-item">Have I been hacked</ListGroupItem>
                                            <ListGroupItem className="list-group-item">
                                                <a href="#">Quiz</a>
                                            </ListGroupItem>
                                        </ListGroup>
                                    </Card>
                                    <button onClick={() => this.toggle(5)} className="app__button">
                                        close
                                    </button>
                                    </div>
                                </React.Fragment>
                                )}
                            />
                            </Col>
                            <Col lg="6">
                            <Card className="card">
                                <CardHeader id="headingSix">
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
                                <CardFooter>
                                <button
                                    className={cx("app__toggle btn btn-primary", {
                                        "app__toggle--active": this.state.isOpen6
                                    })}
                                    onClick={() => this.toggle(6)}
                                >
                                    Remotely
                                </button>
                                </CardFooter>
                            </Card>
                            <Collapse
                                isOpen={this.state.isOpen6}
                                className={
                                "app__collapse app__collapse--gradient " +
                                (this.state.isOpen6 ? "app__collapse--active" : "")
                                }
                                transition="height 800ms cubic-bezier(0.4, 0, 0.2, 1)"
                                aria-hidden={this.state.isOpen6 ? "false" : "true"}
                                elementType="article"
                                render={collapseState => (
                                <React.Fragment>
                                    <div className="app__content">
                                    <div>{collapseState}</div>
                                    <Card className="card">
                                        <ListGroup className="list-group list-group-flush">
                                            <ListGroupItem className="list-group-item">Staying safe on Public Wifi</ListGroupItem>
                                            <ListGroupItem className="list-group-item">
                                                <a href="#">Quiz</a>
                                            </ListGroupItem>
                                            
                                        </ListGroup>
                                    </Card>
                                    <button onClick={() => this.toggle(6)} className="app__button">
                                        close
                                    </button>
                                    </div>
                                </React.Fragment>
                                )}
                            />
                            </Col>
                            <Col lg="6">
                            <Card className="card">
                                <CardHeader id="headingSeven">
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
                                <CardFooter>
                                <button
                                    className={cx("app__toggle btn btn-primary", {
                                        "app__toggle--active": this.state.isOpen7
                                    })}
                                    onClick={() => this.toggle(7)}
                                >
                                    Mobile security
                                </button>
                                </CardFooter>
                            </Card>
                            <Collapse
                                isOpen={this.state.isOpen7}
                                className={
                                "app__collapse app__collapse--gradient " +
                                (this.state.isOpen7 ? "app__collapse--active" : "")
                                }
                                transition="height 800ms cubic-bezier(0.4, 0, 0.2, 1)"
                                aria-hidden={this.state.isOpen7 ? "false" : "true"}
                                elementType="article"
                                render={collapseState => (
                                <React.Fragment>
                                    <div className="app__content">
                                    <div>{collapseState}</div>
                                    <Card className="card">
                                        <ListGroup className="list-group list-group-flush">
                                            <ListGroupItem className="list-group-item">Mobile Security Threats</ListGroupItem>
                                            <ListGroupItem className="list-group-item">Preventing Mobile Security Threats</ListGroupItem>
                                            <ListGroupItem className="list-group-item">
                                                <a href="#">Quiz</a>
                                            </ListGroupItem>
                                        </ListGroup>
                                    </Card>
                                    <button onClick={() => this.toggle(7)} className="app__button">
                                        close
                                    </button>
                                    </div>
                                </React.Fragment>
                                )}
                            />
                            </Col>
                            <Col lg="6">
                            <Card className="card">
                                <CardHeader id="headingEight">
                                <CardTitle tag="h3">
                                    <h1>Safe Web browsing</h1>
                                </CardTitle>
                                </CardHeader>
                                <CardBody>
                                <div className="material-details">
                                    <p>Safe Web browsing</p>
                                </div>
                                </CardBody>
                                <CardFooter>
                                    <button
                                        className={cx("app__toggle btn btn-primary", {
                                            "app__toggle--active": this.state.isOpen8
                                        })}
                                        onClick={() => this.toggle(8)}
                                    >
                                        Browsing
                                    </button>
                                </CardFooter>
                            </Card>
                            <Collapse
                                isOpen={this.state.isOpen8}
                                className={
                                "app__collapse app__collapse--gradient " +
                                (this.state.isOpen8 ? "app__collapse--active" : "")
                                }
                                transition="height 800ms cubic-bezier(0.4, 0, 0.2, 1)"
                                aria-hidden={this.state.isOpen8 ? "false" : "true"}
                                elementType="article"
                                render={collapseState => (
                                <React.Fragment>
                                    <div className="app__content">
                                    <div>{collapseState}</div>
                                    <Card className="card">
                                        <ListGroup className="list-group list-group-flush">
                                            <ListGroupItem className="list-group-item">What is ransonware</ListGroupItem>
                                            <ListGroupItem className="list-group-item">Avoiding ransonware</ListGroupItem>
                                            <ListGroupItem className="list-group-item">
                                                <a href="#">Quiz</a>
                                            </ListGroupItem>
                                        </ListGroup>
                                    </Card>
                                    <button onClick={() => this.toggle(8)} className="app__button">
                                        close
                                    </button>
                                    </div>
                                </React.Fragment>
                                )}
                            />
                            </Col>
                        </Row> 
                                
                </div>
            </>
            )
        }
    }

export default Reports;