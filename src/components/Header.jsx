import React, { Component } from 'react'

import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import '../styles/Header.css'

class Header extends Component {
    render() {
        return (
            <Navbar bg="light" className='d-flex justify-content-around'>
                <img src="https://assets.website-files.com/5bd78ed5d864832d0fcb2060/5be4890fbd92540ec95486e2_hoan-logo-2x.png" alt="" className="brand-logo"/>
                <NavDropdown title="Menu" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#create">Create</NavDropdown.Item>
                    <NavDropdown.Item href="#live-feed">Live Feed</NavDropdown.Item>
                    <NavDropdown.Item href="#voting">Voting</NavDropdown.Item>
                    <NavDropdown.Item href="#schedule">Schedule in advance</NavDropdown.Item>
                </NavDropdown>
            </Navbar>
        )
    }
}

export default Header;
