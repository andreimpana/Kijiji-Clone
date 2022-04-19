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
                        <div className="item">
                            <div className="ui icon input">
                                    <input 
                                        type="text" 
                                        placeholder="Search..." 
                                        value={this.state.term}
                                        onChange={e=>this.setState({term: e.target.value})}
                                        />
                                    <i className="search link icon"></i>
                            </div>
                        </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;