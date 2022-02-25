import React from "react";
import { Link } from "react-router-dom";
import LoginButton from "./HeaderComponents/LoginButton";
import PostAdButton from "./HeaderComponents/PostAdButton";

const Header = () => {
    return (
        <div className="ui fixed borderless huge menu">
                <a className="header item">Kijiji clone</a>
                <Link to="/" className="active item">Home</Link>
                <Link to="/about" className="item">About</Link>

                <div className="right menu">
                    <div class="item">
                        <div class="ui icon input">
                            <input type="text" placeholder="Search..." />
                            <i class="search link icon"></i>
                        </div>
                    </div>
                    <LoginButton></LoginButton>
                    <PostAdButton></PostAdButton>
                </div>
            </div>
    );
}

export default Header;