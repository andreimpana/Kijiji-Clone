import React, { Component } from 'react';

class PostAdButton extends Component {
    render() {
        return (
            <a className="item" style={{ background: "#4B4881" }}>
                <p style={{color: "white"}}>
                    Post Ad
                </p>
            </a>
        );
    }
}

export default PostAdButton;