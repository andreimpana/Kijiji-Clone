import React, { Component } from 'react';

class SearchBar extends Component {
    state = {term: ''};
    
    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.onFormSubmit(this.state.term);
    }
    
    render() {
        return (
            <div className="right menu">
                <form onSubmit={this.onFormSubmit}>
                        <div class="item">
                            <div class="ui icon input">
                                    <input 
                                        type="text" 
                                        placeholder="Search..." 
                                        value={this.state.term}
                                        onChange={e=>this.setState({term: e.target.value})}
                                        />
                                    <i class="search link icon"></i>
                            </div>
                        </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;