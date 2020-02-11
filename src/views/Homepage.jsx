import React, { Component } from 'react';
import moment from 'moment-timezone'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import TimeSelection from '../components/TimeSelection'

import '../styles/Homepage.css'

class Homepage extends Component {
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
          <Col>
            <Row id='title' className='d-flex justify-content-center'>
              <span className='select'>Select a </span><span id='select-orange'>&nbsp;time&nbsp;</span><span className='select'>to get started!</span>
            </Row>
            <Row className='d-flex justify-content-center'>
              <span id='date'>{moment.tz(new Date().setDate(new Date().getDate() + 2), "America/Chicago").format("MMM d, YYYY")}</span>
            </Row>
            <Row className='d-flex justify-content-center'>
              <TimeSelection setTime={this.setTime}/>
            </Row>
            <Row style={{"margin-top":"150px"}} className='d-flex justify-content-center'>
              <span className='credit'>Image Credit: Dave Witt</span>
            </Row>
          </Col>
        </div>
      );
    }
}

export default Homepage