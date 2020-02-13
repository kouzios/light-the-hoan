import React, { Component } from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import '../styles/Homepage.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Link} from 'react-router-dom';

class Redirection extends Component {
    render() {
      return (
        <div className='centered'>
          <Col>
            <Row className='d-flex justify-content-left ml-5'>
                <Link to= '/'>
                    <img className='clickable' id='back' src='back.png' alt="Go Back"/>
                </Link>
            </Row>
            <Row id='title' className='d-flex justify-content-center'>
              <span className='select'>Select an action!</span>
            </Row>
            <Row>
              <Col className='d-flex justify-content-center' md='6'>
                <div className='d-flex align-items-center justify-content-center custom-card'>
                    <Link to='/create'>
                        <h1>
                            <FontAwesomeIcon icon='lightbulb' className='mr-2'/>Create
                        </h1>
                    </Link>
                </div>
              </Col>
              <Col className='d-flex justify-content-center' md='6'>
                <div className='d-flex align-items-center justify-content-center custom-card'>
                    <Link to='/schedule'>
                        <h1>
                            <FontAwesomeIcon icon='calendar-alt' className='mr-2'/> Schedule 
                        </h1>
                    </Link>
                </div>
              </Col>
            </Row>
            <Row className='d-flex justify-content-center'>
              <Col className='d-flex justify-content-center' md='6'>
                <div className='d-flex align-items-center justify-content-center custom-card'>
                    <Link to='/vote'>
                        <h1>
                            <FontAwesomeIcon icon='poll' className='mr-2'/>Vote
                        </h1>
                    </Link>
                </div>
              </Col>
              <Col className='d-flex justify-content-center' md='6'>
                <div className='d-flex align-items-center justify-content-center custom-card'>
                    <Link to='/live'>
                        <h1>
                            <FontAwesomeIcon icon='video' className='mr-2'/>View Live
                        </h1>
                    </Link>
                </div>
              </Col>
            </Row>
          </Col>
        </div>
      );
    }
}

export default Redirection