import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Auth from '../Auth';


class LoginButton extends Component {
    render() {
        return (
            <div style={{"display": "flex","justifyContent":"center", "alignItems": "center", "marginRight": "20px"}}>
                {/* <Link to={'/user/register'}>
                    <p style={{marginRight:"5px"}}>
                        Register 
                    </p>
                </Link>
                <Link>Or</Link> */}
                {/* <Link to={'/user/login'}>
                    <p style={{marginLeft:"5px"}}>
                        Login
                    </p>
                </Link> */}
                <Auth></Auth>
            </div>
        );
    }
}

export default LoginButton;