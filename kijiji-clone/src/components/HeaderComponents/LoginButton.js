import React, { Component } from 'react';

class LoginButton extends Component {
    render() {
        return (
            <div style={{"display": "flex","justifyContent":"center", "alignItems": "center", "marginRight": "20px"}}>
                <p>
                    <a href='#'>Register</a> or <a href='#'>Login</a>
                </p>
            </div>
        );
    }
}

export default LoginButton;