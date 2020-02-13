import React, { Component } from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import {Redirect} from 'react-router-dom';

import '../styles/Homepage.css'

class Voted extends Component {
    constructor(props) {
      super(props);

      this.state = {
        redirect: false
      }
    }

    componentDidMount() {
      var self = this;
        setTimeout(() => {
            window.localStorage.removeItem("name")
            window.localStorage.removeItem("date")

            self.setState({
              redirect: true
            })
            
        }, 3000)
    }

    render() {
      return (
        <div className='centered'>
          <Col>
            <Row className='d-flex justify-content-center'>
              <span id='title'>Voting successful!</span>
            </Row>
            <Row className='d-flex justify-content-center'>
              <span className='alt-text'>You will be redirected shortly</span>
            </Row>
          </Col>
          {this.state.redirect ? <Redirect to='/'/> : null}
        </div>
      );
    }
}

export default Voted