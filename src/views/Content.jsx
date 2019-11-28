import React from 'react';
import Modal from 'react-awesome-modal';
import Collapse from '@kunukn/react-collapse';
import cx from 'classnames';
import { PrismCode } from 'react-prism';
import { Player, ControlBar } from 'video-react';
import { CsvToHtmlTable } from 'react-csv-to-table';
import { phishing } from 'assets/img/phishing.jpeg';

// react modal video components
import 'react-modal-video/scss/modal-video.scss'
import ModalVideo from 'react-modal-video'

// mdbreact components
import {
    MDBContainer,
    MDBCard,
    MDBCardTitle,
    MDBBtn,
    MDBRow,
    MDBCol,
    MDBIcon
} from 'mdbreact'

// reactstrap components
import { 
    Card,
    CardDeck, 
    CardImg,
    
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
const sampleData=`Questions, Answers
What is phishing,answer1,answer2,answer3,answer4,answer1
What is 1 + 1,answer1,answer2,answer3,answer4,answer2
How can you avoid becoming a victim of phishing scams,answer1,answer2,answer3,answer4,answer1
What is flask,answer1,answer2,answer3,answer4,answer3
What is Django,answer1,answer2,answer3,answer4,answer4
What is react,answer1,answer2,answer3,answer4,answer2`;

class Contents extends React.Component {
    constructor(props, context) {
        super(props, context);
    
        this.state = {
            source: sources.phishingOverview,
            isOpen: false,
            isOpen1: false,
            isOpen2: false,
            isOpen3: false,
            isOpen4: false,
            isOpen5: false,
            isOpen6: false,
            isOpen7: false,
            isOpen8: false,
            visible: false,
            spy3: {}
        };
        this.openModal = this.openModal.bind(this)
        
        
    }

    
    
    // changeSource(name) {
    //     return () => {
    //       this.setState({
    //         source: sources[name]
    //       });
    //       this.player.load();
    //     };
    // }
    
    

    toggle = index => {
        let collapse = "isOpen" + index;
    
        this.setState(prevState => ({ [collapse]: !prevState[collapse] }));
    };

    show() {
        this.setState({ visible: true});
    }

    hide() {
        this.setState({ visible: false});
    }

    openModal () {
        this.setState({isOpen: true})
      }

    render() {
        return (
            <>
                <div className="content">
                    <MDBContainer className="d-flex flex-wrap">
                        <MDBCol md="6" className="md-0 mb-4">
                            <MDBCard
                                className="card-image"
                                style={{
                                    backgroundImage:
                                    "url(https://mdbootstrap.com/img/Photos/Horizontal/Nature/6-col/img%20%2873%29.jpg)"
                                    
                                }}
                            >
                                <div 
                                    className="text-white text-center 
                                                d-flex align-items-center 
                                                rgba-black-strong py-5 px-4 rounded"
                                >
                                    <div>
                                        <h5 className="blue-text">
                                            <MDBIcon icon="email-square"/> 
                                            Phishing
                                        </h5>
                                        <MDBCardTitle tag="h3" className="pt-2">
                                            <strong>Phishing materials</strong>

                                        </MDBCardTitle>
                                        <p>
                                            Phishing is the fraudulent attempt to obtain 
                                            sensitive information such as usernames, 
                                            passwords and credit card details by disguising 
                                            oneself as a trustworthy entity in an electronic 
                                            communication.
                                        </p>
                                        <MDBBtn 
                                            gradient="blue"
                                            className={cx("app__toggle btn btn-info", {
                                            "app__toggle--active": this.state.isOpen1
                                            })}
                                            onClick={() => this.toggle(1)} 
                                        >
                                            <MDBIcon icon="clone left" />
                                            View items

                                        </MDBBtn>
                                    </div>

                                </div>
                                
                            </MDBCard>
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
                                    
                                    <ModalVideo 
                                        channel='youtube' 
                                        isOpen={this.state.isOpen} 
                                        videoId='PR0c-gJ20kA'
                                        onClose={() => this.setState({isOpen: false})} 
                                    />
                                    <Card className="card">
                                        <ListGroup>
                                            <ListGroupItem className="list-group-item" onClick={this.openModal} >
                                                What is Phishing
                                            </ListGroupItem>
                                            <ListGroupItem className="list-group-item" onClick={this.openModal}>
                                                Common phishing examples
                                                
                                            </ListGroupItem>
                                            
                                            <ListGroupItem className="list-group-item" >
                                                <div>
                                                    <a value="open" onClick={this.show.bind(this)}>Quiz</a>
                                                    <Modal 
                                                        visible={this.state.visible} 
                                                        onClickAway={this.hide.bind(this)}
                                                        effect="fadeInUp"
                                                        className="modal"
                                                        
                                                    >
                                                        <div>
                                                            <CsvToHtmlTable 
                                                                data={sampleData} 
                                                                csvDelimiter="," 
                                                                tableClassName="table table-dark"
                                                            />
                                                            <a onClick={this.hide.bind(this)}>Close</a>                                                            <a href="javascript:void(0);" onClick={() => this.closeModal()}>Close</a>

                                                        </div>
                                                    </Modal>
                                                </div>
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
                            </MDBCol>
                            <MDBCol md="6" className="md-0 mb-4">
                            <MDBCard
                                className="card-image"
                                style={{
                                    backgroundImage:
                                    "url('https://mdbootstrap.com/img/Photos/Horizontal/Work/4-col/img%20%2814%29.jpg')"
                                }}
                                
                            >
                                <div 
                                    className="primary-color text-white 
                                                d-flex align-items-center 
                                                 py-5 px-4 text-center"
                                >
                                    <div>
                                        <h5 className="blue-text">
                                            <MDBIcon icon="person"/> 
                                            Social Engineering
                                        </h5>
                                        <MDBCardTitle tag="h3" className="pt-2">
                                            <strong>Social Enginnering</strong>

                                        </MDBCardTitle>
                                        <p>
                                            Social engineering attacks usually exploit human psychology 
                                            and susceptibility to manipulation to trick victims 
                                            into uncovering sensitive data or breaking security 
                                            measures that will allow an attacker access to 
                                            the network.
                                        </p>
                                        <MDBBtn 
                                            color="blue"
                                            className={cx("app__toggle btn btn-info", {
                                            "app__toggle--active": this.state.isOpen2
                                            })}
                                            onClick={() => this.toggle(2)} 
                                        >
                                            <MDBIcon icon="clone left" />
                                            View items

                                        </MDBBtn>
                                    </div>

                                </div>
                                
                            </MDBCard>
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
                                    <ModalVideo 
                                        channel='youtube' 
                                        isOpen={this.state.isOpen} 
                                        videoId='PR0c-gJ20kA'
                                        onClose={() => this.setState({isOpen: false})} />
                                    <Card className="card">
                                        <ListGroup className="list-group list-group-flush">
                                            <ListGroupItem className="list-group-item" onClick={this.openModal}  >Social Engineering Overview</ListGroupItem>
                                            <ListGroupItem className="list-group-item" onClick={this.openModal}>Common Phishing Examples</ListGroupItem>
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
                        </MDBCol>
                        <MDBCol md="6" className="md-0 mb-4">
                            <MDBCard
                                className="card-image"
                                style={{
                                    backgroundImage:
                                    "url('https://mdbootstrap.com/img/Photos/Horizontal/Work/4-col/img%20%2814%29.jpg')"
                                }}
                            >
                                <div 
                                    className="primary-color text-white 
                                                d-flex align-items-center 
                                                 py-5 px-4 text-center"
                                >
                                    <div>
                                        <h5 className="blue-text">
                                            <MDBIcon icon="phone"/> 
                                            Ransomware
                                        </h5>
                                        <MDBCardTitle tag="h3" className="pt-2">
                                            <strong>Ransonware</strong>

                                        </MDBCardTitle>
                                        <p>
                                            Ransomware is a type of malicious software, 
                                            or malware, designed to deny access to a computer system 
                                            or data until a ransom is paid. Ransomware typically spreads 
                                            through phishing emails or by unknowingly visiting an infected website. 
                                            Ransomware can be devastating to an individual or an organization.
                                        </p>
                                        <MDBBtn 
                                            color="blue"
                                            className={cx("app__toggle btn btn-info", {
                                            "app__toggle--active": this.state.isOpen3
                                            })}
                                            onClick={() => this.toggle(3)} 
                                        >
                                            <MDBIcon icon="clone left" />
                                            View items

                                        </MDBBtn>
                                    </div>

                                </div>
                                
                            </MDBCard>
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
                        </MDBCol>
                        <MDBCol md="6" className="md-0 mb-4">
                            <MDBCard
                                className="card-image"
                                style={{
                                    backgroundImage:
                                    "url('https://mdbootstrap.com/img/Photos/Horizontal/Work/4-col/img%20%2814%29.jpg')"
                                }}
                            >
                                <div 
                                    className="primary-color text-white 
                                                d-flex align-items-center 
                                                 py-5 px-4 text-center"
                                >
                                    <div>
                                        <h5 className="blue-text">
                                            <MDBIcon icon="usb"/> 
                                            Removable Media
                                        </h5>
                                        <MDBCardTitle tag="h3" className="pt-2">
                                            <strong>Removable Media</strong>

                                        </MDBCardTitle>
                                        <p>
                                            Removable media can be thought of as a portable storage 
                                            medium that allows users to copy data to it 
                                            and then take it off site, and vice versa. 
                                            It presents itself as a convenient, 
                                            cost effective storage solution that is available 
                                            in many different size capacities and form factors, 
                                            with differing transfer speed capabilities.
                                        </p>
                                        <MDBBtn 
                                            color="blue"
                                            className={cx("app__toggle btn btn-info", {
                                                "app__toggle--active": this.state.isOpen4
                                            })}
                                            onClick={() => this.toggle(4)}
                                        >
                                            <MDBIcon icon="clone left" />
                                            View items

                                        </MDBBtn>
                                    </div>

                                </div>
                                
                            </MDBCard>
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
                        </MDBCol>
                        <MDBCol md="6" className="md-0 mb-4">
                            <MDBCard
                                className="card-image"
                                style={{
                                    backgroundImage:
                                    "url('https://mdbootstrap.com/img/Photos/Horizontal/Work/4-col/img%20%2814%29.jpg')"
                                }}
                            >
                                <div 
                                    className="primary-color text-white 
                                                d-flex align-items-center 
                                                 py-5 px-4 text-center"
                                >
                                    <div>
                                        <h5 className="blue-text">
                                            <MDBIcon icon="phone"/> 
                                            Physical security
                                        </h5>
                                        <MDBCardTitle tag="h3" className="pt-2">
                                            <strong>Physical security</strong>

                                        </MDBCardTitle>
                                        <p>
                                            Physical security is the protection of personnel, 
                                            hardware, software, networks and data from physical actions 
                                            and events that could cause serious loss or damage to an enterprise, 
                                            agency or institution.
                                        </p>
                                        <MDBBtn 
                                            color="blue"
                                            className={cx("app__toggle btn btn-info", {
                                                "app__toggle--active": this.state.isOpen5
                                            })}
                                            onClick={() => this.toggle(5)}
                                        >
                                            <MDBIcon icon="clone left" />
                                            View items

                                        </MDBBtn>
                                    </div>

                                </div>
                                
                            </MDBCard>
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
                        </MDBCol>
                        <MDBCol md="6" className="md-0 mb-4">
                            <MDBCard
                                className="card-image"
                                style={{
                                    backgroundImage:
                                    "url('https://mdbootstrap.com/img/Photos/Horizontal/Work/4-col/img%20%2814%29.jpg')"
                                }}
                            >
                                <div 
                                    className="primary-color text-white 
                                                d-flex align-items-center 
                                                 py-5 px-4 text-center"
                                >
                                    <div>
                                        <h5 className="blue-text">
                                            <MDBIcon icon="phone"/> 
                                            Working remotely
                                        </h5>
                                        <MDBCardTitle tag="h3" className="pt-2">
                                            <strong>Working Remotely</strong>

                                        </MDBCardTitle>
                                        <p>
                                            Remote work refers to a job that is done outside of the office. 
                                            It is sometimes called telecommuting or teleworking
                                        </p>
                                        <MDBBtn 
                                            color="blue"
                                            className={cx("app__toggle btn btn-info", {
                                            "app__toggle--active": this.state.isOpen6
                                            })}
                                            onClick={() => this.toggle(6)}
                                        >
                                            <MDBIcon icon="clone left" />
                                            View items

                                        </MDBBtn>
                                    </div>

                                </div>
                                
                            </MDBCard>
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
                        </MDBCol>
                        <MDBCol md="6" className="md-0 mb-4">
                            <MDBCard
                                className="card-image"
                                style={{
                                    backgroundImage:
                                    "url('https://mdbootstrap.com/img/Photos/Horizontal/Work/4-col/img%20%2814%29.jpg')"
                                }}
                            >
                                <div 
                                    className="primary-color text-white 
                                                d-flex align-items-center 
                                                 py-5 px-4 text-center"
                                >
                                    <div>
                                        <h5 className="blue-text">
                                            <MDBIcon icon="phone-square"/> 
                                            Mobile security
                                        </h5>
                                        <MDBCardTitle tag="h3" className="pt-2">
                                            <strong>Mobile Security</strong>

                                        </MDBCardTitle>
                                        <p>
                                            Mobile security is the protection of smartphones, 
                                            tablets, laptops and other portable computing devices, 
                                            and the networks they connect to, from threats 
                                            and vulnerabilities associated with wireless computing. 
                                            Mobile security is also known as wireless security.
                                        </p>
                                        <MDBBtn 
                                            color="blue"
                                            className={cx("app__toggle btn btn-info", {
                                            "app__toggle--active": this.state.isOpen7
                                            })}
                                            onClick={() => this.toggle(7)}
                                        >
                                            <MDBIcon icon="clone left" />
                                            View items

                                        </MDBBtn>
                                    </div>

                                </div>
                                
                            </MDBCard>
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
                        </MDBCol>
                        <MDBCol md="6" className="md-0 mb-4">
                            <MDBCard
                                className="card-image"
                                style={{
                                    backgroundImage:
                                    "url('https://mdbootstrap.com/img/Photos/Horizontal/Work/4-col/img%20%2814%29.jpg')"
                                }}
                            >
                                <div 
                                    className="primary-color text-white 
                                                d-flex align-items-center 
                                                 py-5 px-4 text-center"
                                >
                                    <div>
                                        <h5 className="blue-text">
                                            <MDBIcon icon="phone"/> 
                                            Safe Web browsing
                                        </h5>
                                        <MDBCardTitle tag="h3" className="pt-2">
                                            <strong>Safe Web browsing</strong>

                                        </MDBCardTitle>
                                        <p>
                                            Safe Browsing is a Google service that lets client 
                                            applications check URLs against Google's constantly updated 
                                            lists of unsafe web resources. 
                                            Examples of unsafe web resources are social engineering sites 
                                            and sites that host malware or unwanted software
                                        </p>
                                        <MDBBtn 
                                            color="blue"
                                            className={cx("app__toggle btn btn-info", {
                                            "app__toggle--active": this.state.isOpen8
                                            })}
                                            onClick={() => this.toggle(8)}
                                        >
                                            <MDBIcon icon="clone left" />
                                            View items

                                        </MDBBtn>
                                    </div>

                                </div>
                                
                            </MDBCard>
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
                        </MDBCol>
                    </MDBContainer>                
                </div>
            </>
            )
        }
    }

export default Contents;