import React, { Component } from 'react';
import { connect } from 'react-redux';
import ListingsForm from './ListingsForm';
import { createListing } from '../../actions';

class ListingsCreate extends Component {
    onSubmit = (formValues) => {
        this.props.createListing(formValues);
    }

    render() {
        return (
            <div>
            <h3>Post an Ad</h3>
            <ListingsForm onSubmit={this.onSubmit}></ListingsForm>
            </div>
        );
    }
}

export default connect(null, { createListing })(ListingsCreate);
