import React, { Component } from 'react';
import { fetchListings, fetchListingKeyword } from '../../actions/index';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class ListingsList extends Component {
    componentDidMount() {
        if(this.props.searchTerm!== "")
        {
            this.props.fetchListingKeyword(this.props.searchTerm);
        }
        else
        {
            this.props.fetchListings();
        }
    }

    renderList() {
        console.log(this.props.listings)
        return this.props.listings.map(listing => {
            return (
                <div className='card' key={listing.id} style={{ 'width': "366px", "boxShadow": "1px 1px 4px" }}>
                    <div className='image'>
                        <img src={listing.imageLink} style={{ 'width': "366px", 'height': '275px' }}></img>
                    </div>
                    <div className="content">
                        <div className="header">{listing.title}</div>
                        <div className='meta'>{listing.location}</div>
                        <div className='description' style={{ 'fontSize': '26px', 'fontWeight': 'bold', 'color': 'green' }}>
                            {listing.price}
                            <span className='right floated'>
                                {this.renderControls(listing)}
                            </span>
                        </div>
                    </div>
                </div>
            );
        });
    }

    renderControls(listing) {
        if (listing.userId === this.props.currentUserId) {
            return (
                <div className='adminControls'>
                    <Link to={`/delete/${listing.id}`} className='ui red button'>Delete</Link>
                    <Link to={`/edit/${listing.id}`} className='ui blue inverted button'>Edit</Link>
                </div>
            );
        } else {
            return (
                <Link to={`/contact/${listing.id}`} className='ui green inverted button'>Contact</Link>
            );
        }
    }
    render() {
        return (
            <div className='ui link cards' style={{ "marginTop": "5em" }}>
                {this.renderList()}
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        listings: Object.values(state.listings),
        currentUserId: state.auth.userId
    }
}
export default connect(mapStateToProps, { fetchListings, fetchListingKeyword })(ListingsList);