import React, { Component } from 'react';
import M from 'materialize-css';

class Navbar extends Component {
    componentWillMount(){
        const elem = document.querySelector('.sidenav');
        const instance = M.Sidenav.init(elem, {});
    };

    render() {
        return (
            <div>
                <nav>
                    <div className="nav-wrapper">
                        {/* <a href="#!" className="brand-logo">Logo</a> */}
                        <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                        <ul className="right hide-on-med-and-down">
                            <li><a href="/">Home</a></li>
                            <li><a href="/classes">Classes</a></li>
                            <li><a href="/gallery">Gallery</a></li>
                            <li><a href="/blog">Blog</a></li>
                            <li><a href="/about">About</a></li>
                            <li><a href="/contact">Contact</a></li>
                        </ul>
                    </div>
                </nav>

                <ul className="sidenav" id="mobile-demo">
                    <li><a href="/">Home</a></li>
                    <li><a href="/classes">Classes</a></li>
                    <li><a href="/gallery">Gallery</a></li>
                    <li><a href="/blog">Blog</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </div>
        );
    }
}

export default Navbar;