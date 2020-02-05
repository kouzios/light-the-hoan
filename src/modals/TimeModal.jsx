import React, { Component } from 'react'

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import {Link} from 'react-router-dom';

class TimeModal extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            time: ""
        }
    }

    componentDidUpdate(old_props, old_state) {
        if(this.props.time !== "" && this.props.time !== old_props.time) {
            this.setState({
                time: this.props.time
            })
        }
    }

    changeName(name) {
        this.setState({
            name: name
        })
        window.localStorage.setItem("name", name)
    }

    render() {
        return (
            <Modal id='timemodal' show={this.props.show} onHide={this.props.onHide}>
                <Modal.Header closeButton>
                <Modal.Title>Reserving {this.state.time.toString()}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='container'>
                        <Row>
                            <span> What name would you like to reserve this under? </span>
                        </Row>
                        <Row>
                            <input type='text' required placeholder='Joe Smith' value={this.state.name} onChange={evt => this.changeName(evt.target.value)}/>
                        </Row>
                    </div>
                </Modal.Body>
                <Modal.Footer className='d-flex justify-content-between'>
                    <Button size='lg' variant="secondary" onClick={this.props.onHide}>
                        Close
                    </Button>
                    <Link to='/templates'>
                        <Button size='lg' variant="primary">
                            Schedule
                        </Button>
                    </Link>
                </Modal.Footer>
            </Modal>
        );
    }
}
export default TimeModal
