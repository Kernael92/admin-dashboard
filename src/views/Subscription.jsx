import React, {useState} from 'react';
import ReactPlayer from 'react-player';
import Modal from "react-responsive-modal";


class Subscription extends React.Component {
    constructor(props, context) {
        super (props, context );
        this.state = {
            open: false
        }
    }
    onOpenModal = () => {
        this.setState(prevState => ({
            open: !prevState.open
        }));
    }
    onCloseModal = () => {
        this.setState({open: false})
    }
    

    render() {
        return (
            <>

                <div className="content">
                    <button onClick={this.onOpenModal}>Play Video </button>
                    <Modal
                        open={this.state.open}
                        onClose = {this.onCloseModal}
                        styles={{
                            modal: {
                                maxWidth: "unset",
                                width: "100%",
                                padding: "unset"
                            },
                            overlay: {
                                background: "rgba(0, 0, 0.5)"
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
                                playing 
                                controls
                                width="100%"
                                height="calc(100vh - 100px)"
                            /> 
                        </div>

                    </Modal>
                    
                </div>
            </>
        );
    }
}
export default Subscription;