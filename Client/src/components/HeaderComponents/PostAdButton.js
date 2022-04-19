import React, { Component } from 'react';
import { Link } from "react-router-dom";

class PostAdButton extends Component {
    render() {
        return (
            //4b4881
            <Link to={'/createAd'} className="item" style={{background: "#373373"}}>
                <p style={{color: "white", "fontWeight":"bold"}}>
                    Post Ad
                </p>
            </Link>
        );
    }
}

export default PostAdButton;