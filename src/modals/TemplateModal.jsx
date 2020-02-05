import React, { Component } from 'react'

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import {Link} from 'react-router-dom';

class TemplateModal extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: "",
            gif: ""
        }
    }

    componentDidUpdate(old_props, old_state) {
        if(this.props.selected !== undefined && this.props.selected !== old_props.selected) {
            this.setState({
                title: this.props.selected.title,
                gif: this.props.selected.gif
            })
        }
    }

    render() {
        return (
            <Modal show={this.props.show} onHide={this.props.handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>{this.state.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='container'>
                        <Row>
                            <span>Your Preview: </span>
                        </Row>
                        <Row>
                            <img alt={this.state.title} src={this.state.gif}/>
                        </Row>
                    </div>
                </Modal.Body>
                <Modal.Footer className='d-flex justify-content-around'>
                    <Button size='lg' variant="secondary" onClick={this.props.onHide}>
                        Close
                    </Button>
                    <Link to='/scheduled'>
                        <Button size='lg' variant="primary">
                            Schedule
                        </Button>
                    </Link>
                </Modal.Footer>
            </Modal>
        );
    }
}
export default TemplateModal
