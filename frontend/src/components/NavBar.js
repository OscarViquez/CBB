import React, { useState, useEffect } from 'react';
import '../css/nav.css';

// https://www.youtube.com/watch?v=JMsNslI8KoY&ab_channel=BrianDesign


const NavBar = (props) => {
    return (
        <header className='Nav Active'>
            <nav className="navbar fixed-top navbar-expand-lg navbar-dark" id='navy'>
                <a className="navbar-brand" href="/">Navbar</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="navbar--items" href={props.section} id="nav--item1">About Us</a>
                        <a className="navbar--items" href={props.section} id="nav--item2">Rooms</a>
                        <a className="navbar--items" href={props.section} id="nav--item3">Amenities</a>
                        <a className="navbar--items" href={props.section} id="nav--item4">Calender / Rates</a>
                    </div>
                </div>
            </nav>

        </header>
    )
}

export default NavBar
