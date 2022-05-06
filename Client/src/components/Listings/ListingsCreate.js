import React, { Component } from 'react';
import ListingsForm from './ListingsForm';

class ListingsCreate extends Component {
    render() {
        return (
            <div>
            <h3>Post an Ad</h3>
            <ListingsForm></ListingsForm>
            </div>
        );
    }
}

export default ListingsCreate;