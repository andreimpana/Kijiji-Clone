import React, { Component } from 'react';
import { Link } from "react-router-dom";


class LoginButton extends Component {
    render() {
        return (
            <div style={{"display": "flex","justifyContent":"center", "alignItems": "center", "marginRight": "20px"}}>
                <Link to={'/user/register'}>
                    <p style={{marginRight:"5px"}}>
                        Register 
                    </p>
                </Link>
                <Link>Or</Link>
                <Link to={'/user/login'}>
                    <p style={{marginLeft:"5px"}}>
                        Login
                    </p>
                </Link>
            </div>
        );
    }
}

export default LoginButton;