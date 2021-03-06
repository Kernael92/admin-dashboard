import React from 'react';
import axios from 'axios';



class Main extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            file: null
        };

        this.handleImagePreview = this.handleImagePreview.bind(this);
        this.handleImageUpload = this.handleImageUpload.bind(this);
    }


    handleImageUpload(uploadEvent) {
        uploadEvent.preventDefault();
        let fileToUpload = this.state.file;
        const formData = new FormData();

        formData.append("file", fileToUpload);

        axios({
            method: 'post',
            url: 'http://localhost:8000/content/upload',
            data: formData,
            config: { headers: { 'Content-Type': 'multipart/form-data' } }
        })
            .then(response => console.log(response))
            .catch(errors => console.log(errors))

    }

    handleImagePreview(previewEvent) {
        this.setState({
            file: URL.createObjectURL(previewEvent.target.files[0])
        })
    }

    render() {
        return (
            <div className="content">
                <form action="http://localhost:8000/content/upload" method="post" encType="multipart/form-data">
                    <div class="form-group">
                        <input type="file" class="form-control-file" onChange={this.handleImagePreview} />
                        <img src={this.state.file} class="img-thumbnail" alt="" />
                        <button type="submit" class="btn btn-outline-dark" onClick={this.handleImageUpload}> Upload Photo </button>
                    </div>
                </form>
            </div>
        )
    }

}
export default Main;