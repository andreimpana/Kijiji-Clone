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

  render() {
    return (
      <div>
        <form className='ui form error'>
          <Field name="title" component={this.renderInput} label="Enter Title"></Field>
          <Field name="description" component={this.renderInput} label="Enter Description"></Field>
          <Field name="price" component={this.renderInput} label="Price"></Field>
          <Field name="location" component={this.renderInput} label="Location"></Field>
          <Field name="image" component={this.renderInput} label="Link to Image"></Field>
          <Field name="email" component={this.renderInput} label="Contact Email"></Field>
          <Field name="phone" component={this.renderInput} label="Contact Phone Number"></Field>
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

  if (!formValues.description) {
      errors.description = 'You must enter a description'
  }

  return errors;
};

export default reduxForm({
  form: 'ListingsForm',
  validate
})(ListingsForm);