import React, { Component } from 'react';
import logo from '../logo.svg';

class Header extends Component {
    render() {
        return (
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="display-4 d-none d-sm-block">Belatrix Technical Test</h1>
                    <h1 className="display-4 d-block d-sm-none">Belatrix</h1>
                    <div className="float-right">
                        <img src={logo} className="App-logo" alt="logo" />
                    </div>
                </div>
            </div>
        )
    }
}

export default Header;