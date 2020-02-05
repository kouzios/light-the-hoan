import React, { Component } from 'react';
import moment from 'moment-timezone'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import TemplateModal from '../modals/TemplateModal.jsx'

import {Link} from 'react-router-dom'

import '../styles/Templates.css';
let templates = require('../templates.json');

class Templates extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filteredTemplates: this.mapTemplates(templates),
            search: "",
            show: false,
            selected: {
                title: "",
                gif: ""
            }
        }

        this.filter = this.filter.bind(this)
        this.show = this.show.bind(this)
        this.handleClose = this.handleClose.bind(this)
    }

    mapTemplates(mappable) {
        return (
            mappable.map((template, index) => (
                <Card className='card clickable' key={'card' + index} onClick={val => this.show(template.title, template.gif)}>
                    <Col>
                        <Row className='mt-1 d-flex justify-content-center'>
                            <span key={'template' + index}>{template.title}</span>
                        </Row>
                        <hr/>
                        <Row className='image'>
                            <img key={'image' + index} alt={template.title} src={template.image}/>
                        </Row>
                    </Col>
                </Card>
            ))
        )
    }

    filter(query) {
        let searchMatch = new RegExp(query, "i")
        
        var filteredTemplates = (
            templates.filter(template => {
                return query === "" || template.title.match(searchMatch)
            })
        )

        this.setState({
            filteredTemplates: this.mapTemplates(filteredTemplates)
        })
    }

    show(title, gif) {
        this.setState({
            show: true,
            selected: {
                title: title,
                gif: gif
            }
        })
    }

    handleClose() {
        this.setState({
            show: false,
            selected: {
                title: "",
                gif: ""
            }
        })
    }

    parseDate(passedDate) {
        return moment.tz(passedDate, "America/Chicago").format('MM/DD/YYYY');
    }

    render() {
      return (
        <div>
            <Col>
                <Row className='d-flex justify-content-center'>
                    <Col>
                        <Link to= '/'>
                            <img className='clickable' id='back' src='back.png' alt="Go Back"/>
                        </Link>
                    </Col>
                    <Col md='10'>
                        <span id='title'>Please Select a light show</span>
                    </Col>
                </Row>
                <Row className='d-flex justify-content-center'>
                    <span id='date'>{this.parseDate(new Date())}</span>
                </Row>
                <Row className='d-flex justify-content-center'>
                    <input placeholder='Template title...' id='search' type='text' onChange={evt => this.filter(evt.target.value)}/>
                </Row>
            </Col>
            <Col className='d-flex justify-content-center'>
                <Row id='template'>
                    {this.state.filteredTemplates}
                </Row> 
            </Col>
            <TemplateModal selected={this.state.selected} show={this.state.show} handleClose={this.handleClose}/>
        </div>
      );
    }
}

export default Templates