import React, { Component } from 'react';
import Row from 'react-bootstrap/Row'
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

    show(time, reserved) {
        if(reserved === 'unreserved') {
            time = time.setDate(time.getDate() + 2)
            this.setState({
                show: true,
                time: moment.tz(time, "America/Chicago").format("hh:mm A on MMM d, YYYY ")
            })
        }
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
                date.setHours(hours)
                date.setMinutes(15*index)

                var user = "Reserved by: " + reservation.user;
                var reserved = 'reserved';

                if(reservation.user === "") {
                    user = "Unreserved"
                    reserved = 'unreserved'
                }

                return (
                    <div title={user} key={'col' + index}>
                        <div className={reserved + ' card clickable d-flex align-items-bottom'} key={'card' + index} onClick={() => this.show(date, reserved)}>
                            <span key={'date'+index}>{moment.tz(date, 'America/Chicago').format("hh:mm A")}</span>
                        </div>
                    </div>
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