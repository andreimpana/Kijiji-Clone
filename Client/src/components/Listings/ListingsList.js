import React, { Component } from 'react';
import { fetchListings } from '../../actions/index';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class ListingsList extends Component {
    componentDidMount() {
        this.props.fetchListings();
    }

    renderList() {
        return this.props.listings.map(listing => {
            return (
                <div className='card' key={listing.id} style={{ 'width': "366px" }}>
                    <div className='image'>
                        <img src={listing.imageLink}></img>
                    </div>
                    <div className="content">
                        <div className="header">{listing.title}</div>
                        <div className='meta'>{listing.location}</div>
                        <div className='description' style={{ 'fontSize': '26px', 'fontWeight': 'bold', 'color': 'green' }}>
                            {listing.price}
                            <span className='right floated'>
                                {this.renderAdminButtons(listing)}
                                <Link to={`/contact/${listing.id}`} className='ui green basic button'>Contact</Link>
                            </span>
                        </div>
                    </div>
                </div>
            );
        });
    }

    renderAdminButtons(listing) {
        console.log(this.props.currentUserId)
        if (listing.userId === this.props.currentUserId) {
            return (
                <Link to={`/delete/${listing.id}`} className='ui red button'>Delete</Link>
            );
        }
    }

    render() {
        //console.log(this.props.listings);
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
export default connect(
    mapStateToProps,
    { fetchListings }
)(ListingsList);