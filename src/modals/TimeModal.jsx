import React, { Component } from 'react'

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';

import {Redirect} from 'react-router-dom';

class TimeModal extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            time: "",
            email: "",
            message: "",
            redirect: false
        }
        
        this.schedule = this.schedule.bind(this);
    }

    componentDidUpdate(old_props, old_state) {
        if(this.props.time !== "" && this.props.time !== old_props.time) {
            this.setState({
                time: this.props.time,
                message: ""
            })
        }
    }

    changeName(name) {
        this.setState({
            name: name
        })
        window.localStorage.setItem("name", name)
    }

    changeEmail(email) {
        this.setState({
            email: email
        })
        window.localStorage.setItem("email", email)
    }

    schedule() {
        if(this.state.name === "") {
            if(this.state.email === "") {
                this.setState({
                    message: "Please fill in your name and email!"
                })
            } else {
                this.setState({
                    message: "Please fill in your name!"
                })
            }
            return;
        } else if(this.state.email === "") {
            this.setState({
                message: "Please fill in your email!"
            })
            return;
        } else if(!this.validateEmail(this.state.email)) {
            this.setState({
                message: "Please verify your email is correctly formatted!"
            })
            return;
        }
        this.setState({
            redirect: true
        })
    }

    validateEmail(email) {
        var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    render() {
        return (
            <Modal id='timemodal' show={this.props.show} onHide={this.props.onHide}>
                <Modal.Header closeButton>
                <Modal.Title>Reserving {this.state.time.toString()}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='container'>
                        <Row className='d-flex justify-content-center'>
                            <span style={{"color": "red"}}> {this.state.message} </span>
                        </Row>
                        <Row className='d-flex justify-content-center'>
                            <span> What name would you like to reserve this under? </span>
                        </Row>
                        <Row className='d-flex justify-content-center'>
                            <input type='text' placeholder='Joe Smith' value={this.state.name} onChange={evt => this.changeName(evt.target.value)}/>
                        </Row>
                        <Row className='mt-3 d-flex justify-content-center'>
                            <span> What is your email? </span>
                        </Row>
                        <Row className='d-flex justify-content-center'>
                            <input type='text' placeholder='joe.smith@gmail.com' value={this.state.email} onChange={evt => this.changeEmail(evt.target.value)}/>
                        </Row>
                    </div>
                </Modal.Body>
                <Modal.Footer className='d-flex justify-content-between'>
                    <Button size='lg' variant="secondary" onClick={this.props.onHide}>
                        Close
                    </Button>
                    <Button size='lg' variant="primary" onClick={this.schedule}>
                        Schedule
                    </Button>
                </Modal.Footer>
                {this.state.redirect ? <Redirect to='/templates'/> : null}
            </Modal>
        );
    }
}
export default TimeModal