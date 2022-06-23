import React from 'react';
import Modal from '../Modal';
import history from '../../history';
import { connect } from 'react-redux';
import { fetchListing, deleteListing } from '../../actions';
import { Link } from 'react-router-dom';

class ListingsDelete extends Component {
  render() {
    return (
      <div>
        ListingsDelete
      </div>
    );
  }
}

export default ListingsDelete;