import React, { Component } from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import {Link} from 'react-router-dom';

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
              <span className='select'>Light the Hoan Bridge</span>
            </Row>
            <Row className='d-flex justify-content-center'>
                <iframe title='Light The Hoan Intro' className="video embedly-embed" src="//cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fplayer.vimeo.com%2Fvideo%2F345612475%3Fapp_id%3D122963&amp;dntp=1&amp;url=https%3A%2F%2Fvimeo.com%2F345612475&amp;image=https%3A%2F%2Fi.vimeocdn.com%2Fvideo%2F795553371_1280.jpg&amp;key=96f1f04c5f4143bcb0f2e68c87d65feb&amp;type=text%2Fhtml&amp;schema=vimeo" scrolling="no" allow="autoplay; fullscreen" allowFullScreen={true} frameBorder="0"/>
            </Row>
            <Row className='d-flex justify-content-center'>
              <span className='credit'>Image Credit: Dave Witt</span>
            </Row>
            <Row className='d-flex justify-content-center'>
                <Link to='/redirection'>
                    <div className='custom-button'>
                        Get Started!
                    </div>
                </Link>
            </Row>
          </Col>
        </div>
      );
    }
}

export default Homepage