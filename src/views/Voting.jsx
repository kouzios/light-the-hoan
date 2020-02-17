import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'

import {Link} from 'react-router-dom';

import '../styles/Homepage.css'

class Voting extends Component {
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
            <Row className='d-flex justify-content-left'>
                <Col md='1'>
                    <Link to= '/redirection'>
                        <img className='clickable' id='back' src='back.png' alt="Go Back"/>
                    </Link>
                </Col>
                <Col md='10'>
                    <span id='title' className='select'>Our voting plan:</span>
                </Col>
            </Row>
            <Row id='create' className='d-flex justify-content-center'>
                <img id='create-image' alt='Voting plan' src='Vote Page.png'/>
            </Row>
            <Link to='/voted'>
                <Button className='mt-2' size='lg' variant="primary">
                    Vote
                </Button>
            </Link>
          </Col>
        </div>
      );
    }
}

export default Voting