import React from 'react';
import uploads from 'routes/phishing101.js';



// reactstrap components
import { Card, CardHeader,CardFooter, CardBody,CardTitle, Row, Col } from 'reactstrap';



class Video extends React.Component {
    render() {
        const { uploads } = this.props;
        return (
            <div className='content'>
                <Row>
                    <Col lg-8>
                    <Card className='card' >
                        <CardHeader></CardHeader>
                        <CardBody>
                            <div className="middle aligned content">
                                <ol>
                                    <li>{props.video}</li>
                                </ol>
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