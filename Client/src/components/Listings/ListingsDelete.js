import React from 'react';
import Modal from '../Modal';
import history from '../../history';
import { connect } from 'react-redux';
import { fetchListing, deleteListing } from '../../actions';
import { Link } from 'react-router-dom';

class ListingsDelete extends React.Component {
  componentDidMount() {
    this.props.fetchListing(this.props.match.params.id);
  }

  renderActions() {
    const { id } = this.props.match.params
    return (
      //Use this when you want to return multiple elements and not have presence in the DOM or use <> </>
      <React.Fragment>
        <button onClick={() => this.props.deleteListing(id)} className='ui button negative'>Delete</button>
        <Link to="/" className='ui button'>Cancel</Link>
      </React.Fragment>
    );
  }

  renderContent() {
    if (!this.props.Listing) {
      return "Are you sure you want to delete this listing?"
    }
    return `Are you sure you want to delete listing: ${this.props.Listing.title}`
  }

  render() {
    return (
      <Modal
        title="Delete Listing"
        content={this.renderContent()}
        actions={this.renderActions()}
        onDismiss={() => history.push('/')}
      ></Modal>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { Listing: state.listings[ownProps.match.params.id] }
};

export default connect(mapStateToProps, { fetchListing, deleteListing })(ListingsDelete);