import React from 'react';
import Collapse from '@kunukn/react-collapse';
import cx from 'classnames';
import { PrismCode } from 'react-prism';
import { Player, ControlBar } from 'video-react';
// library to convert csv file to html table
import { CsvToHtmlTable } from 'react-csv-to-table';
// import Modal from 'react-responsive-modal';
import phishing from 'assets/img/phishing.pdf';
// react-player components for react video
import ReactPlayer from 'react-player';
// react-responsive-modal components
import Modal from "react-responsive-modal"
// react-pure-modal components
import PureModal from 'react-pure-modal';
import 'react-pure-modal/dist/react-pure-modal.min.css';

// react modal video components
import 'react-modal-video/scss/modal-video.scss';
import ModalVideo from 'react-modal-video';
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
    ListGroupItem, 
    
    ModalBody,
    ModalHeader,
    ModalFooter
} from 'reactstrap';

// react-bootstrap components
import {
    ModalTitle,
    ModalDialog
} from 'react-bootstrap';

// mdbreact components
import {
    MDBContainer,
    MDBCard,
    MDBCardTitle,
    MDBBtn,
    MDBModal,
    MDBModalBody,
    MDBModalFooter,
    MDBModalHeader,
    MDBCol,
    MDBIcon
} from 'mdbreact';

// react-pdf components
import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

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
            modal1: false,
            modal2:false,
            open: false,
            spy3: {},
            numPages: null,
            pageNumber: 1,
            show: false,
        };
        this.openModal = this.openModal.bind(this) 
          
    }
    onDocumentLoadSuccess = ({ numPages }) => {
        this.setState({ numPages });
    }

    goToPrevPage = () => 
        this.setState(state => ({ pageNumber: state.pageNumber - 1}));

    goToNextPage = () => 
        this.setState(state => ({ pageNumber: state.pageNumber + 1}));

    onOpenModal = () => {
        this.setState({open: true });
    };

    onCloseModal = () => {
        this.setState({ open: false });
    }
    
    
    // changeSource(name) {
    //     return () => {
    //       this.setState({
    //         source: sources[name]
    //       });
    //       this.player.load();
    //     };
    // }
    
    

    toggleModal = nr => () => {
        let modalNumber = 'modal' + nr
        this.setState({
            [modalNumber]: !this.state[modalNumber]
        });
    }

    toggle = index => {
        let collapse = "isOpen" + index;
    
        this.setState(prevState => ({ [collapse]: !prevState[collapse] }));
    };



    openModal () {
        this.setState({isOpen: true})
      }
    
    
    render() {
        const { pageNumber, numPages } = this.state;
        
        return (
            <>
                <div className="content">
                    <MDBContainer className="d-flex flex-wrap">
                        <MDBCol md="6" className="md-0 mb-4">
                            <MDBCard
                                className="card-image"
                                style={{
                                    backgroundImage:
                                    "url(https://mdbootstrap.com/img/Photos/Horizontal/Work/4-col/img%20%2814%29.jpg)"
                                    
                                }}
                            >
                                <div 
                                    className="text-white text-center 
                                                d-flex align-items-center 
                                                rgba-black-strong py-5 px-4 rounded"
                                >
                                    <div>
                                        <h5 className="blue-text">
                                            <MDBIcon icon="mail-square"/> 
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

                                    {/* <ModalVideo 
                                        channel='youtube' 
                                        isOpen={this.state.isOpen} 
                                        videoId='PR0c-gJ20kA'
                                        onClose={() => this.setState({isOpen: false})} 
                                    /> */}
                                    <Card className="card">
                                        <ListGroup>
                                            <ListGroupItem className="list-group-item" onClick={this.onOpenModal} >
                                                <span onClick={this.onOpenModal}>What is Phishing</span>
                                                <Modal
                                                    open={this.state.open}
                                                    onClose = {this.onCloseModal}
                                                    styles={{
                                                        modal: {
                                                            maxWidth: "unset",
                                                            width: "100%",
                                                            padding: "unset"
                                                        },
                                                        closeButton: {
                                                            background: "blue"
                                                        }
                                                    }}
                                                    center
                                                >
                                                    <div className="player-wrapper">
                                                        <ReactPlayer
                                                            className="react-player" 
                                                            url={[{src: 'http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4', type: 'video/mp4'}]} 
                                                            controls
                                                            width="100%"
                                                            height="calc(100vh - 100px)"
                                                        /> 
                                                    </div>

                                                </Modal>
                                            </ListGroupItem>
                                            <ListGroupItem className="list-group-item" >
                                                
                                                <div>
                                                    <span onClick={this.toggleModal(1)}>Common phishing examples</span>
                                                    
                                                        <ModalDialog
                                                            isOpen={this.state.modal1}
                                                            onClose={this.toggleModal(1)}
                                                            scrollable
                                                            centered
                                                        
                                                        >
                                                            <ModalHeader closeButton>
                                                                <ModalTitle >
                                                                    Common phishing examples    
                                                                </ModalTitle>
                                                                <span onClick={this.goToPrevPage}>
                                                                    <MDBIcon icon="angle-left" size="3x"/>
                                                                </span>
                                                                <span onClick={this.goToNextPage}>
                                                                    <MDBIcon icon="angle-right" size="3x"/>
                                                                </span>
                                                            </ModalHeader>
                                                            <ModalBody style={{'maxHeight': 'calc(100vh - 210px)', 'overFlowY': 'auto'}}>
                                                                <Document
                                                                    file={ phishing }
                                                                    onLoadSuccess={this.onDocumentLoadSuccess}
                                                                >
                                                                <Page pageNumber={pageNumber} />

                                                                </Document>
                                                                <p>Page {pageNumber} of {numPages} </p>
                                                            </ModalBody>
                                                            <ModalFooter>
                                                                <button onClick={this.toggleModal(1)}>close</button>
                                                            </ModalFooter>     
                                                        </ModalDialog>   
                                                </div>    
                                            </ListGroupItem>
                                            
                                            <ListGroupItem className="list-group-item" >
                                                <div>
                                                    <a  onClick={this.toggleModal(2)}>Quiz</a>
                                                    <ModalDialog 
                                                        isOpen={this.state.modal2}
                                                        toggle={this.toggleModal(2)}
                                                        scrollable
                                                        centered
                                                        

                                                    >
                                                    <ModalBody> 
                                                        <CsvToHtmlTable 
                                                            data={sampleData} 
                                                            csvDelimiter="," 
                                                            tableClassName="table table-dark"
                                                        />
                                                    </ModalBody>
                                                    <ModalFooter>
                                                        <button onClick={this.toggleModal(2)}>close</button>
                                                    </ModalFooter>     
                                                        
                                                        
                                                    </ModalDialog>
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
                                    "url(https://mdbootstrap.com/img/Photos/Horizontal/Work/4-col/img%20%2814%29.jpg)"
                                }}
                                
                            >
                                <div 
                                    className="rgba-black-strong py-5 px-4 rounded text-white 
                                                d-flex align-items-center 
                                                 py-5 px-4 text-center"
                                >
                                    <div>
                                        <h5 className="blue-text">
                                            <MDBIcon icon="person"/> 
                                            Social Engineering
                                        </h5>
                                        <MDBCardTitle tag="h3" className="pt-2">
                                            <strong>Social Engineering</strong>

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
                                    className="rgba-black-strong  text-white 
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
                                    className="rgba-black-strong  text-white 
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
                                    className="rgba-black-strong  text-white 
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
                                    className="rgba-black-strong  text-white 
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
                                    className="rgba-black-strong  text-white 
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
                                    className="rgba-black-strong  text-white 
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