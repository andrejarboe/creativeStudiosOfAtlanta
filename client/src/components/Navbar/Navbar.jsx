import React, { Component } from 'react';


class Navbar extends Component {
    render() {
        return (
            <div>
                <nav>
                    <div class="nav-wrapper">
                        {/* <a href="#!" class="brand-logo">Logo</a> */}
                        <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
                        <ul class="right hide-on-med-and-down">
                            <li><a href="sass.html">Home</a></li>
                            <li><a href="badges.html">Classes</a></li>
                            <li><a href="collapsible.html">Gallery</a></li>
                            <li><a href="mobile.html">Blog</a></li>
                            <li><a href="mobile.html">About</a></li>
                            <li><a href="mobile.html">Contact</a></li>                                                        
                        </ul>
                    </div>
                </nav>

                <ul class="sidenav" id="mobile-demo">
                    <li><a href="sass.html">Sass</a></li>
                    <li><a href="badges.html">Components</a></li>
                    <li><a href="collapsible.html">Javascript</a></li>
                    <li><a href="mobile.html">Mobile</a></li>
                </ul>
            </div>
        );
    }
}

export default Navbar;