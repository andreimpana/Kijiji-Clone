import React, { Component } from 'react';

class SearchBar extends Component {
    render() {
        return (
            <div className="right menu">
                <div class="item">
                    <div class="ui icon input">
                        <input type="text" placeholder="Search..." />
                        <i class="search link icon"></i>
                    </div>
                </div>
            </div>
        );
    }
}

export default SearchBar;