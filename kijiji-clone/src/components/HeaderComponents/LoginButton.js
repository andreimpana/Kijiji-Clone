import React, { Component } from 'react';

class LoginButton extends Component {
    render() {
        return (
            <a className="item" style={{ background: "#4B4881" }}>
                <p style={{color: "white"}}>
                    Login
                </p>
            </a>
        );
    }
}

export default LoginButton;