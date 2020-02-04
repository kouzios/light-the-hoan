import React, { Component } from 'react';
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import {Link} from 'react-router-dom'

import '../styles/Homepage.css'

class Homepage extends Component {
    constructor(props) {
      super(props);
      var date = new Date();
      date.setDate(date.getDate() + 7);

      this.state = {
        min: new Date(),
        max: date,
        date: ""
      }

      this.changeDate = this.changeDate.bind(this)
    }

    changeDate(date) {
      this.setState({
        date: date
      })
      window.localStorage.setItem("date", date);
    }

    render() {
      return (
        <div className='centered'>
          <Col>
            <Row className='d-flex justify-content-center'>
              <span id='credit'>A Committee of the Daniel W. Hoan Foundation</span>
            </Row>
            <Row className='d-flex justify-content-center'>
              <span id='title'>Light the Hoan</span>
            </Row>
            <Row className='d-flex justify-content-center'>
              <span id='credit'>Image Credit: Dave Witt</span>
            </Row>
            <Row className='d-flex justify-content-center'>
              <input type='date' onChange={evt => this.changeDate(evt.target.value)} min={this.state.min} max={this.state.max}/>
            </Row>
            <Row className='mt-5 d-flex justify-content-center'>
              <Link to='/templates'>
                {
                  this.state.date === "" ?
                  <Button disabled className='no-cursor' size='lg'>Select a light show!</Button>
                  :
                  <Button size='lg'>Select a light show!</Button>
                }
              </Link>
            </Row>
          </Col>
        </div>
      );
    }
}

export default Homepage