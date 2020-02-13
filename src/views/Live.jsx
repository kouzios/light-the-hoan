import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button';

import {Link} from 'react-router-dom';

import '../styles/Homepage.css'

class Live extends Component {
    constructor(props) {
      super(props);

      this.state = {
        time: ""
      }
    }

    render() {
      return (
        <div className='centered'>
          <Col className='h-100'>
            <Row>
                <Col md='1'>
                    <Link to= '/redirection'>
                        <img className='clickable' id='back' src='back.png' alt="Go Back"/>
                    </Link>
                </Col>
                <Col md='10'>
                    <span id='title' className='select'>The Hoan Bridge, Live!</span>
                </Col>
            </Row>
            <Row className='d-flex justify-content-center'>
                <span className='alt-text'>Well, it's not actually live. But it would be!</span>
            </Row>                
            <Row id='create' className='d-flex justify-content-center'>
                <img id='create-image' alt='design plan' src='live-sample.png'/>
            </Row>
            <Link to='/redirection'>
                <Button className='mt-2' size='lg' variant="secondary">
                    Go Back
                </Button>
            </Link>
          </Col>
        </div>
      );
    }
}

export default Live