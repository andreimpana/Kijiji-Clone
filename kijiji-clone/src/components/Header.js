import React from "react";
import { Link } from "react-router-dom";
import LoginButton from "./HeaderComponents/LoginButton";
import PostAdButton from "./HeaderComponents/PostAdButton";

const Header = () => {
    return (
        <div className="ui fluid pointing menu">
            <a className="item">
                Listings
            </a>
            <a className="item">
                Watching
            </a>
            <a className="item">
                <div className="ui fluid search" >
                    <div className="ui icon input">
                        <input className="prompt" type="text" placeholder="Search for listings"/>
                        <i className="search icon"></i>
                    </div>
                </div>
            </a>    
            <div className="right menu">
                <LoginButton></LoginButton>
                <PostAdButton></PostAdButton>
            </div>
        </div>
    );
}

export default Header;