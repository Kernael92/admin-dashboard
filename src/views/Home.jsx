import React from 'react';
// reactstrap components
import { Card, CardHeader,CardFooter, CardBody,CardTitle, Row, Col } from 'reactstrap';



class FileInput extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.fileInput = React.createRef();
    }
    handleSubmit(event) {
        event.preventDefault();
        alert(
            `Selected file - ${
                this.fileInput.current.files[0].name
            }`
        );
    }

    render() {
        return (
            <div className='content'>
                <Row>
                    <Col lg-8>
                    <Card className='card' >
                        <CardHeader></CardHeader>
                        <form action='localhost:5000/content/upload' onSubmit={this.handleSubmit} >
                        <CardBody>
                            <label htmlFor="">
                                Upload files:
                                <input type="file" name="video" ref={this.fileInput} />
                                <input type="file" name="infographic" ref={this.fileInput}/>
                                <input type="file" name="poster" ref={this.fileInput}/>
                            </label>
                        </CardBody>
                            <br/>
                        <CardFooter>
                            <button className="btn btn-info" type="submit">Submit</button>
                        </CardFooter>    
                        </form>
                    </Card>
                    </Col>
                </Row>
            </div>       
        );
    }
}
export default FileInput;

    