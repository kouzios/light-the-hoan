import React, { Component } from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import '../styles/Homepage.css'

class Scheduled extends Component {
    constructor(props) {
      super(props);
      var date = new Date();
      date.setDate(date.getDate() + 7);

      this.state = {
        min: new Date(),
        max: date
      }
    }

    componentDidMount() {
        setTimeout(() => {
            window.location.href = '/'
            window.localStorage.removeItem("name")
        }, 5000)
    }

    render() {
      return (
        <div className='centered'>
          <Col>
            <Row className='d-flex justify-content-center'>
              <span id='title'>Schedule successful!</span>
            </Row>
          </Col>
        </div>
      );
    }
}

export default Scheduled