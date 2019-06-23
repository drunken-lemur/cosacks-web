import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';
import GeosuggestInput from 'react-geosuggest';

import './style.scss';

@observer
class Address extends Component {
  onFocus = () => {};

  onBlur = value => {};

  onChange = value => {};

  onSuggestNoResults = userInput => {};

  onSuggestSelect = suggest => {
    if (!suggest) {
      this.resetFieldValue();
      return;
    }

    const { label, location } = suggest;

    this.props.field.set({
      location: label,
      coordinates: [location.lng, location.lat]
    });

    this.props.field.resetValidation();
  };

  resetFieldValue = () => {
    this.props.field.set({
      location: '',
      coordinates: undefined
    });

    this.props.field.resetValidation();
  };

  render() {
    const { field, disabled, fixtures, ...rest } = this.props;

    return (
      <GeosuggestInput
        initialValue={field.$('location').value}
        {...field.bind({
          onChange: this.onChange,
          onFocus: this.onFocus,
          onBlur: this.onBlur
        })}
        onSuggestSelect={this.onSuggestSelect}
        onSuggestNoResults={this.onSuggestNoResults}
        {...rest}
      />
    );
  }
}

Address.defaultProps = {
  className: '',
  style: {},
  disabled: false,
  fixtures: [],
  autoActivateFirstSuggest: true
};

Address.propTypes = {
  field: PropTypes.object.isRequired,
  disabled: PropTypes.bool,
  fixtures: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      location: PropTypes.shape({
        lat: PropTypes.number.isRequired,
        lng: PropTypes.number.isRequired
      })
    })
  )
};

export default Address;
