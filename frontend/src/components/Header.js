import React from 'react';

// import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

const AboutSection = document.getElementsByClassName('About--Section');

const Header = () => {
    return (
        <header className='Nav'>

            <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-transparent" id='navy'>
                <a className="navbar-brand" href="/">Navbar</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="navbar--items" href={AboutSection} id="nav--item1">About Us</a>
                        <a className="navbar--items" href="/" id="nav--item2">About Us</a>
                    </div>
                </div>
            </nav>

        </header>
    )
}

export default Header
