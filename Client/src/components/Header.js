import React from "react";
import { Link } from "react-router-dom";
import LoginButton from "./HeaderComponents/LoginButton";
import PostAdButton from "./HeaderComponents/PostAdButton";
import SearchBar from "./HeaderComponents/SearchBar";


class Header extends React.Component {

    onTermSubmit(term){
        //TODO implement filtering results
        console.log(term);
    }

    render(){
        return(
            <div className="ui borderless huge menu">
                <a className="header item" href="/">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Kijiji_%28ca%29_Logo_2019.svg/1920px-Kijiji_%28ca%29_Logo_2019.svg.png" />
                </a>
                <Link to="/" className="item">Home</Link>
                <Link to="/about" className="item">About</Link>
                <SearchBar onFormSubmit={this.onTermSubmit}></SearchBar>
                <LoginButton></LoginButton>
                <PostAdButton></PostAdButton>
            </div>
        );
    } 
}

export default Header;