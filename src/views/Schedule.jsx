import React, { Component } from 'react';
import moment from 'moment-timezone'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import TimeSelection from '../components/TimeSelection'

import {Link} from 'react-router-dom'

import '../styles/Homepage.css'

class Schedule extends Component {
    constructor(props) {
      super(props);

      this.state = {
        time: ""
      }
    }
    
    componentDidMount() {
      window.localStorage.removeItem("name")
    }

    render() {
      return (
        <div className='centered'>
          <Col className='h-100'>
            <Row className='w-100 d-flex justify-content-left'>
                <Link to= '/redirection'>
                    <img className='clickable' id='back' src='back.png' alt="Go Back"/>
                </Link>
            </Row>
            <Row id='title' className='w-100 d-flex justify-content-center'>
              <span className='select'>Select a time to get started!</span>
            </Row>
            <Row className='d-flex justify-content-center'>
              <span id='date'>{moment.tz(new Date().setDate(new Date().getDate() + 2), "America/Chicago").format("MMM d, YYYY")}</span>
            </Row>
            <Row className='d-flex ml-5 justify-content-center'>
              <TimeSelection setTime={this.setTime}/>
            </Row>
          </Col>
        </div>
      );
    }
}

export default Schedule