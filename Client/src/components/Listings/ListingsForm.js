import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class ListingsForm extends Component {
  renderError({ error, touched }) {
    if (touched && error) {
        return (
            <div className="ui error message">
                <div className="header">{error}</div>
            </div>
        );
    }
  }

  renderInput = ({ input, label, meta}) => {
    const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} autoComplete="off" />
        {this.renderError(meta)}
      </div>
    );
  }
  
  onSubmit = (formValues) => {
    this.props.onSubmit(formValues);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit(this.onSubmit)} className='ui form error'>
          <Field name="title" component={this.renderInput} label="Enter Title"></Field>
          <Field name="price" component={this.renderInput} label="Price"></Field>
          <Field name="location" component={this.renderInput} label="Location"></Field>
          <Field name="imageLink" component={this.renderInput} label="Link to Image"></Field>
          <Field name="contactEmail" component={this.renderInput} label="Contact Email"></Field>
          <Field name="contactPhone" component={this.renderInput} label="Contact Phone Number"></Field>
          <button className="ui primary button" type="submit">Post Ad</button>
        </form>
      </div>
    );
  }
}

const validate = (formValues) => {
  const errors = {};
  if (!formValues.title) {
      //Only run if user did not enter title
      errors.title = 'You must enter a value';
  }

  if (!formValues.price) {
    errors.price = 'You must enter a price'
  }

  if (!formValues.location) {
    errors.location = 'You must enter a location'
  }

  if (!formValues.imageLink) {
    errors.imageLink = 'You must enter a imageLink'
  }

  if (!formValues.contactEmail) {
    errors.contactEmail = 'You must enter a email'
  }

  if (!formValues.contactPhone) {
    errors.contactPhone = 'You must enter a phone number'
  }

  return errors;
};

export default reduxForm({
  form: 'ListingsForm',
  validate
})(ListingsForm);