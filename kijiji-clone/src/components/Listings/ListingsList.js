import React, { Component } from 'react';
import { fetchListings } from '../../actions/index';
import { connect } from 'react-redux';

class ListingsList extends Component {
    componentDidMount(){
        this.props.fetchListings();
    }

    render() {
        console.log(this.props.listings);
        return (
            <div className='ui container'>
                ListingsList
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        listings: Object.values(state.listings)
    }
}
export default connect(
    mapStateToProps, 
    { fetchListings }
)(ListingsList);