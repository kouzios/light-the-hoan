import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Navbar from 'react-bootstrap/Navbar';

import '../styles/Header.css'

class Header extends Component {
    render() {
        return (
            <Navbar bg="light" className='d-flex justify-content-between'>
                <Link to="/">
                    <img src="https://assets.website-files.com/5bd78ed5d864832d0fcb2060/5be4890fbd92540ec95486e2_hoan-logo-2x.png" alt="" className="brand-logo"/>
                </Link>
                <Navbar>
                </Navbar>
            </Navbar>
        )
    }
}

export default Header;
