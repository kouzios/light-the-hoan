import React, { Component } from 'react';
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import moment from 'moment-timezone'
import TimeModal from '../modals/TimeModal'

import '../styles/TimeSelection.css'
let reservations = require('../reservations.json');

class TimeSelection extends Component {
    constructor(props) {
      super(props);

      this.state = {
        reservations: this.mapReservations(reservations),
        show: false,
        time: ""
      }

      this.show = this.show.bind(this)
      this.handleClose = this.handleClose.bind(this)
    }

    show(time) {
        time = time.setDate(time.getDate() + 2)
        this.setState({
            show: true,
            time: moment.tz(time, "America/Chicago").format("hh:mm A on MMM d, YYYY ")
        })
    }

    handleClose() {
        this.setState({
            show: false
        })
    }

    mapReservations(mappable) {
        var hours = 17;
        return (
            mappable.map((reservation, index) => {
                var date = new Date();
                date.setHours(hours + index)
                date.setMinutes(0)

                var user = reservation.user;
                var reserved = 'reserved';

                if(user === "") {
                    user = "Not Reserved"
                    reserved = 'unreserved'
                }

                return (
                    <Col md='2' key={'col' + index}>
                        <Card className={reserved + ' card clickable'} key={'card' + index} onClick={() => this.show(date)}>
                            <span key={'reservation' + index}>{user}</span>
                            <span key={'date'+index}>{moment.tz(date, 'America/Chicago').format("hh:mm A")}</span>
                        </Card>
                    </Col>
                )
            })
        )
    }

    render() {
      return (
        <Row id='time'>
            { this.state.reservations }
            <TimeModal onHide={this.handleClose} show={this.state.show} time={this.state.time}/>
        </Row>
      );
    }
}

export default TimeSelection