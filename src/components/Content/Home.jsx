import React from 'react';



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
            <form action='localhost:5000/content/upload' onSubmit={this.handleSubmit} method='post'>
                <label htmlFor="">
                    Upload file:
                    <input type="file" name="video" ref={this.fileInput}/>
                    <input type="file" name="infographic" ref={this.fileInput}/>
                    <input type="file" name="poster" ref={this.fileInput}/>
                </label>
                <br/>
                <button type="submit">Submit</button>
            </form>

        );
    }
}
export default FileInput;

    