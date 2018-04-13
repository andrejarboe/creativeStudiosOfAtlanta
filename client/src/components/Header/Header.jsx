import React, { Component } from 'react';
import Logo from '../../images/CSA-AWP-Logo-web.png';

class Header extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col m6">
                        <img src={Logo} alt="" />
                    </div>
                    <div className="col m6">
                        <div className="col m6">
                            <a href="">678-481-8191</a>
                        </div>
                        <div className="col m6">
                            <a href="">
                                Creative Studios of Atlanta
                                <br/>
                                274 North Main Street, 
                                <br/>
                                Studio A
                                Alpharetta, GA 30009
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;