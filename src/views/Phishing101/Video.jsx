import React from 'react';
import uploadData from 'routes/phishing101.js';



// reactstrap components
import { Card, CardHeader,CardFooter, CardBody,CardTitle, Row, Col } from 'reactstrap';



class Video extends React.Component {
    render() {
        const { uploadData } = this.props;
        return (
            <div className='content'>
                <Row>
                    <Col lg-8>
                    <Card className='card' >
                        <CardHeader></CardHeader>
                        <CardBody>
                            <div>
                                {uploadData.map((prop, key) => {
                                    return (
                                        <li
                                        key={key}
                                        > 
                                            <p>{prop.video}</p>
                                        </li>
                                    );
                                    })}                    
                                {/* <ol>
                                    <li>{uploadData.video}</li>
                                </ol> */}
                            </div>
                        </CardBody>
                    </Card>
                    </Col>
                </Row>
            </div>       
        );
    }
}
export default Video;

    