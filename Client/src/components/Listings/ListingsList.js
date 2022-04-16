import React, { Component } from 'react';
import { fetchListings } from '../../actions/index';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class ListingsList extends Component {
    componentDidMount(){
        this.props.fetchListings();
    }

    renderList(){
        return this.props.listings.map(listing =>{
            return(
                <div className='card' key={listing.id} style={{'width': "366px"}}>
                    <div className='image'>
                        <img src={listing.imageLink}></img>
                    </div>
                    <div className="content">
                        <div class="header">{listing.title}</div>
                        <div className='meta'>{listing.location}</div>
                        <div className='description' style={{ 'font-size': '26px', 'font-weight':'bold', 'color' : 'green'}}>
                            {listing.price}
                            <span className='right floated'>
                                <Link to="/contact" className='ui green basic button'>Contact</Link>
                            </span>
                        </div>
                    </div>
                </div>
            );
        });
    }

    render() {
        console.log(this.props.listings);
        return (
            <div className='ui link cards' style={{"marginTop": "5em"}}>
                {this.renderList()}
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