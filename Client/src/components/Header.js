import React, { Component } from "react";
import { Link } from "react-router-dom";
import LoginButton from "./HeaderComponents/LoginButton";
import PostAdButton from "./HeaderComponents/PostAdButton";
import SearchBar from "./HeaderComponents/SearchBar";


class Header extends React.Component {
    constructor(props)
    {
        super(props);
        this.onTermSubmit = this.onTermSubmit.bind(this)
    }
    onTermSubmit(term) {
        this.props.onTermSubmit(term)
    }

    render() {
        return (
            <div className="ui borderless huge menu">
                <a className="header item" href="/">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Kijiji_%28ca%29_Logo_2019.svg/1920px-Kijiji_%28ca%29_Logo_2019.svg.png" />
                </a>
                <Link to="/" className="item">Home</Link>
                <Link to="/about" className="item">About</Link>
                <SearchBar onFormSubmit={this.onTermSubmit}></SearchBar>
                <LoginButton />
                <PostAdButton />
            </div>
        );
    }
}

export default Header;